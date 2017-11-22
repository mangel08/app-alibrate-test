app.controller("HomeController", function($scope, $rootScope, service){

    /*Variables para Paginacion*/
    $scope.pageSize = 4;
    $scope.currentPage = 1;
    $rootScope.libros = []
    $rootScope.open = true;


    // Variables para los ng-model dinamicos
    $scope.EstadoLibro = []; //Estado
    $scope.RatingLibro = []; //Rating

    // FUNCION PARA ABRIR Y CERRAR EL SIDE NAV
    $rootScope.isOpen = function(){
    	if($rootScope.open == false){
    		$('.button-collapse').sideNav('show');
    		$rootScope.open = true;
    	}else{
    		$('.button-collapse').sideNav('hide');
    		$rootScope.open = false;
    	}
			console.log($rootScope.open);
    }
    
    // FUNCION PARA OBTENER LOS LIBROS
    // PIDE COMO PARAMETROS EL TIPO PARA PODER FILTRAR POR ESTADOS
	$rootScope.getLibros = function(type, side){

		var x = service.services(null,"GET","libros/"+type);

		x.then(function(response){
			// console.log(response);

			var libro = response.data.libro;
			$rootScope.libros = [];

			if(libro.length > 1){
				$scope.count = libro.length+" libros";
			}else{
				$scope.count = libro.length+" libro";
			}
			
			for (var i = 0, l = libro.length; i < l; i++) {
				var obj = {};

				obj.id = libro[i]._id; 

				// llenando arreglo con los id de estados y ratings para poder
				// setearlo al ng-model dinamicamente
				$scope.EstadoLibro[i] = libro[i].estado._id;
				$scope.RatingLibro[i] = libro[i].rating;

				obj.title = libro[i].nombre.toUpperCase(); 
				obj.autor = libro[i].autor.toUpperCase();

				if(typeof libro[i].genero === "undefined"){
					obj.genero = "";
				}else{
					obj.genero = libro[i].genero.toUpperCase();
				}

				obj.img = libro[i].image;
				obj.rating = libro[i].rating;
				obj.rating_general = libro[i].rating_general;
				obj.estado = libro[i].estado.nombre; 

				// LLENANDO EL ARREGLO DE LIBROS
				$rootScope.libros.push(obj); 
			}

			if(side){
				setTimeout(function() {
					$rootScope.isOpen();
				}, 200);
			}
		},function(err){
			console.log(err);
		});
	};

	// Funcion filter para limpiar el estado TODOS del listado
	// Cada estado tiene un atributo visible en donde el estado Todos es false
	$scope.myFilter = function(item){
 		return (item.visible || item.select)
	}

	// FUNCION REST PARA OBTENER LOS ESTADOS DE UN LIBRO
	$scope.getEstados = function(){

		var x = service.services(null,"GET","estados");

		x.then(function(response){

			var estado = response.data.estado;
			$scope.estados = [];
			$scope.count = estado.length;
			for (var i = 0, l = estado.length; i < l; i++) {
				
				var obj = {};
				obj.id = estado[i]._id;
				obj.nombre = estado[i].nombre.toUpperCase(); 

				if(estado[i].nombre.toUpperCase() == "TODOS"){
					obj.visible = false;
				}else{
					obj.visible = true;
				}
				
				$scope.estados.push(obj); 
			}
		},function(err){
			console.log(err);
		});
	}

	//FUNCION REST PARA ACTUALIZAR EL ESTADO
	// PIDE COMO PARAMETRO EL ID DEL select y el id del libro
	$scope.updateEstado = function(select,id_libro){

		// console.log(select);
		var obj = { 
			estado: $('select#'+select)['0']['value']
		}

		var x = service.services(obj,"PUT","libro/"+id_libro);

		x.then(function(res){
			console.log(res);
		},function(err){
			console.log(err);
		});
	}

	// FUNCION REST PARA ACTUALIZAR EL RATING
	// PIDE COMO PARAMETROS VALUE, ID_LIBRO
	$scope.updateRating = function(value,id_libro){

		var obj = {
			rating: value,
			estado: "5a132644bc850e5b945072e0"
		};

		var x = service.services(obj,"PUT","libro/"+id_libro);

		x.then(function(res){
			console.log(res);
		},function(err){
			console.log(err);
		});
	}

	// METODO ON CHANGE DEL RATING
    $scope.onItemRating = function(rating,id_libro){
      $scope.updateRating(rating,id_libro);
    };

});