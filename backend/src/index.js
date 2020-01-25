const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://buscaDev:buscaDev@cluster0-f338z.mongodb.net/bDev?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());

// Métodos HTTP: GET, POST, PUT, DELETE.

// Tipos de parâmetros: 
// Querye Params: request.query (Filtros, ordenação, paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// MongoDb (Não-Relacional)

app.use(routes);

app.listen(3333);