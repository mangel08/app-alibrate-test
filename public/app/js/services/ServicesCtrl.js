app.service("service", function($http, $q, $resource, localStorageService){

    // URL HOST DE LOS SERVICIOS
    var base_url = "http://localhost:3000/api/v1/";

    // HEADER
    var header = {
        'Content-Type': "application/json",
    }

    // FUNCION GENERICA PARA CONSUMIR SERVICIOS
    // PIDE COMO PARAMETROS DATA PARA ENVIAR EL REQUEST
    // EL METHOD HTTP (GET, POST, PUT, DELETE)
    // EL ENDPOINT A CONSUMIR
    this.services = function(data,method,endpoint){
      var defered = $q.defer();
        $http({
            // method: 'POST',
            method: method,
            url: base_url + endpoint,
            data: data,
            headers: header
        }).then(function(response){
            defered.resolve(response);
        }, function(errorMsg){
            defered.reject(errorMsg);
        });
        return defered.promise;
    }

    // FUNCION PARA GUARDAR EN EL LOCAL STORAGE
    this.setLocalData = function(key, val){
        return localStorageService.set(key, val);
    }

    // FUNCION PARA OBTENER UNA VARIABLE DEL LOCAL STORAGE
    this.getLocalData = function(key){
        return localStorageService.get(key);
    }


});