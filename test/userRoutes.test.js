import request  from "supertest";
import app from "../src/app.js";






describe('crud api tests', () => {
    it('should create a new user', async () => {
        const response = await request(app)
            .post('/users')
            .send({
                name: 'jhon doe',
                age: 20
            });
        expect(response.status).toBe(201);
        expect(response.body.affectedRows).toBe(1)
});

    it('should retrieve all users', async () => {
        const response = await request(app)
            .get('/users');
        expect(response.status).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    })

    it('should update a user', async () => {
        const response = await request(app)
            .put('/users/11')
            .send({
                name: 'jhon 11',
                age: 21
            });
        expect(response.status).toBe(200);
        expect(response.body.affectedRows).toBe(1)
    })

    it('should delete a user', async () => {
        const response = await request(app)
            .delete('/users/6');
        expect(response.status).toBe(200);
        expect(response.body.affectedRows).toBe(1)
    })
})