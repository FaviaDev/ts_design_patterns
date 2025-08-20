// src/repositories/InMemoryTaskRepository.ts
import { injectable } from 'inversify';
import type TaskRepository from './TaskRepository.ts';
import Task from '../models/Task.ts';

@injectable()
export default class InMemoryTaskRepository implements TaskRepository {
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