// mvc/index.js
import TaskModel from './models/TaskModel.js';
import TaskView from './views/TaskView.js';
import TaskController from './controllers/TaskController.js';

const model = new TaskModel();
const view = new TaskView();
const controller = new TaskController(model, view);

controller.run();