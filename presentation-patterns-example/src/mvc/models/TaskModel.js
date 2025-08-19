// mvc/models/TaskModel.js
class TaskModel {
    constructor() {
        this.tasks = [];
    }

    addTask(description) {
        const task = {
            id: this.tasks.length + 1,
            description,
            completed: false
        };
        this.tasks.push(task);
        return task;
    }

    getTasks() {
        return this.tasks;
    }
}

export default TaskModel;