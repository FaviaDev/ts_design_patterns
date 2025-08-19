// src/decorators/NotificationDecorator.js
const Notification = require('../notifications/Notification');

class NotificationDecorator extends Notification {
    constructor(wrappedNotification) {
        super();
        this.wrappedNotification = wrappedNotification;
    }

    send(message) {
        return this.wrappedNotification.send(message);
    }
}

module.exports = NotificationDecorator;