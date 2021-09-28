const Book = require('../models/booksModel')

exports.addBook = (req, res, next) => {
    const book = req.body
    Book.addBook(book.bookTitle, book.bookPages, book.bookYear, book.bookPrice)
    .then(result => res.send(result))
    .catch(err => res.send(err))
}