"use strict";
/* ------------------------------------------------------- */

const crypto = require("node:crypto"), //kriptografik islemleri gerceklestirmek icin node:crypto modulu kullandim.
  keyCode = process.env.SECRET_KEY, //parola haschlemek icin kullanilacak gizli anahtari iceriyor
  loopCount = 10_000, //hashleme isleminin kac kez tekrarlanacagini gosterir.
  charCount = 32, // hash cikti uzunlugunu belirliyor.
  encType = "sha512"; // algoritma diyebilirim.

module.exports = function (password) {
  return crypto
    .pbkdf2Sync(password, keyCode, loopCount, charCount, encType)
    .toString("hex");
};
