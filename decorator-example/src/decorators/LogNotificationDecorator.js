// src/decorators/LogNotificationDecorator.js
const NotificationDecorator = require('./NotificationDecorator');

class LogNotificationDecorator extends NotificationDecorator {
    send(message) {
        const baseMessage = super.send(message);
        return `${baseMessage}\nLogged to file`;
    }
}

module.exports = LogNotificationDecorator;