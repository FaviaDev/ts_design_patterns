// mvp/views/TaskView.js
import inquirer from 'inquirer';

class TaskView {
    setPresenter(presenter) {
        this.presenter = presenter;
    }

    async showMenu() {
        const answers = await inquirer.prompt({
            type: 'list',
            name: 'action',
            message: 'What do you want to do?',
            choices: ['Add Task', 'List Tasks', 'Exit']
        });
        this.presenter.handleAction(answers.action);
    }

    async getTaskDescription() {
        const answers = await inquirer.prompt({
            type: 'input',
            name: 'description',
            message: 'Enter task description:'
        });
        this.presenter.addTask(answers.description);
    }

    displayTasks(tasks) {
        console.log('Tasks:');
        tasks.forEach(task => {
            console.log(`[${task.completed ? 'X' : ' '}] ${task.id}: ${task.description}`);
        });
    }

    displayMessage(message) {
        console.log(message);
    }
}

export default TaskView;