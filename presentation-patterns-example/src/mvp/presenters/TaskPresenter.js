// mvp/presenters/TaskPresenter.js
class TaskPresenter {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.setPresenter(this);
    }

    async run() {
        await this.view.showMenu();
    }

    async handleAction(action) {
        if (action === 'Exit') {
            this.view.displayMessage('Goodbye!');
            return;
        }

        if (action === 'Add Task') {
            await this.view.getTaskDescription();
        } else if (action === 'List Tasks') {
            const tasks = this.model.getTasks();
            this.view.displayTasks(tasks);
            await this.view.showMenu();
        }
    }

    addTask(description) {
        const task = this.model.addTask(description);
        this.view.displayMessage(`Task added: ${task.description}`);
        this.view.showMenu();
    }
}

export default TaskPresenter;