'use strict'

var express = require('express');
var EstadoCtrl = require('../controllers/EstadoCtrl');
var api = express.Router();

/***** END POINTS DE INSUMOS *****/
api.get('/estado/:id', EstadoCtrl.getEstado); //METODO GET
api.get('/estados', EstadoCtrl.getEstados);  //METODO GET
api.post('/estado', EstadoCtrl.saveEstado); //METODO POST
api.put('/estado/:id', EstadoCtrl.updateEstado); //METODO PUT 
api.delete('/estado/:id', EstadoCtrl.deleteEstado); //METODO DELETE

module.exports = api;