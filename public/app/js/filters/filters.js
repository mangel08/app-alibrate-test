/*Filtro para la Paginacion*/
app.filter('startFrom', function(){
  return function(data, start){
    return data.slice(start);
  }
});
