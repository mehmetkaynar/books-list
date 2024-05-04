"use strict";
/* ------------------------------------------------------- */

const express = require("express");
const app = express();

/* ------------------------------------------------------- */

require("dotenv").config();
const PORT = process.env?.PORT || 3000;

require("express-async-errors");

/* ------------------------------------------------------- */

// Connect to DB:

const { dbConnection } = require("./src/configs/dbConnection");
//  db COnnection bir function oldugu icin alttaki yazdim.
dbConnection();

/* ------------------------------------------------------- */
//Middlewares

// Accept JSON:
app.use(express.json());

//Check Authentication:
app.use(require("./src/middlewares/authentication"));

// res.getModelList():
app.use(require("./src/middlewares/findSearchSortPage"));

/* ------------------------------------------------------- */
// Routes

// HomePath:
app.all("/", (req, res) => {
  res.send({
    error: false,
    message: "Welcome to BOOKS LIST API",
    // documents: "/documents",
    user: req.user,
  });
});

// asagidaki kodu route icindeki index.js icindeki URL buradan cagirdim.hepsini burada da yazabilirdim ama burasinin kalabalik olmasini tercih etmiyorum.
app.use(require("./src/routes/"));

/* ------------------------------------------------------- */

// errorHandler:
app.use(require("./src/middlewares/errorHandler"));

app.listen(PORT, () => console.log("http://127.0.0.1:" + PORT));
