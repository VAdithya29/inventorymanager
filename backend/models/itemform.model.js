const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  itemName: { type: String, required: true },
  itemQuantity: { type: Number, required: true },
});

const item = mongoose.model("ItemForm", itemSchema);

module.exports = item;
