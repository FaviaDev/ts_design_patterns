// src/services/TaskService.ts
import { injectable, inject } from 'inversify';
import TYPES from '../container/types.ts';
import type TaskRepository from '../repositories/TaskRepository.ts';
import Task from '../models/Task.ts';

@injectable()
export default class TaskService {
    constructor(@inject(TYPES.TaskRepository) private taskRepository: TaskRepository) {}

    addTask(description: string): Task {
        return this.taskRepository.addTask(description);
    }

    getTasks(): Task[] {
        return this.taskRepository.getTasks();
    }
}