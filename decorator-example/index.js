// index.js
const BasicNotification = require('./src/notifications/BasicNotification');
const EmailNotificationDecorator = require('./src/decorators/EmailNotificationDecorator');
const LogNotificationDecorator = require('./src/decorators/LogNotificationDecorator');

// Crear una notificación básica
const basicNotification = new BasicNotification();

// Probar la notificación básica
console.log('Solo notificación básica:');
console.log(basicNotification.send('Hola, esto es un mensaje de prueba'));
console.log('---');

// Decorar con envío por correo
const emailNotification = new EmailNotificationDecorator(basicNotification);
console.log('Notificación con envío por correo:');
console.log(emailNotification.send('Hola, esto es un mensaje de prueba'));
console.log('---');

// Decorar con registro en archivo
const logNotification = new LogNotificationDecorator(basicNotification);
console.log('Notificación con registro en archivo:');
console.log(logNotification.send('Hola, esto es un mensaje de prueba'));
console.log('---');

// Combinar ambos decoradores
const combinedNotification = new EmailNotificationDecorator(
    new LogNotificationDecorator(basicNotification)
);
console.log('Notificación con correo y registro:');
console.log(combinedNotification.send('Hola, esto es un mensaje de prueba'));