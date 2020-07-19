import { importCsv } from './util';
import { connectDatabase } from '../../src/database/connection';
import { Product } from '../../src/models/Product';
import { Store } from '../../src/models/Store';

beforeAll(async () => {
  await connectDatabase();
})

describe('import product data', () => {
  test('success import', async () => {
    const data = importCsv('products.csv');
    const products = [];
    for (const productDto of data.slice(1)) {
      products.push(new Product({
        name: productDto[0],
        price: productDto[1],
        image: productDto[2],
        description: productDto[3],
        type: productDto[4],
        store: await Store.findOne({ name: productDto[5] }),
      }));
    }
    await Product.create(...products);
    expect(data).not.toBe(null);
  });
});
