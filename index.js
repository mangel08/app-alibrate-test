'use strict'
				/******************************************************
				******** DESARROLLADO POR MIGUELANGEL PALMA ***********
				******** FULLSTACK JAVASCRIPT DEVELOPER ***************
				**************** CARACAS VENEZUELA ********************
				*******************************************************/
				
const mongoose = require('mongoose');
const app = require('./app.js');
const properties = require('./app/config/properties.js');
const MongoClient = require('mongodb').MongoClient;

mongoose.connect(properties.db, {}, (err,res) => {
	if(err){
		throw err;
	}else{
		app.listen(properties.port, () => {
			//Comilla Invertida (`) Permite recibir Variables
			console.log(`API Funcionando en http://localhost:${properties.port}`);
			console.log("Conección a mongodb correcta");
		});
	}

});