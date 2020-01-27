const express = require('express');
const mongoose = require('mongoose');
//yarn add cors
const cors = require('cors');
const routes = require('./routes');

const app = express();

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

app.listen(3333);