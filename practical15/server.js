const express = require("express");
const app = express();

app.use(express.json());

let books = [{ "id": 0, "title": "Atomic habits", "author": "James", "genre": "self-help", "pages": 240 },
{ "id": 1, "title": "Sapiens", "author": "Yuval", "genre": "history", "pages": 443 },
{ "id": 2, "title": "Power of Habit", "author": "Charles", "genre": "self-help", "pages": 384 },
{ "id": 3, "title": "Rich Dad Poor Dad", "author": "Robert", "genre": "finance", "pages": 272 }];
//get
app.get("/books", (req, res) => {
    res.send(books);
});

app.get("/books/:id", (req, res) => {
    const book = books.find(s => s.id == req.params.id);
    if (!book) {
        return res.status(404).send("Student Not found");
    }
    res.send(book);
})

//post
app.post("/books", (req, res) => {
    const book = {
        "id": books.length ? Math.max(...books.map(b => b.id)) + 1 : 0,
        "title": req.body.title,
        "author": req.body.author,
        "genre": req.body.genre,
        "pages": req.body.pages
    };
    books.push(book);
    res.send("book added");

});

//put
app.put("/books/:id", (req, res) => {
    const book = books.find(b => b.id == req.params.id);
    book.title = req.body.title;
    book.title = req.body.author;
    book.genre = req.body.genre;
    book.pages = req.body.pages;
    res.send("book updated");
});

//delete 
app.delete("/books/:id", (req, res) => {
    books = books.filter(b => b.id != Number(req.params.id));
    res.send("book deleted");
});

//server
app.listen(3000, () => {
    console.log("server started at http://localhost:3000");
});
