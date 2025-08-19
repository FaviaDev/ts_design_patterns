// mvvm/viewmodels/TaskViewModel.js
class TaskViewModel {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    addTask(description) {
        const task = this.model.addTask(description);
        this.view.displayMessage(`Task added: ${task.description}`);
    }

    listTasks() {
        const tasks = this.model.getTasks();
        this.view.displayTasks(tasks);
    }

    exit() {
        this.view.displayMessage('Goodbye!');
    }
}

export default TaskViewModel;