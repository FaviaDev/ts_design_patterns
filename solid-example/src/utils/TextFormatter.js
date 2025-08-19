// src/utils/TextFormatter.js
const Formatter = require('./Formatter');

class TextFormatter extends Formatter {
    format(books) {
        return books.map(book => `${book.id}: ${book.title} by ${book.author}`).join('\n');
    }
}

module.exports = TextFormatter;