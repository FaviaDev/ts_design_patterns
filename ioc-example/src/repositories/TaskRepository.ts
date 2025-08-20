// src/repositories/TaskRepository.ts
import Task from '../models/Task.ts';

interface TaskRepository {
    addTask(description: string): Task;
    getTasks(): Task[];
}

export default TaskRepository;