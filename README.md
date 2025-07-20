# Banco API Tests

Este projeto contém testes automatizados para a [API Banco](https://github.com/juliodelimas/banco-api), desenvolvidos com foco em contribuir para a qualidade e a confiabilidade das funcionalidades expostas por meio de endpoints REST.

## 🎯 Objetivo

Automatizar testes de API REST do projeto **Banco API**, validando os principais cenários das rotas disponíveis (GET, POST, PUT, DELETE) e assegurando o correto funcionamento da aplicação através de testes automatizados que podem ser executados localmente ou em pipeline CI/CD.

## 🚀 Tecnologias e Bibliotecas Utilizadas

- [Node.js](https://nodejs.org/)
- [Mocha](https://mochajs.org/) – Framework de testes
- [Chai](https://www.chaijs.com/) – Biblioteca de asserções
- [Supertest](https://github.com/visionmedia/supertest) – Testes de integração para HTTP
- [Mochawesome](https://www.npmjs.com/package/mochawesome) – Gerador de relatórios HTML
- [Dotenv](https://github.com/motdotla/dotenv) – Carregamento de variáveis de ambiente

## 📁 Estrutura de Diretórios

```bash
banco-api-tests/
│
├── test/                  # Testes organizados por rota
│   ├── login.test.js
│   ├── transferencias.test.js
│   └── ...
│
├── mochawesome-report/   # Relatórios gerados em HTML
│
├── .env                  # Arquivo de variáveis de ambiente (não versionado)
├── package.json          # Gerenciamento de dependências
└── README.md             # Documentação do projeto
```

## ⚙️ Arquivo .env

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
BASE_URL=http://localhost:3000
```

> 🔁 Substitua a URL conforme o ambiente em que a API estiver rodando.

## 📦 Instalação e Execução dos Testes

1. **Clone o repositório:**

```bash
git clone https://github.com/isaacfmartins/banco-api-tests.git
cd banco-api-tests
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Configure o arquivo `.env`** (conforme seção anterior)

4. **Execute os testes:**

```bash
npm test
```

5. **Gerar relatório com Mochawesome:**

```bash
npx mocha test/*.test.js --timeout 200000  --reporter mochawesome
```

> O relatório será gerado no diretório `mochawesome-report/`.

## 📚 Documentação das Bibliotecas

- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/api/)
- [Supertest](https://github.com/visionmedia/supertest)
- [Mochawesome](https://www.npmjs.com/package/mochawesome)
- [Dotenv](https://github.com/motdotla/dotenv)

## 👨‍💻 Contribuição

Sinta-se à vontade para abrir *issues* ou *pull requests* com melhorias ou correções. Este projeto é mantido para fins de estudo e boas práticas em automação de testes.

---
