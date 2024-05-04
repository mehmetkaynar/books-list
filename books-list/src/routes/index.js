"use strict";
/* ------------------------------------------------------- */

const router = require("express").Router();

/* ------------------------------------------------------- */

// Tum URl leri buraya topladim. Index js ana sayfami temiz tutmak icin

// auth:
router.use("/auth", require("./auth"));

// users:
router.use("/users", require("./userroute"));

// books:
router.use("/books", require("./bookroute"));

/* ------------------------------------------------------- */

module.exports = router;
