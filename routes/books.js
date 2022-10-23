const express = require('express');
const router = express.Router();
const Book = require('./../models/Book');

router.route('/')
  .get(async (req, res) => {
    try {
      const allBook = await Book.find();
      res.status(200).json(allBook);
    } catch (e) {
      res.status(500).json({error: e})
    }
  })
  .post( async (req, res) => {
    const {title, autor, isbn, resumo, ano_lancamento } = req.body;
    if (!title || !autor || !isbn || !resumo || !ano_lancamento) {
      res.status(422).json({error: 'Informação faltando'})
      return;
    }
    const book = {
      title,
      autor,
      isbn,
      resumo,
      ano_lancamento
    }
    try {
      await Book.create(book);
      res.status(201).json({message: 'Livro inserido com sucesso.'})
    } catch (e) {
      res.status(500).json({error: e});
    }
  })

router.route('/:id')
  .get( async (req, res) => {
    const id = req.params.id;

    try {
      const thisBook = await Book.findOne({
        _id: id
      });
      if(!thisBook) {
        res.status(422).json({message: 'O livro não foi encontrado.'});
        return;
      }
      res.status(200).json(thisBook);
    } catch (e) {
      res.status(500).json({error: e})
    }
  })
  .patch( async (req, res) => {
    const id = req.params.id;
    const {title, autor, isbn, resumo, ano_lancamento } = req.body;
    const editedBook = {
      title,
      autor,
      isbn,
      resumo,
      ano_lancamento
    }

    try {
      const updatedBook = await Book.updateOne(
          {_id: id},
          editedBook
      );
      if(updatedBook.matchedCount === 0) {
        res.status(422).json({message: 'Livro não encontrado'});
        return;
      }
      res.status(200).json(editedBook);
    } catch (e) {
      res.status(500).json({error: e})
    }
  })
  .delete( async (req, res) => {
    const id = req.params.id;
    const thisBook = await Book.findOne({_id: id});
    if(!thisBook) {
      res.status(422).json({message: 'O livro não foi encontrado.'});
      return;
    }
    try {
      await Book.deleteOne({_id: id});
      res.status(200).json({message: 'Livro removido com sucesso'});
    } catch (e) {
      res.status(500).json({error: e})
    }
  })

module.exports = router;
