// index.js
const User = require('./src/models/User');
const OldUserStorage = require('./src/storages/OldUserStorage');
const OldUserStorageAdapter = require('./src/adapters/OldUserStorageAdapter');
const UserService = require('./src/services/UserService');

// Crear instancias
const oldStorage = new OldUserStorage();
const adapter = new OldUserStorageAdapter(oldStorage);
const userService = new UserService(adapter);

// Agregar usuarios
const user1 = new User(1, 'Juan Pérez', 'juan@example.com');
const user2 = new User(2, 'María López', 'maria@example.com');
userService.addUser(user1);
userService.addUser(user2);

// Obtener y mostrar usuarios
const users = userService.getUsers();
console.log('Usuarios obtenidos:');
users.forEach(user => {
    console.log(`ID: ${user.id}, Nombre: ${user.name}, Email: ${user.email}`);
});