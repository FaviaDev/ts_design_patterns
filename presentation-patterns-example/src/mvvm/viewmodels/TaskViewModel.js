// mvvm/viewmodels/TaskViewModel.js
class TaskViewModel {
    constructor(model) {
        this.model = model;
    }

    addTask(description) {
        const task = this.model.addTask(description);
        return `Task added: ${task.description}`;
    }

    listTasks() {
        const tasks = this.model.getTasks();
        return tasks;
    }

    exit() {
        return 'Goodbye!';
    }
}

export default TaskViewModel;