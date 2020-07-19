import { connectDatabase } from '../src/database/connection';
import { Product, ProductType } from '../src/models/Product';
import mongoose, { Mongoose } from 'mongoose';
import { Store } from '../src/models/Store';

beforeAll(async () => {
  await connectDatabase();
})

describe('example test', () => {
  test('1 + 1 = 2', async () => {
    // await Product.remove();
    // const store = await Store.findById('5f140c285bafee83c4e45d32').exec();
    // const product = new Product();
    // product.name = '마스크';
    // product.price = 0;
    // product.image = 'https://th4.tmon.kr/thumbs/image/90a/269/c11/9c8e825c7_700x700_95_FIT.jpg';
    // product.description = '국내산 마스크';
    // product.type = ProductType.Beauty;
    // product.store = store._id;
    // await product.save();
    const stores = await Product.find().populate('store').exec();
    expect(stores).not.toBe(null);
  });
});
