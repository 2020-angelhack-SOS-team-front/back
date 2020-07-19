const mongoose = require("mongoose");
const { storeSchema } = require("./storeModel.js");

const productSchema = mongoose.Schema({
  whatStore: storeSchema,
  name: String,
  price: Number,
  image: String,
  description: String,
  type: String,
});

const Product = mongoose.Model("Product", productSchema);

module.exports = { Product };
