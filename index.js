'use strict'
				/******************************************************
				******** DESARROLLADO POR MIGUELANGEL PALMA ***********
				******** FULLSTACK JAVASCRIPT DEVELOPER ***************
				**************** CARACAS VENEZUELA ********************
				*******************************************************/
				
const mongoose = require('mongoose');
const app = require('./app.js');
const properties = require('./app/config/properties.js');

mongoose.connect(properties.db, {useMongoClient: true, user: properties.user_db,
  pass: properties.db_pass}, (err,res) => {
	if(err){
		throw err;
	}else{
		app.listen(properties.port, () => {
			console.log(`API Funcionando en http://localhost:${properties.port}`);
			console.log("Conección a mongodb correcta");
		});
	}

});