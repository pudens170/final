/**
 * Created by puden on 11/06/2016.
 */
function displaySatelliteMap() {
    navigator.geolocation.getCurrentPosition(getSatelliteMap);
};

function getSatelliteMap(loc) {
    var longitude_latitude;
    // console.log(location)
    longitude_latitude = new google.maps.LatLng(loc.coords.latitude, loc.coords.longitude);

    var mapOptions = {
        zoom: 16,
        center: longitude_latitude,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

}

function selectListener() {
    var selectedValue = document.getElementById("select");
    if (selectedValue.value = "satellite") {
        displaySatelliteMap();
    }
    else if (selectedValue.value = "terrain") {
        displayTerrainMap();
    }
}

function displayTerrainMap() {
    navigator.geolocation.getCurrentPosition(getTerrainMap);
};

function getTerrainMap(location) {
    var longitude_latitude;
    longitude_latitude = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);

    var mapOptions = {
        zoom: 16,
        center: longitude_latitude,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
}
