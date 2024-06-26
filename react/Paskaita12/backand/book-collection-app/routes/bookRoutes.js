const express = require('express');
const Book = require('../models/Book');
const router = express.Router();

// GET all books
router.get('/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET a book by id
router.get('/books/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new book
router.post('/books', async (req, res) => {
  const { title, author, genre, publishedYear, summary } = req.body;
  const newBook = new Book({ title, author, genre, publishedYear, summary });

  try {
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
