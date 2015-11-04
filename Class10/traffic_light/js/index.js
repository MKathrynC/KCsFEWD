//Implement the red light using jQuery. Don't forget to add the script tags.
$(document).ready(function() {

//code goes here!
	function clearLights() {
		$('.bulb').css('backgroundColor', 'black');
	}
	function illuminateStopLightRed() {
		$('#stopLight').css('backgroundColor', 'red');
	}
	function illiminateSlowLightYellow() {
		$('#slowLight').css('backgroundColor', 'yellow');
	}
	function illiminateGoLightGreen() {
		$('#goLight').css('backgroundColor', 'green');
	}
	$('#stopButton').click(illuminateStopLightRed);
	$('#slowButton').click(illiminateSlowLightYellow);
	$('#goButton').click(illiminateGoLightGreen);



});