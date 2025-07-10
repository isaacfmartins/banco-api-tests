const request = require("supertest");
const postLogin = require("../fixtures/postLogin.json");

const obterToken = async (usuario, senha) => {
    const bodyLogin = { ...postLogin };
    const baseUrl = process.env.BASE_URL;
    const res = await request(baseUrl)
        .post(`/login`)
        .set('Content-Type', 'application/json')
        .send(bodyLogin)
    return res.body.token;
}

module.exports = { obterToken };