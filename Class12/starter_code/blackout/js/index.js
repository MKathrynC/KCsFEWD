(document).ready(function(){
	//setting up a variable to store lights on or off
	var lights = 'on';


	//listener waiting for user to click

	$('#light_switch').click(switchLights);

	function switchLights() {
		//test to see if the lights are on
		if (lights === 'on'){
			//if yes, change background to black
			$(body).css('background', 'black');
			//update the current state so lights are off

			lights = 'off';
			//test to see if the lights are off
		}else if(lights === 'off'){
			//if they are, change the background to white
			$('body').css('background', 'white');

			lights = 'on';


		}

	}
});
