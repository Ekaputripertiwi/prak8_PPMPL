const request = require('supertest');
const app = require('./app'); // Pastikan path-nya sesuai dengan lokasi file app.js Anda

describe('GET /', () => {
    it('should respond with Hello, World!', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello, World!');
    });
});

//integrations.js