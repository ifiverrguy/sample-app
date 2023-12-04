const request = require('supertest');
const app = require('../app');

describe('API endpoint', () => {
  it('returns Hello World! JSON', async () => {
    const response = await request(app).get('/api');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Hello World!');
  });
});
