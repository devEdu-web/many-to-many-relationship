const express = require('express');
const router = express.Router();
const authorsController = require('../controllers/authorsController')

router.get('/all-authors', authorsController.getAuthors) // Return all author
router.get('/author/:authorId') // Return the author specified by the id
router.get('authors-by-book/:bookId') // Return all the authors of the specified book
router.post('/add-author', authorsController.addAuthor) // add a new author
router.delete('/delete-author/:authorId') // delete the author spicified by the id
router.delete('/delete-all') // delete the whole authors table

module.exports = router