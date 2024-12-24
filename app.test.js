const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('responds with Hello, World!', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello, World!');
  });
});

describe('GET /nonexistent', () => {
  it('responds with 404 for non-existing routes', async () => {
    const res = await request(app).get('/nonexistent');
    expect(res.statusCode).toBe(404);
  });
});

describe('Server response headers', () => {
  it('should include the correct Content-Type header', async () => {
    const res = await request(app).get('/');
    expect(res.headers['content-type']).toMatch(/text\/html/);
  });
});
