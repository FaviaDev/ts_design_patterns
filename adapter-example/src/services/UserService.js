// src/services/UserService.js
class UserService {
    constructor(userStorage) {
        this.userStorage = userStorage;
    }

    addUser(user) {
        this.userStorage.save(user);
    }

    getUsers() {
        return this.userStorage.getAll();
    }
}

module.exports = UserService;