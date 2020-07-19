import mongoose, { Schema } from 'mongoose';

const OrderSchema = mongoose.Schema({
  name: String,
  address: String,
  items: [{
    product: { type: Schema.Types.ObjectId, ref: 'Product' },
    count: Number,
  }],
  amount: Number,
});

const Order = mongoose.model("Order", OrderSchema);

export { Order, OrderSchema };
