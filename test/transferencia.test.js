const request = require("supertest");
const { expect } = require("chai");
require('dotenv').config();
const { obterToken } = require("../helpers/autenticador.js");
const  postTransferencia = require("../fixtures/postTransferencia.json");

describe('Transferências API', () => {
     let authToken;
        const baseUrl = process.env.BASE_URL;
        beforeEach(async () => {
            
            authToken = await obterToken('julio.lima', '123456');

        })
    describe('POST /transferencias', () => {     

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
        describe('GET /transferencias/{id}', () => {
           it('Deve retornar 200 e dados iguais ao regsitro de tansferência contido no banco de dados quando o ID for valido', async () => {
                const res = await request(baseUrl)
                    .get(`/transferencias/18`)
                    .set('Content-Type', 'application/json')
                    .set('Authorization', `Bearer ${authToken}`)
                expect(res.status).to.equal(200);
                expect(res.body).to.have.property('id');
                expect(res.body.id).to.equal(18);
                expect(res.body.id).to.a.be.a('number');
                expect(res.body).to.have.property('valor');
                expect(res.body.valor).to.be.a('string'); 
                expect(res.body.valor).to.equal(1000.00);
           })

        })

        describe('GET /transferencias', () => {
           it('Deve retornar 10 elementos na página quando informar o limite de 10', async () => {
                const res = await request(baseUrl)
                    .get(`/transferencias?page=1&limit=10`)
                    .set('Content-Type', 'application/json')
                    .set('Authorization', `Bearer ${authToken}`)
                expect(res.status).to.equal(200);
                expect(res.body.limit).to.equal(10);
                expect(res.body.transferencias).to.have.lengthOf(10);
           })

        })
        

    })
});