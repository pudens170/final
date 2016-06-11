/**
 * Created by puden on 11/06/2016.
 */
$(document).ready(function () { // the code in this block runs as soon as the page loads
    $('#addNotes').hide();//hides addnote div
    $('#advanced_option').hide();//hide the div housing the map selection option as soon as the page loads
    $("#display_information_message").hide();//hides the div housing the information that is displayed to the user immediately the park button is clicked
    $('#option').hide();//hides the div housing the settings as soon the page loads
    getInitialLocation();//triggers the  getInitialLocation function as soon as the page loads

    $('.mapOption').click(function () {//shows the map option when clicked
        $('#map-canvas').hide();
        $('#main').hide();//this hides the div showing the control buttons beneath the map
        $('#option').hide();//hides the option div
        $('#advanced_option').show();//shows the div housing the map selection option

    });

    $('.settings_arrow').click(function () {//shows the option div  when clicked
        $('#advanced_option').hide();//hide the div housing the map selection option
        $('#option').show();//hides the div housing the settings when clicked

    });
    $('.settings_heading_arrow').click(function () {//shows the map option when clicked
        $('#map-canvas').show();//show div housing the map
        $('#main').show();//this shows the div housing the control buttons beneath the map
        $('#option').hide();//shows the option div

    });

    $('#more').click(function () {//this shows the div housing the control buttons beneath the map
        $('#option').show();//shows the option div
        $('#map-canvas').hide();//hides div housing the map
        $('#main').hide();//this shows the div housing the control buttons beneath the map
    });

});//end of jQuery statements