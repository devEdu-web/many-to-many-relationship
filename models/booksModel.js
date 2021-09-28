const database = require('../util/database')

const Book = {

    addBook(bookTitle, bookPages, bookYear, bookPrice){
        return database.query(
            `INSERT INTO Books (title, pages, year, price)
            values (?, ?, ?, ?)`, [bookTitle, bookPages, bookYear, bookPrice]
            
        )
    },

    getBooks(){

        return database.query(
            `SELECT * FROM Books`
        )

    },

    getBook(bookId){

        return database.query(
            `SELECT * FROM Books where book_id = ?`, [bookId]
        )

    },

    getBooksByAuthor(authorId){

        return database.query(
            `SELECT * FROM Books INNER JOIN books_authors ON Books.book_id = books_authors.book_id`
        )
        .then(books => {
            const fetchedBooks = books[0]
            const booksByThisAuthor = []

            fetchedBooks.forEach(book => {
                if(book.author_id == authorId) {
                    booksByThisAuthor.push(book)
                }
            })

            return booksByThisAuthor
        })
        .catch(err => err)
        
    },

    deleteBooks(){},

    deleteBook(bookId){},


}

module.exports = Book