const request = require("supertest");

const obterToken = async (usuario, senha) => {
    const baseUrl = process.env.BASE_URL;
    const user = { username: usuario, senha: senha };
    const res = await request(baseUrl)
        .post(`/login`)
        .send(user)
        .set('Content-Type', 'application/json')
    return res.body.token;
}

module.exports = { obterToken };