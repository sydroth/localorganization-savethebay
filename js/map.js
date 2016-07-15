function init_map() {
  var var_location = new google.maps.LatLng(37.8039258,-122.2730175);

  var var_mapoptions = {
    center: var_location,
    zoom: 14
  };

  var var_map = new google.maps.Map(document.getElementById("map-container"),
    var_mapoptions);
  
  var var_marker = new google.maps.Marker({
    position: var_location,
    map: var_map,
    title:"Save The Bay Headquarters"});

  var_marker.setMap(var_map); 
}
google.maps.event.addDomListener(window, 'load', init_map);