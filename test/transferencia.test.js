const request = require("supertest");
const { expect } = require("chai");
require('dotenv').config();
const { obterToken } = require("../helpers/autenticador.js");
const  postTransferencia = require("../fixtures/postTransferencia.json");

describe('Transferências API', () => {
    describe('POST /transferencias', () => {

        let authToken;
        const baseUrl = process.env.BASE_URL;
        beforeEach(async () => {
            
            authToken = await obterToken('julio.lima', '123456');

        })

        it('Deve retornar 201 quando ao valor de transferência for igual ou maior que 10.00', async () => {
            const postBody = { ...postTransferencia };
            const res = await request(baseUrl)
                .post(`/transferencias`)
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${authToken}`)
                .send(postBody)
            expect(res.status).to.equal(201);

        })

        it('Deve retornar 422 quando ao valor de transferência for menor que 10.00', async () => {
            const postBody = { ...postTransferencia };
            postBody.valor = 9.99;
            const res = await request(baseUrl)
                .post(`/transferencias`)
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${authToken}`)
                .send(postBody)
            expect(res.status).to.equal(422);

        })

    })
});