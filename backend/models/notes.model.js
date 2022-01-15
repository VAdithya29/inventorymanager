const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const notesSchema = new Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
});

const note = mongoose.model("Note", notesSchema);

module.exports = note;
