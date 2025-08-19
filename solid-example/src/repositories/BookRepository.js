// src/repositories/BookRepository.js
class BookRepository {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    getAllBooks() {
        return this.books;
    }
}

module.exports = BookRepository;