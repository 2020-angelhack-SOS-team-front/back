import mongoose from 'mongoose';

const OrderSchema = mongoose.Schema({});

const Order = mongoose.model("Order", OrderSchema);

export { Order, OrderSchema };
