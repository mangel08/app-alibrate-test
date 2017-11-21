'use strict'

// CONFIGURACION DE LA APP
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('./app/config/cors.js');
const app = express();
const estado = require('./app/routes/estado');
const libro = require('./app/routes/libro');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors);

// Seteando las rutas
app.use('/api/v1', libro);
app.use('/api/v1', estado);

module.exports = app;

