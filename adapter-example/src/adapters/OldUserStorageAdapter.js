// src/adapters/OldUserStorageAdapter.js
const UserStorage = require('../storages/UserStorage');
const User = require('../models/User');

class OldUserStorageAdapter extends UserStorage {
    constructor(oldStorage) {
        super();
        this.oldStorage = oldStorage;
    }

    save(user) {
        // Adaptar el formato del usuario moderno al formato antiguo
        const oldFormat = {
            id: user.id,
            name: user.name,
            email: user.email
        };
        this.oldStorage.saveUserData(oldFormat);
    }

    getAll() {
        // Adaptar los datos del formato antiguo al formato moderno
        return this.oldStorage.getAllUserData().map(oldUser => 
            new User(oldUser.userId, oldUser.fullName, oldUser.emailAddress)
        );
    }
}

module.exports = OldUserStorageAdapter;