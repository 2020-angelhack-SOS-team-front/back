import { importCsv } from './util';
import { Market } from '../../src/models/Market';
import { connectDatabase } from '../../src/database/connection';

beforeAll(async () => {
  await connectDatabase();
})

describe('example test', () => {
  test('1 + 1 = 2', async () => {
    const data = importCsv('markets.csv');
    const markets = data.slice(1).map(marketDto => new Market({
      name: marketDto[0],
      address: marketDto[2],
    }));
    await Market.create(...markets);
    expect(data).not.toBe(null);
  });
});
