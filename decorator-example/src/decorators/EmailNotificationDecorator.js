// src/decorators/EmailNotificationDecorator.js
const NotificationDecorator = require('./NotificationDecorator');

class EmailNotificationDecorator extends NotificationDecorator {
    send(message) {
        const baseMessage = super.send(message);
        return `${baseMessage}\nSent via Email`;
    }
}

module.exports = EmailNotificationDecorator;