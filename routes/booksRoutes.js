const express = require('express');
const router = express.Router()
const booksController = require('../controllers/booksController')

router.get('/all-books')
router.get('/book/:bookId')
router.get('books-by-author/:authorId')
router.post('/new-book', booksController.addBook)
router.delete('/delete-book/:bookId')
router.delete('/delete-all')





module.exports = router