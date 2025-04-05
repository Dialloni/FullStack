// filepath: /Users/abubakardiallo/Desktop/skillSpire/Exprees_New/expressA3/src/server.js

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let books = [];

// Middleware to validate book data
function validateBook(req, res, next) {
  const { title, author, year } = req.body;
  if (!title || !author || !year) {
    return res.status(400).json({ error: 'Title, author, and year are required' });
  }
  next();
}

// GET /books: Retrieve a list of all books
app.get('/books', (req, res) => {
  res.json(books);
});

// GET /books/:id: Retrieve details of a specific book by ID
app.get('/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }
  res.json(book);
});

// POST /books: Add a new book to the collection
app.post('/books', validateBook, (req, res) => {
  const { title, author, year } = req.body;
  const newBook = {
    id: books.length + 1,
    title,
    author,
    year
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT /books/:id: Update details of a book by ID
app.put('/books/:id', validateBook, (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }
  const { title, author, year } = req.body;
  book.title = title;
  book.author = author;
  book.year = year;
  res.json(book);
});

// DELETE /books/:id: Delete a book by ID
app.delete('/books/:id', (req, res) => {
  const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id));
  if (bookIndex === -1) {
    return res.status(404).json({ error: 'Book not found' });
  }
  books.splice(bookIndex, 1);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});