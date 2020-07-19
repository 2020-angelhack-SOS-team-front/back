import mongoose from 'mongoose';
import { StoreSchema } from './Store';

const ProductSchema = mongoose.Schema({
  whatStore: StoreSchema,
  name: String,
  price: Number,
  image: String,
  description: String,
  type: String,
});

const Product = mongoose.model("Product", ProductSchema);

export { Product, ProductSchema };
