'use strict'

var mongoose = require('mongoose');
mongoose.set('debug', true);
var Schema = mongoose.Schema;

var EstadoSchema = Schema({
    nombre : { type: String, required: true },
});

module.exports = mongoose.model('Estado', EstadoSchema, 'estados');