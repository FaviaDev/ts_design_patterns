// src/storages/OldUserStorage.js
class OldUserStorage {
    constructor() {
        this.users = [];
    }

    // Método antiguo para guardar usuarios con un formato diferente
    saveUserData(userData) {
        this.users.push({
            userId: userData.id,
            fullName: userData.name,
            emailAddress: userData.email
        });
    }

    // Método antiguo para obtener usuarios
    getAllUserData() {
        return this.users;
    }
}

module.exports = OldUserStorage;