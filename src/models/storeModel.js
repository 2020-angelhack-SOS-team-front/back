const mongoose = require("mongoose");
const { marketSchema } = require("./marketModel.js");

const storeSchema = mongoose.Schema({
  whatMarket: marketSchema,
  name: String,
  image: String,
  description: String,
  tel: String,
  //비운영: 0, 운영중: 1, 초기값: 2
  isRunning: Number,
});

const Store = mongoose.model("Store", storeSchema);

module.exports = { Store, storeSchema };
