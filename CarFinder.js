/**
 * Created by puden on 05/06/2016.
 */

/******** BEGINNING OF GET INITIAL LOCATION SECTION |*This section is responsible for showing information about the initial position
 of the user,i.e it shows information about the latitude and longitude of the user  and passes  it to google map to display the location********/

var map;
var latitude;
var longitude;
var longLat;
var mapOptions;

function getInitialLocation() {
    navigator.geolocation.getCurrentPosition(showInitialLocation, showError);
};

function showInitialLocation(myLocation) {
    console.log(myLocation);
    latitude = myLocation.coords.latitude;
    longitude = myLocation.coords.longitude;
    longLat = new google.maps.LatLng(latitude, longitude);

    mapOptions = {
        mapTypeControl: false,
        zoom: 16,
        center: longLat
    }
    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);    //this displays the current position of the user on the map
};
/*********************************************************END OF GET INITIAL LOCATION SECTION ********************************************************/


/****BEGINNING OF GET PARKING LOCATION SECTION|*This section is responsible for showing information about the exact position of the user,i.e it shows information
 * about the latitude and longitude of the user  and passes it to google map to display the location with a marker marking the exact location of the user*/

//this function ask for user consent before accessing their location
function getParkingLocation() {
    var user_location_access = confirm("Allow access to your location?\npressing the cancel button will denied access to the  location where your car is parked");
    //verifies if the user gives permission to access location,if true then proceeds to get location
    if (user_location_access == true) {
        //gets the current location of the user and call back the show location function when completed
        navigator.geolocation.getCurrentPosition(showParkingLocation, showError);
    } else {//else if user denies location access,inform that user
        alert("Access denied!")
    }
}

//beginning of showParkingLocation function
function showParkingLocation(location) {//this function is responsible for showing user's location
    console.log(location)
    latitude = location.coords.latitude;
    longitude = location.coords.longitude;
    longLat = new google.maps.LatLng(latitude, longitude);

    var mapOptions = {
        zoom: 16,
        center: longLat,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.VERTICAL_BAR,
            position: google.maps.ControlPosition.TOP_LEFT
        },
    };

    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    var marker = new google.maps.Marker({
        position: longLat,
        map: map,
        title: "your car is parked here",
        icon: 'image/park-sign.jpg'
    });//end of showParkingLocation function

    function hideInformationMessage() {
        $("#display_information_message").hide();
    }

    $("#display_information_message").show();
    var time = setTimeout(hideInformationMessage, 2000);//calls the hideInformationMessage function in 2milliseconds

    var description = document.getElementById('description');
    var time2 = setTimeout(addParkingDescription, 2000);//calls the hideInformationMessage function in 2milliseconds

//This function  allows user to add description to where they parked
    function addParkingDescription() {
        var add_description = confirm("Do you wish to add description to where you parked?");
        if (add_description == true) {
            $('#map-canvas').hide();
            $('#main').hide();
            $('#addNotes').show();
            $('#description').focus();

            $('#note_save_message').hide();
            $('#addNotes_button').click(function () {
                var note = $('#description').val();
                $('#addNotes').hide();
                $('#map-canvas').show();
                $('#main').show();
                var infowindow = new google.maps.InfoWindow({
                    content: note,
                    maxWidth: 200
                });
                infowindow.open(map, marker);
                return false;

            });

        }
        $('#description').focusin(function () {

            var note = $('#description').val('');
        });

    };

}

/*****BEGINNING OF ERROR HANDLING SECTION|This section is responsible for handling of error in case anything goes wrong.*****/

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            display_information_to_users.innerHTML = "User denied the access to geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            display_information_to_users.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERR:
            display_information_to_users.innerHTML = "An unknown error occurred."
            break;
    }
}
/*******************************************************END OF ERROR HANDLING SECTION***********************************************************/







