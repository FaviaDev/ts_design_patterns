// src/notifications/BasicNotification.js
const Notification = require('./Notification');

class BasicNotification extends Notification {
    send(message) {
        return `Basic Notification: ${message}`;
    }
}

module.exports = BasicNotification;