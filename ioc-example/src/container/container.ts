// src/container/container.ts
import { Container } from 'inversify';
import TYPES from './types.ts';
import type TaskRepository from '../repositories/TaskRepository.ts';
import InMemoryTaskRepository from '../repositories/InMemoryTaskRepository.ts';
import TaskService from '../services/TaskService.ts';
import TaskView from '../views/TaskView.ts';

const container = new Container();

container.bind<TaskRepository>(TYPES.TaskRepository).to(InMemoryTaskRepository);
container.bind<TaskService>(TYPES.TaskService).to(TaskService);
container.bind<TaskView>(TYPES.TaskView).to(TaskView);

export default container;