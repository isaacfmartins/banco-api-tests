const request = require("supertest");
const { expect } = require("chai");
require('dotenv').config();

const baseUrl = process.env.BASE_URL;
const user = { username: process.env.USUARIO, senha: process.env.SENHA };


describe('Login API', () => {
    describe('POST /login', () => {
        it('Login com credenciais corretas', async () => {


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
