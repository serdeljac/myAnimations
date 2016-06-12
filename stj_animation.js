$(document).ready(function() {

	var title = document.querySelector('.display-title').innerHTML;
	var titleArray = title.split("");
	$('.display-title').empty();

	//Appends each character to it's own DIV
	function appendTitle() {
		for (i = 0; i < titleArray.length; i++) { 
			var delay = i/4;
			var inc = i+1;
			//Delete forward slashes below to randomize the delays
			//var delay = Math.random(delay)
			$('.display-title').append("<div>" + titleArray[i] + "</div>");
			$('.display-title div:nth-of-type(' + inc + ')').removeAttr("style")
																				.css("animation-delay", delay + "s")
																				.css("position", "relative")
																				.css("float", "left")
																				.addClass('');  //ADD THE ANIMATION NAME HERE!
		}
	};

	appendTitle();
	
	
	
	
	
	
});











