const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');

router.get('/all-books', booksController.getBooks);
router.get('/book/:bookId', booksController.getBook);
router.get('/books-by-author/:authorId', booksController.getBookByAuthor);
router.post('/new-book', booksController.addBook);
router.delete('/delete-book/:bookId', booksController.deletBook);
router.delete('/delete-all', booksController.deleteAll);

module.exports = router;
