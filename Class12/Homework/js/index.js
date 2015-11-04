$(document).ready(function() {

	//Listen for the user to submit a new city
	$('#CityForm').submit(changeBackground);

	function changeBackground(event){
		event.preventDefault();
		var userInput = $('#city-type').val();
		$('body').removeAttr("class");
		$('body').addClass(userInput);

	}

});