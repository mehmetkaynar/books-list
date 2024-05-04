"use strict";
/* ------------------------------------------------------- */

const router = require("express").Router();

/* ------------------------------------------------------- */

const { isAdmin } = require("../middlewares/permissions");
const user = require("../controllers/usercontroller");

router.use(isAdmin);

router.route("/").get(user.list).post(user.create);

router
  .route("/:id")
  .get(user.read)
  .post(user.update)
  .patch(user.update)
  .delete(user.delete);

/* ------------------------------------------------------- */
module.exports = router;
