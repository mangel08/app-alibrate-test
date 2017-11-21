'use strict'

var mongoose = require('mongoose');
mongoose.set('debug', true);
var Schema = mongoose.Schema;

var LibroSchema = Schema({
    nombre : { type: String, required: true },
    autor : { type: String, required: true },
    genero: { type: String},
    image: {type: String},
    rating: { type: Number},
    rating_general: { type: Number},
    estado: { type: Schema.ObjectId, ref: "Status", required: true},
});

module.exports = mongoose.model('Libro', LibroSchema);