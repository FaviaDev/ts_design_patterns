// mvvm/index.js
import TaskModel from './models/TaskModel.js';
import TaskView from './views/TaskView.js';
import TaskViewModel from './viewmodels/TaskViewModel.js'

const model = new TaskModel();
const viewModel = new TaskViewModel(model);
const view = new TaskView(viewModel);

view.render();
