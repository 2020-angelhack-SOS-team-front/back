import mongoose, { Schema } from 'mongoose';

const MarketSchema = new Schema({
  name: String,
  address: String,
})

const Market = mongoose.model('Market', MarketSchema);

export { Market, MarketSchema }
