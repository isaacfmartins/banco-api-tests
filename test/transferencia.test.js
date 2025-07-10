import request from "supertest";
import { expect } from "chai";

const baseUrl = 'http://localhost:3000';
let authToken = '';
const user = { username: 'julio.lima', senha: '123456' };
const resultado = await request(baseUrl)
                .post(`/login`)
                .send(user)

authToken = resultado.body.token;               

describe('Transferências API', () => {
    describe('POST /transferencia', () => {
        it('Deve retornar 201 quando ao valor de transferência for igual ou maior que 10.00', async () => {
            const res = await request(baseUrl)
                .post(`/transferencias`)
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${authToken}`)
                .send({contaOrigem: 1, contaDestino: 2, valor: 10.01, token: ''})
            expect(res.status).to.equal(201);

        })

        it('Deve retornar 422 quando ao valor de transferência for menor que 10.00', async () => {
            const res = await request(baseUrl)
                .post(`/transferencias`)
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${authToken}`)
                .send({contaOrigem: 1, contaDestino: 2, valor: 9.99, token: ''})
            expect(res.status).to.equal(422);

        })
        
    })
});