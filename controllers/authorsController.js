const Authors = require('../models/authorsModel');

exports.addAuthor = (req, res, next) => {
    const author = req.body
    Authors.addAuthor(author.firstName, author.lastName, author.country)
    .then(result => res.send(result))
    .catch(err => res.send(err))
    
}