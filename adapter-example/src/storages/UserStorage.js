 // src/storages/UserStorage.js
class UserStorage {
    save(user) {
        throw new Error('Method save() must be implemented');
    }

    getAll() {
        throw new Error('Method getAll() must be implemented');
    }
}

module.exports = UserStorage;