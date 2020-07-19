import mongoose from 'mongoose';
import { marketSchema } from './marketModel';

const StoreSchema = mongoose.Schema({
  whatMarket: marketSchema,
  name: String,
  image: String,
  description: String,
  tel: String,
  //비운영: 0, 운영중: 1, 초기값: 2
  isRunning: Number,
});

const Store = mongoose.model("Store", StoreSchema);

module.exports = { Store, StoreSchema };
