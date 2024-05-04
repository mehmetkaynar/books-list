"use strict";
/* ------------------------------------------------------- */

const router = require("express").Router();

/* ------------------------------------------------------- */

const permissions = require("../middlewares/permissions");
const book = require("../controllers/bookcontroller");

router.route("/").get(book.list).post(book.create);

router
  .route("/:id")
  .get(book.read)
  .post(permissions.isAdmin, book.update)
  .patch(permissions.isAdmin, book.update)
  .delete(permissions.isAdmin, book.delete);

// Author'a göre kitap arama endpoint'i
router.route("/search/author").get(book.searchByAuthor);
// http://127.0.0.1:8000/books/search/author?author=Chinua%20Achebe (Author icin URL bu)

// Title'a göre kitap arama endpoint'i
router.route("/search/title").get(book.searchByTitle);

/* ------------------------------------------------------- */

module.exports = router;
