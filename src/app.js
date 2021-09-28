const express = require('express');
const app = express();
const database = require('../util/database');
const authorsRoutes = require('../routes/authorsRoutes');
const booksRoutes = require('../routes/booksRoutes');

app.use(express.json());
app.use('/api/authors', authorsRoutes);
app.use('/api/books', booksRoutes);

database.query(
    `CREATE TABLE IF NOT EXISTS Authors (
        author_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        Country VARCHAR(255),

        primary key (author_id)
    )`
);

database.query(
    `CREATE TABLE IF NOT EXISTS Books (
        book_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
        title VARCHAR(255) NOT NULL,
        pages INT,
        year INT,
        price DECIMAL (10, 2),

        primary key (book_id)
    )`
);

database.query(
    `CREATE TABLE IF NOT EXISTS books_authors (
        book_id INT UNSIGNED NOT NULL,
        author_id INT UNSIGNED NOT NULL,

        foreign key (book_id) references Books (book_id),
        foreign key (author_id) references Authors (author_id)
    )`
);

module.exports = app;
