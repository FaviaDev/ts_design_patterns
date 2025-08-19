// mvvm/views/TaskView.js
import inquirer from 'inquirer';

class TaskView {
    constructor(viewModel) {
        this.viewModel = viewModel;
    }

    async render() {
        while (true) {
            const action = await this.showMenu();
            if (action === 'Exit') {
                this.viewModel.exit();
                break;
            }

            if (action === 'Add Task') {
                const description = await this.getTaskDescription();
                this.displayMessage(this.viewModel.addTask(description));
            } else if (action === 'List Tasks') {
                const tasks = this.viewModel.listTasks();
                if (tasks.length === 0) {
                    this.displayMessage('No tasks found.');
                } else {
                    this.displayTasks(tasks);
                }
            }
        }
    }

    async showMenu() {
        const answers = await inquirer.prompt({
            type: 'list',
            name: 'action',
            message: 'What do you want to do?',
            choices: ['Add Task', 'List Tasks', 'Exit']
        });
        return answers.action;
    }

    async getTaskDescription() {
        const answers = await inquirer.prompt({
            type: 'input',
            name: 'description',
            message: 'Enter task description:'
        });
        return answers.description;
    }

    displayTasks(tasks) {
        console.log('Tasks:');
        tasks.forEach(task => {
            console.log(`[${task.completed ? 'X' : ' '}] ${task.id}: ${task.description}`);
        });
    }

    displayMessage(message) {
        console.log(message);
    }
}

export default TaskView;