import supertest from 'supertest';
import { app as Server } from '../../src/app';
import { connectDatabase } from '../../src/database/connection';

beforeAll(async () => {
  await connectDatabase();
})

describe('create order test', async () => {
  const app = supertest(Server);

  test('test success', async () => {
    const response = await app.post('/orders')
      .send({
        name: '받는사람',
        address: '서울특별시 양천구 목4동 769-23',
        items: [{
          product_id: '5f1424a357fa1a17eb84c629',
          count: 2
        }]
      });
    expect(response.status).toBe(200);
  })
})
