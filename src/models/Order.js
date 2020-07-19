import mongoose, { Schema } from 'mongoose';

const OrderSchema = mongoose.Schema({
  items: [{
    product: { type: Schema.Types.ObjectId },
    count: Number,
    amount: Number,
  }]
});

const Order = mongoose.model("Order", OrderSchema);

export { Order, OrderItem, OrderSchema };
