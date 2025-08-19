// mvvm/index.js
import TaskModel from './models/TaskModel.js';
import TaskView from './views/TaskView.js';
import TaskViewModel from './viewmodels/TaskViewModel.js'

const model = new TaskModel();
const view = new TaskView(); // Crear la vista primero
const viewModel = new TaskViewModel(model, view); // Pasar modelo y vista
view.viewModel = viewModel; // Asignar el viewModel a la vista

view.render();
