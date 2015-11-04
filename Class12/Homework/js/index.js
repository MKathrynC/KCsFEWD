$(document).ready(function() {

	//Listen for the user to submit a new city
	$('#CityForm').submit(changeBackground);

	function changeBackground(event){
		event.preventDefault();
		var userInput = $('#city-type').val();


		


		// if (UserInput=== 'nyc')  
		// else	

	}
	if (UserInput === 'nyc') {
		$('body').addClass('nyc')
	;

	if (UserInput === 'sf') {
		$('body').addClass('sf')

	};
});