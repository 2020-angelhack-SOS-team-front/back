import mongoose from 'mongoose';
import { storeSchema } from './storeModel';

const ProductSchema = mongoose.Schema({
  whatStore: storeSchema,
  name: String,
  price: Number,
  image: String,
  description: String,
  type: String,
});

const Product = mongoose.Model("Product", ProductSchema);

export { Product, ProductSchema };
