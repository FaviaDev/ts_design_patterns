// index.ts
import 'reflect-metadata';
import container from './src/container/container.ts';
import TYPES from './src/container/types.ts';
import TaskView from './src/views/TaskView.ts';

const taskView = container.get<TaskView>(TYPES.TaskView);
taskView.run();