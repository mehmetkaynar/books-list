"use strict";
/* ------------------------------------------------------- */

// modelin mongodb ile baglanti kurabilmesini sagladim, mongoose iceri aktararak.
const { mongoose } = require("../configs/dbConnection");

/* ------------------------------------------------------- *
{
    "username": "admin",
    "password": "1234",
    "email": "test1@site.com",
    "isActive": true,
    "isAdmin": true
  }
  {
    "username": "test2",
    "password": "1234",
    "email": "test2@site.com",
    "isActive": true,
    "isAdmin": false
  }
  {
    "username": "test3",
    "password": "1234",
    "email": "test3@site.com",
    "isActive": true,
    "isAdmin": false
  }



/* ------------------------------------------------------- */
//User Model

const passwordEncrypt = require("../helpers/passwordEncrypt");

const commonOptions = {
  type: String,
  trim: true,
};

const UserSchema = new mongoose.Schema(
  {
    username: {
      ...commonOptions,
      required: [true, "Username field must be required."],
      unique: true,
    },

    password: {
      ...commonOptions,
      required: [true, "Password field must be required."],
      set: (password) => passwordEncrypt(password),
    },

    email: {
      ...commonOptions,
      required: [true, "Email field must be required."],
      unique: [true, "Email field must be unique."],
      validate: [
        (email) => {
          const emailRegexCheck =
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          return emailRegexCheck.test(email);
        },
      ],
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { collection: "users", timestamps: true }
);

/* ------------------------------------------------------- */

module.exports = mongoose.model("User", UserSchema);
