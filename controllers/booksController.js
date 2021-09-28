const Book = require('../models/booksModel');

exports.addBook = (req, res, next) => {
    const book = req.body;
    Book.addBook(book.bookTitle, book.bookPages, book.bookYear, book.bookPrice)
        .then((result) => res.send(result))
        .catch((err) => res.send(err));
};

exports.getBooks = (req, res, next) => {
    Book.getBooks()
        .then((books) => {
            const fetchedBooks = books[0];
            res.send(fetchedBooks);
        })
        .catch((err) => res.send(err));
};

exports.getBook = (req, res, next) => {
    const bookId = req.params.bookId;
    Book.getBook(bookId)
        .then((book) => {
            const fetchedBook = book[0];
            res.send(fetchedBook);
        })
        .catch((err) => res.send(err));
};

exports.getBookByAuthor = (req, res, next) => {
    const authorId = req.params.authorId;
    Book.getBooksByAuthor(authorId)
        .then((books) => res.send(books))
        .catch((err) => res.send(err));
};

exports.deleteAll = (req, res, next) => {
    Book.deleteBooks()
        .then((result) => res.send(result))
        .catch((err) => res.send(err));
};

exports.deletBook = (req, res, next) => {
    const bookId = req.params.bookId;
    Book.deleteBook(bookId)
        .then((result) => res.send(result))
        .catch((err) => res.send(err));
};
