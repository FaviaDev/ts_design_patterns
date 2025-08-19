// index.js
const Book = require('./src/models/Book');
const BookRepository = require('./src/repositories/BookRepository');
const BookService = require('./src/services/BookService');
const JsonFormatter = require('./src/utils/JsonFormatter');
const TextFormatter = require('./src/utils/TextFormatter');

// Crear instancias
const repository = new BookRepository();
const jsonService = new BookService(repository, new JsonFormatter());
const textService = new BookService(repository, new TextFormatter());

// Agregar libros
const book1 = new Book(1, 'El Quijote', 'Miguel de Cervantes');
const book2 = new Book(2, 'Cien años de soledad', 'Gabriel García Márquez');
jsonService.addBook(book1);
jsonService.addBook(book2);

// Mostrar libros en diferentes formatos
console.log('Formato JSON:');
console.log(jsonService.getFormattedBooks());

console.log('\nFormato Texto:');
console.log(textService.getFormattedBooks());