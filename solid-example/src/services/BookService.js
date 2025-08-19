// src/services/BookService.js
class BookService {
    constructor(repository, formatter) {
        this.repository = repository;
        this.formatter = formatter;
    }

    addBook(book) {
        this.repository.addBook(book);
    }

    getFormattedBooks() {
        const books = this.repository.getAllBooks();
        return this.formatter.format(books);
    }
}

module.exports = BookService;