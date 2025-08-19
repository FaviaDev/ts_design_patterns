// mvc/controllers/TaskController.js
class TaskController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    async run() {
        while (true) {
            const action = await this.view.showMenu();
            if (action === 'Exit') {
                this.view.displayMessage('Goodbye!');
                break;
            }

            if (action === 'Add Task') {
                const description = await this.view.getTaskDescription();
                const task = this.model.addTask(description);
                this.view.displayMessage(`Task added: ${task.description}`);
            } else if (action === 'List Tasks') {
                const tasks = this.model.getTasks();
                this.view.displayTasks(tasks);
            }
        }
    }
}

export default TaskController;