// src/repositories/TaskRepository.ts
import Task from '../models/Task.ts';

export default abstract class TaskRepository {
    abstract addTask(description: string): Task;
    abstract getTasks(): Task[];
}