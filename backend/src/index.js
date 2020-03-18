const express = require('express');
const mongoose = require('mongoose');
//yarn add cors
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebsocket } = require('./websocket')

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://buscaDev:buscaDev@cluster0-f338z.mongodb.net/bDev?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// apontar o front para comunicação com o back (necessário adicionar o cors)
// Libera acesso externo para todo tipo de aplicação
app.use(cors());
// Libera acesso externo somente para esse endereço
// app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// Métodos HTTP: GET, POST, PUT, DELETE.

// Tipos de parâmetros: 
// Querye Params: request.query (Filtros, ordenação, paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// MongoDb (Não-Relacional)

app.use(routes);

server.listen(3333);