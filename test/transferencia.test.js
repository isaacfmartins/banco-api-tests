import request from "supertest";
import { expect } from "chai";
import 'dotenv/config';
import { obterToken } from "../helpers/autenticador.js";

const baseUrl = process.env.BASE_URL;
const user = { username: process.env.USUARIO, senha: process.env.SENHA };
let authToken = await obterToken(user.username, user.senha);

describe('Transferências API', () => {
    describe('POST /transferencia', () => {
        it('Deve retornar 201 quando ao valor de transferência for igual ou maior que 10.00', async () => {
            const res = await request(baseUrl)
                .post(`/transferencias`)
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${authToken}`)
                .send({ contaOrigem: 1, contaDestino: 2, valor: 10.01, token: '' })
            expect(res.status).to.equal(201);

        })

        it('Deve retornar 422 quando ao valor de transferência for menor que 10.00', async () => {
            const res = await request(baseUrl)
                .post(`/transferencias`)
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${authToken}`)
                .send({ contaOrigem: 1, contaDestino: 2, valor: 9.99, token: '' })
            expect(res.status).to.equal(422);

        })

    })
});