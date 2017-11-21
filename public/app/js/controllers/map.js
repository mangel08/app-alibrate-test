 // <!-- Geocoding Key: AIzaSyANZaB3Bp_IRg-hxSZwTgVN9wJ5YLa7qA4 -->

 var marker;
 var map;
 var bounds;
 var searchBox;
 var places;
 //Map Options  
  var options = {
    zoom: 8,
    center: {lat: 10.58, lng: -66.91667},
    mapTypeId: 'hybrid',
  }

 function fincaFormMap() {

    // New Map 
    map = new google.maps.Map(document.getElementById('map'), options);

    // Create New Marker
     marker = new google.maps.Marker({
        map:map,
        draggable: true
      });

    //searchBox
    searchBox = new google.maps.places.SearchBox(document.getElementById('mapSearch'));

    //place change event on search box
    google.maps.event.addListener(searchBox, 'places_changed', function(){
      
      console.log(searchBox.getPlaces());

      places = searchBox.getPlaces();

      //Bound
      bounds = new google.maps.LatLngBounds();
      var i, place;

      for(i = 0; place = places[i]; i++){

        console.log(place.geometry.location);
        bounds.extend(place.geometry.location);
        marker.setPosition(place.geometry.location);
      }

      map.fitBounds(bounds);
      map.setZoom(15);

    }) 

    // Listen for click on map

    /*google.maps.event.addListener(map, 'click',
    function(event){

      console.log(marker.getPosition().lat());
      console.log(marker.getPosition().lng());
    })*/
}

  function fincaIndexMap(){
    // New Map 
    map = new google.maps.Map(document.getElementById('map'), options);

    // Create New Marker
      marker = new google.maps.Marker({
        map:map,
        draggable: true
      });

    bounds = new google.maps.LatLngBounds();

    /* //searchBox
    searchBox = new google.maps.places.SearchBox(document.getElementById('mapEditSearch'));

    //place change event on search box
    google.maps.event.addListener(searchBox, 'places_changed', function(){
      
      console.log(searchBox.getPlaces());

      places = searchBox.getPlaces();

      //Bound
      //bounds = new google.maps.LatLngBounds();
      var i, place;

      for(i = 0; place = places[i]; i++){

        console.log(place.geometry.location);
        bounds.extend(place.geometry.location);
        marker.setPosition(place.geometry.location);
      }

      map.fitBounds(bounds);
      map.setZoom(15);

    })
*/
  }



function dashBoardMap(){
  // New Map 
  map = new google.maps.Map(document.getElementById('map'), options);

  // Create New Marker
  marker = new google.maps.Marker({
    map:map,
  });

  bounds = new google.maps.LatLngBounds();


}


