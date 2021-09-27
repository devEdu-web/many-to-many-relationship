const database = require('../util/database')


const Author = {

    getAuthors(){

        return database.query(
            `SELECT * FROM Authors`
        )

    },

    getAuthor(authorId){

        return database.query(
            `SELECT * FROM Authors WHERE author_id = ?`, [authorId]
        )

    },

    getAuthorsByBook(bookId){},

    addAuthor(authorId, firstName, lastName, country){
        return database.query(
            `INSERT INTO Authors (first_name, last_name, Country)
            values (?, ?, ?)`, [authorId, firstName, lastName, country]
        )
    },

    deleteAuthor(authorId){

        return database.query(
            ` DELETE FROM Authors where author_id = ?`, [authorId]
        )

    },

    deleteAll(){

        return database.query(
            `DELETE FROM Authors`
        )

    }

}

module.exports = Author