import { importCsv } from './util';
import { Store } from '../../src/models/Store';
import { connectDatabase } from '../../src/database/connection';

beforeAll(async () => {
  await connectDatabase();
})

describe('import store data', () => {
  test('success import data', async () => {
    // await Store.remove();
    const marketId = '5f13f0a8b175b36393bdc090';
    const data = importCsv('stores.csv');
    const stores = data.slice(1).map(storeDto => new Store({
      market: marketId,
      name: storeDto[0],
      image: storeDto[1],
      description: storeDto[2],
      tel: storeDto[3],
      isRunning: Number(storeDto[4]),
    }));
    await Store.create(...stores);
    expect(data).not.toBe(null);
  });
});
