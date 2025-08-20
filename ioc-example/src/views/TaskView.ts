// src/views/TaskView.ts
import { injectable, inject } from 'inversify';
import inquirer from 'inquirer';
import TYPES from '../container/types.ts';
import TaskService from '../services/TaskService.ts';
import Task from '../models/Task.ts';

@injectable()
export default class TaskView {
    constructor(@inject(TYPES.TaskService) private taskService: TaskService) {}

    async run(): Promise<void> {
        while (true) {
            const action = await this.showMenu();
            if (action === 'Exit') {
                console.log('¡Adiós!');
                break;
            }

            if (action === 'Add Task') {
                const description = await this.getTaskDescription();
                const task = this.taskService.addTask(description);
                console.log(`Tarea añadida: ${task.description}`);
            } else if (action === 'List Tasks') {
                const tasks = this.taskService.getTasks();
                this.displayTasks(tasks);
            }
        }
    }

    async showMenu(): Promise<string> {
        const answers = await inquirer.prompt({
            type: 'list',
            name: 'action',
            message: '¿Qué quieres hacer?',
            choices: ['Add Task', 'List Tasks', 'Exit']
        });
        return answers.action;
    }

    async getTaskDescription(): Promise<string> {
        const answers = await inquirer.prompt({
            type: 'input',
            name: 'description',
            message: 'Ingresa la descripción de la tarea:'
        });
        return answers.description;
    }

    displayTasks(tasks: Task[]): void {
        console.log('Tareas:');
        tasks.forEach(task => {
            console.log(`[${task.completed ? 'X' : ' '}] ${task.id}: ${task.description}`);
        });
    }
}