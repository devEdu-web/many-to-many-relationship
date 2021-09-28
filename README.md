## Books and Author relationship tables

This is a very simple project I built only to understand how many-to-many relatioships work in practice. I tried to make it very simple, without adding a lot of features, you will even notice that I didn't add an "edit" feature as for books as for authors and that's beaucse I didn't want to get away of the project scope.

Here, the user (in case, me) can add both Authors and Books, through a request, the user cannot relate books and author though, this has to be done manually on Mysql Editor, again, for didactic purposes. But I can try and add this feature later as a new feature. 

***

### Requests

The data about Books and Author is sent through a request as mentioned earlier. Both of them must be on JSON format, according with the followings attributes:

<br>

For books:

    {
        "bookTitle": "Example",  // required
        "bookPages": 100,       // not required
        "bookYear": 2021       // not required
        "bookPrice": 99.99    // not required
    }

<br>

For Authors:

    {
        "firstName": "Example",     // required
        "lastName": "ExampleToo",  // required
        "country": "Brasil"       // not required
    }


An ID will be assigned to each book and author, this ID is generated automatically by the database and it will form a third table to relate books and authors.

***

### What did I Learn?

To be honest the only truly new thing I learnt from this project was **_many-to-many relationships_** and **_how to join two tables_**.
But of course, I could practice a lot things I new before, reinforcing my knowledge, like the MVC pattern, basic mysql syntaxe and concepts and asynchronous javascript.