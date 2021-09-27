const Authors = require('../models/authorsModel');

exports.addAuthor = (req, res, next) => {
    const author = req.body
    Authors.addAuthor(author.firstName, author.lastName, author.country)
    .then(result => res.send(result))
    .catch(err => res.send(err))
    
}

exports.getAuthors = (req, res, next) => {
    Authors.getAuthors()
    .then(authors => {
        const allAuthors = authors[0]
        res.send(allAuthors)
    })
    .catch(err => res.send(err))
}

exports.getAuthor = (req, res, next) => {
    const authorId = req.params.authorId

    Authors.getAuthor(authorId)
    .then(author => {
        const fetchedAuthor = author[0]
        res.send(fetchedAuthor)
    })
    .catch(err => res.send(err))
}