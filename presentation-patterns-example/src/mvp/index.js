// mvp/index.js
const TaskModel = require('./models/TaskModel');
const TaskView = require('./views/TaskView');
const TaskPresenter = require('./presenters/TaskPresenter');

const model = new TaskModel();
const view = new TaskView();
const presenter = new TaskPresenter(model, view);

presenter.run();