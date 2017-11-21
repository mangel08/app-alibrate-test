'use strict'

var express = require('express');
var LibroCtrl = require('../controllers/LibroCtrl');
var api = express.Router();

/***** END POINTS DE INSUMOS *****/
api.get('/Libro/:id', LibroCtrl.getLibro); //METODO GET
api.get('/Libros/:id', LibroCtrl.getLibros);  //METODO GET
api.post('/Libro', LibroCtrl.saveLibro); //METODO POST
api.put('/Libro/:id', LibroCtrl.updateLibro); //METODO PUT 
api.delete('/Libro/:id', LibroCtrl.deleteLibro); //METODO DELETE

module.exports = api;