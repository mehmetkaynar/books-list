"use strict";
/* ------------------------------------------------------- */

const { mongoose } = require("../configs/dbConnection");

/* ------------------------------------------------------- *

{
    "author":"Chinua Achebe",
    "title":"Things Fall Apart",
    "reviews" :"Things Fall Apart is a classic novel written by renowned Nigerian author Chinua Achebe. The novel tells the story of the cultural change and societal collapse of the Igbo people during British colonization in Nigeria in the 1890s.The main character of the novel, Okonkwo, is a prominent member of the Igbo community who adheres to traditional Igbo values. However, as British dominance increases, changes occur in both the society and Okonkwo's personal life. The conflict between traditional way of life and Western culture is a central theme of the novel.While exploring the impact of the West on Africa and the effects of colonization on people, Things Fall Apart also depicts the struggle of societies under colonization to preserve their identities, cultural heritage, and values. Additionally, the novel addresses the conflict between modernization and tradition.Written in Chinua Achebe's simple yet impactful prose, Things Fall Apart holds an important place in Nigeria's and Africa's literary heritage and has left a profound impact on world literature with its cultural insights."

}
/* ------------------------------------------------------- */

const commonOptions = {
  type: String,
  trim: true,
};

const BookSchema = new mongoose.Schema(
  {
    author: {
      ...commonOptions,
      required: true,
    },

    title: {
      ...commonOptions,
      required: true,
    },

    reviews: {
      ...commonOptions,
    },
  },
  { collection: "books", timestamps: true }
);

/* ------------------------------------------------------- */

module.exports = mongoose.model("Books", BookSchema);
