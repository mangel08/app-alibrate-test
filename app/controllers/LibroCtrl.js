'use strict'

const Libro = require('../models/Libro');
const Estado = require('../models/Estado') 

// FUNCION PARA OBTENER UN LIBRO
// REQUEST: id_libro
function getLibro(req,res){

	let id_libro = req.params.id;

	Libro.findById(id_libro, (err, libro) => {
		console.log(libro);
		if(err){
			res.status(500).send({message: "Error al obtener el libro"});
		}else{
			if(!libro){
				res.status(404).send({message: "No existe el libro"});
			}else{
				Estado.populate(libro, {path: "estado"},function(err, libro){
        			res.status(200).send({libro});
   				 }); 
			}	
		}
	});

}

// FUNCION PARA OBTENER TODOS LOS INSUMOS
function getLibros(req,res){

	let id_estado = req.params.id; 
	let x;

	// VALIDO SI EL ID DEL ESTADO ES TODOS
	if(id_estado == "5a1395a9bc850e5b945072e3"){
		x =	Libro.find().sort({'nombre': 1}).limit(20);
	}else{
		// SI NO FILTRO LOS LIBROS POR SU ESTADO
		x = Libro.find({'estado': id_estado}).sort({'nombre': 1}).limit(20)
	}

	x.exec((err,libro) =>{
		if(err){
			res.status(500).send({message: "Error en getlibros", status: -1});
		}else{
			if(!libro){
				res.status(404).send({message: "No hay libros", status: -2});
			}else{
				Estado.populate(libro, {path: "estado"},function(err, libro){
	    			res.status(200).send({libro});
					 }); 
				}
			}
	});
}

// METODO POST SAVE INSUMO
// REQUEST: OBJ INSUMO
function saveLibro(req,res){

	let libro = new Libro();
	let params = req.body;
	let status;
	
	// VALIDANDO PARAMETROS, SI ES UNDEFINED SETEO UN STATUS 400 BAD REQUEST
	if (typeof params.nombre === "undefined" ||
		typeof params.autor === "undefined" ||
		typeof params.estado === "undefined"
		){
		status = 400;
	}else{
		// SI NO MAPEO LOS PARAMETROS AL MODELO
		libro.nombre = params.nombre;
		libro.autor = params.autor;
		libro.genero = params.genero;
		libro.rating = params.rating;
		libro.rating_general = params.rating_general;
		libro.estado = params.estado;
		libro.image = params.image;

		console.log(libro);
	}

	libro.save((err, libroStored) => {
		if(err){
			if(status == 400){
				res.status(status).send({message: "Bad request", status: 400});
			}else{
				res.status(500).send({message: "Error al guardar el libro", success: false});
			}
		}else{
			res.status(200).send({libroStored});
		}
	});
}

// METODO PUT UPDATE INSUMO
// Request Url = id_insumo
// Request Body = Obj Insumo
function updateLibro(req,res){

	let id_libro = req.params.id; 
	let update = req.body; 
	console.log(id_libro);
	console.log(update);

	Libro.findByIdAndUpdate(id_libro, update, (err, libroUpdated) => {
		console.log(libroUpdated);
		if(err){
			res.status(500).send({update: false, message: "Error en actualizar el estado"});
		}else{
			res.status(200).send({update: true, libro: libroUpdated})
		}
	});
};

// METODO DELETE DELETE INSUMO
function deleteLibro(req,res){

	let id_libro = req.params.id;

	Libro.findById(id_libro, (err, libro)  =>{
		if(err){
			res.status(500).send({message:"Error al borrar el libro"})
		}else{
			if(!libro){
				res.status(404).send({message: "No existe el libro"});
			}else{
				libro.remove(err => {
					if(err){
						res.status(500).send({message: "Error al borrar"});
					}else{
						res.status(200).send({message: "El libro se ha eliminado"});
					}
				});
			}
		}

	});
};

// EXPORTANDO LAS FUNCIONES
module.exports = {
	getLibro,
	getLibros,
	saveLibro,
	updateLibro,
	deleteLibro
}