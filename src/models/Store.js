import mongoose from 'mongoose';
import { MarketSchema } from './Market';

const StoreSchema = mongoose.Schema({
  whatMarket: MarketSchema,
  name: String,
  image: String,
  description: String,
  tel: String,
  //비운영: 0, 운영중: 1, 초기값: 2
  isRunning: Number,
});

const Store = mongoose.model("Store", StoreSchema);

export { Store, StoreSchema };
