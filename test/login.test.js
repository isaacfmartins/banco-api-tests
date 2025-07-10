const request = require("supertest");
const { expect } = require("chai");
require('dotenv').config();
const postLogin = require("../fixtures/postLogin.json");

const baseUrl = process.env.BASE_URL;


describe('Login API', () => {
    describe('POST /login', () => {
        it('Login com credenciais corretas', async () => {
            const bodyLogin = { ...postLogin };

            const res = await request(baseUrl)
                .post(`/login`)
                .send(bodyLogin)
                .set('Content-Type', 'application/json')
            expect(res.status).to.equal(200);
            expect(res.body).to.have.property('token');
            expect(res.body.token).to.be.a('string');
        })

    })

})
