geolocation.setRNConfiguration(config);
geolocation.requestAuthorization();
geolocation.getCurrentPosition(geo_success);
geolocation.watchPosition(success);
geolocation.clearWatch(watchID);
geolocation.stopObserving();

function scrollMap(position) {
    // Scrolls the map so that it is centered at (position.coords.latitude, position.coords.longitude).
  }

  // Request repeated updates.
  var watchId = navigator.geolocation.watchPosition(scrollMap);

  function buttonClickHandler() 
  {
    // Cancel the updates when the user clicks a button.
    navigator.geolocation.clearWatch(watchId);
  }