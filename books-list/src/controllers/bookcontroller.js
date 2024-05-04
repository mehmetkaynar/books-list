"use strict";
/* ------------------------------------------------------- */
const Book = require("../models/bookmodel");

module.exports = {
  list: async (req, res) => {
    const data = await res.getModelList(Book);

    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Book),
      data,
    });
  },

  create: async (req, res) => {
    const data = await Book.create(req.body);

    res.status(201).send({
      error: false,
      data,
    });
  },

  read: async (req, res) => {
    const data = await Book.findOne({ _id: req.params.id });

    res.status(200).send({
      error: false,
      data,
    });
  },

  update: async (req, res) => {
    const data = await Book.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });

    res.status(202).send({
      error: false,
      data,
      new: await Book.findOne({ _id: req.params.id }),
    });
  },

  delete: async (req, res) => {
    const data = await Book.deleteOne({ _id: req.params.id });

    res.status(data.deletedCount ? 204 : 404).send({
      error: !data.deletedCount,
      data,
    });
  },

  searchByAuthor: async (req, res) => {
    const books = await Book.find({ author: req.query.author });
    res.status(200).send({
      error: false,
      books,
    });
  },

  searchByTitle: async (req, res) => {
    const books = await Book.find({ title: req.query.title });
    res.status(200).send({
      error: false,
      books,
    });
  },
};
