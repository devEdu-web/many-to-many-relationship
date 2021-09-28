const database = require('../util/database')

const Book = {

    addBook(bookTitle, bookPages, bookYear, bookPrice){
        return database.query(
            `INSERT INTO Books (title, pages, year, price)
            values (?, ?, ?, ?)`, [bookTitle, bookPages, bookYear, bookPrice]
            
        )
    },

    getBooks(){},

    getBook(bookId){},

    getBooksByAuthor(authorId){},

    deleteBooks(){},

    deleteBook(bookId){},


}

module.exports = Book