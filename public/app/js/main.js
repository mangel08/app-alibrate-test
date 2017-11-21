				/******************************************************
				******** DESARROLLADO POR MIGUELANGEL PALMA ***********
				******** FULLSTACK JAVASCRIPT DEVELOPER ***************
				**************** CARACAS VENEZUELA ********************
				*******************************************************/

var app = angular.module("app",
 ['ngRoute',
  'ngResource',
  'LocalStorageModule',
  'ui.materialize',
  'jkAngularRatingStars'
 ]
);

// CONFIGURACIÓN NG ROUTE
app.config(function($routeProvider, $locationProvider){
  
  $locationProvider.hashPrefix('');

	$routeProvider

		//Ruta para el Home
		.when("/",{
			templateUrl: "app/views/home.html",
			controller: "HomeController"
		})

});







