import mongoose, { Schema } from 'mongoose';

const MarketSchema = new Schema({
  name: String,
  address: String,
})

class Market {
  constructor() {
    this.model = mongoose.model('Market', MarketSchema);
  }
}

export { Market }
