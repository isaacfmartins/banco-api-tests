const request = require("supertest");
const { expect } = require("chai");

const baseUrl = "http://localhost:3000";
const user = { username: 'julio.lima', senha: '123456' };


describe('Login API', () => {
    describe('POST /login', () => {
        it('Login with valid credentials', async () => {


           const res = await request(baseUrl)
                .post(`/login`)
                .send(user)
                .set('Content-Type', 'application/json')
            expect(res.status).to.equal(200);
            expect(res.body).to.have.property('token');
            expect(res.body.token).to.be.a('string');
        })
        
    })
    
})
