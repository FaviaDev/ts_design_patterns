// src/utils/JsonFormatter.js
const Formatter = require('./Formatter');

class JsonFormatter extends Formatter {
    format(books) {
        return JSON.stringify(books, null, 2);
    }
}

module.exports = JsonFormatter;