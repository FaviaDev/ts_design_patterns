// tests/TaskService.test.ts
import { Container } from 'inversify';
import TaskService from '../src/services/TaskService.ts';
import TaskRepository from '../src/repositories/TaskRepository.ts';
import Task from '../src/models/Task.ts';
import TYPES from '../src/container/types.ts';

// Mock de TaskRepository
class MockTaskRepository extends TaskRepository {
    private tasks: Task[] = [];

    addTask(description: string): Task {
        const task = new Task(this.tasks.length + 1, description);
        this.tasks.push(task);
        return task;
    }

    getTasks(): Task[] {
        return this.tasks;
    }
}

describe('TaskService', () => {
    let container: Container;
    let taskService: TaskService;

    beforeEach(() => {
        container = new Container();
        container.bind<TaskRepository>(TYPES.TaskRepository).to(MockTaskRepository);
        container.bind<TaskService>(TYPES.TaskService).to(TaskService);
        taskService = container.get<TaskService>(TYPES.TaskService);
    });

    it('debería añadir una tarea correctamente', () => {
        const description = 'Test Task';
        const task = taskService.addTask(description);
        expect(task.description).toBe(description);
        expect(task.id).toBe(1);
        expect(task.completed).toBe(false);
    });

    it('debería listar todas las tareas', () => {
        taskService.addTask('Task 1');
        taskService.addTask('Task 2');
        const tasks = taskService.getTasks();
        expect(tasks.length).toBe(2);
        expect(tasks[0].description).toBe('Task 1');
        expect(tasks[1].description).toBe('Task 2');
    });
});