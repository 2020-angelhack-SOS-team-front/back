import mongoose, { Schema } from 'mongoose';

const MarketSchema = new Schema({
  name: String,
  address: String,
})

class Market {
  static create() {
    return mongoose.model('Market', MarketSchema);
  }
}

export { Market }
