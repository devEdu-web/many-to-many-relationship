const database = require('../util/database');

const Author = {
    getAuthors() {
        return database.query(`SELECT * FROM Authors`);
    },

    getAuthor(authorId) {
        return database.query(`SELECT * FROM Authors WHERE author_id = ?`, [
            authorId,
        ]);
    },

    getAuthorsByBook(bookId) {
        return database
            .query(
                `SELECT * FROM Authors INNER JOIN books_authors ON Authors.author_id = books_authors.author_id`
            )
            .then((books) => {
                const fetchedAuthors = books[0];
                const authorsOfThisBook = [];

                fetchedAuthors.forEach((author) => {
                    if (author.book_id == bookId) {
                        authorsOfThisBook.push(author);
                    }
                });

                return authorsOfThisBook;
            })
            .catch((err) => err);
    },

    addAuthor(authorId, firstName, lastName, country) {
        return database.query(
            `INSERT INTO Authors (first_name, last_name, Country)
            values (?, ?, ?)`,
            [authorId, firstName, lastName, country]
        );
    },

    deleteAuthor(authorId) {
        return database.query(` DELETE FROM Authors where author_id = ?`, [
            authorId,
        ]);
    },

    deleteAll() {
        return database.query(`DELETE FROM Authors`);
    },
};

module.exports = Author;
