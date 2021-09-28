const Author = require('../models/authorsModel');
const Authors = require('../models/authorsModel');

exports.addAuthor = (req, res, next) => {
    const author = req.body;
    Authors.addAuthor(author.firstName, author.lastName, author.country)
        .then((result) => res.send(result))
        .catch((err) => res.send(err));
};

exports.getAuthors = (req, res, next) => {
    Authors.getAuthors()
        .then((authors) => {
            const allAuthors = authors[0];
            res.send(allAuthors);
        })
        .catch((err) => res.send(err));
};

exports.getAuthor = (req, res, next) => {
    const authorId = req.params.authorId;

    Authors.getAuthor(authorId)
        .then((author) => {
            const fetchedAuthor = author[0];
            res.send(fetchedAuthor);
        })
        .catch((err) => res.send(err));
};

exports.getByBook = (req, res, next) => {
    const bookId = req.params.bookId;
    Author.getAuthorsByBook(bookId)
        .then((books) => res.send(books))
        .catch((err) => res.send(err));
};

exports.deleteAuthor = (req, res, next) => {
    const authorId = req.params.authorId;
    Author.deleteAuthor(authorId)
        .then((result) => res.send(result))
        .catch((err) => res.send(err));
};

exports.deleteAll = (req, res, next) => {
    Author.deleteAll()
        .then((result) => res.send(result))
        .catch((err) => res.send(err));
};
