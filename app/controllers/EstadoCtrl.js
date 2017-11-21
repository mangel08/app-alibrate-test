'use strict'

const Estado = require('../models/Estado');

// FUNCION PARA OBTENER UN ESTADO
// REQUEST: id_estado
function getEstado(req,res){

	let id_estado = req.params.id;

	Estado.findById(id_estado, (err, estado) => {
		console.log(estado);
		if(err){
			res.status(500).send({message: "Error al obtener el estado"});
		}else{
			if(!estado){
				res.status(404).send({message: "No existe el estado"});
			}else{
				res.status(200).send({estado});
			}	
		}
	});

}

// FUNCION PARA OBTENER TODOS LOS INSUMOS
// REQUEST: NULL
function getEstados(req,res){

	Estado.find({},(err,estado) =>{
		console.log(estado);
		if(err){
			res.status(500).send({message: "Error en getEstados", status: -1});
		}else{
			if(!estado){
				res.status(404).send({message: "No hay estados", status: -2});
			}else{
				res.status(200).send({estado});
			}	
		}
	});
}

// METODO POST SAVE INSUMO
// REQUEST: OBJ INSUMO
function saveEstado(req,res){

	let estado = new Estado();
	let params = req.body;
	let status;
	
	if (typeof params.nombre === "undefined"){
		status = 400;
	}else{
		insumo.nombre = params.nombre;
	}

	estado.save((err, estadoStored) => {
		if(err){
			if(status == 400){
				res.status(status).send({message: "Bad request", status: 400});
			}else{
				res.status(500).send({message: "Error al guardar el estado", success: false});
			}
		}else{
			res.status(200).send({estadoStored});
		}
	});
}

// METODO PUT UPDATE INSUMO
// Request Url = id_insumo
// Request Body = Obj Insumo
function updateEstado(req,res){

	let id_estado = req.params.id; 
	let update = req.body; 

	Estado.findByIdAndUpdate(id_estado, update, (err, estadoUpdated) => {
		if(err){
			res.status(500).send({update: false, message: "Error en actualizar el estado"});
		}else{
			res.status(200).send({update: true, estado: estadoUpdated})
		}
	});
};

// METODO DELETE DELETE INSUMO
function deleteEstado(req,res){

	let id_estado = req.params.id;

	Estado.findById(id_estado, (err, estado)  =>{
		if(err){
			res.status(500).send({message:"Error al borrar el estado"})
		}else{
			if(!estado){
				res.status(404).send({message: "No existe el estado"});
			}else{
				estado.remove(err => {
					if(err){
						res.status(500).send({message: "Error al borrar"});
					}else{
						res.status(200).send({message: "El estado se ha eliminado"});
					}
				});
			}
		}

	});
};

// EXPORTANDO LAS FUNCIONES
module.exports = {
	getEstado,
	getEstados,
	saveEstado,
	updateEstado,
	deleteEstado
}