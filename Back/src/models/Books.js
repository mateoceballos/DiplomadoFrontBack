const mongoose = require("mongoose");

const bookSchemma = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  url: {
    type: String,
    require: true,
  },
  status: {
    type: Number,
    require: true,
  },
  resume: {
    type: String,
    require: true,
  },
  mostPopular: {
    type: Boolean,
    require: false,
  },
});

module.exports = mongoose.model("booksCollection", bookSchemma);
