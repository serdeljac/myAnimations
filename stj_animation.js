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
			$('.display-title div:nth-of-type(' + inc + ')').removeAttr("style").css("animation-delay", delay + "s"); 
		}
	};

	/* Force to center the title by grabbing the sum width/height of characters
	    and adding them to outer div. Adjust if needed here. */
	function centerTitle() {
		var sumW = 0;
		var sumH = 0;
		$('.display-title div').each(function() {
			sumW += $(this).outerWidth();
			sumH = $(this).outerHeight();
		});
		$(".display-title").width(sumW + 20).height(sumH).css("margin", "20px auto");
	};

	appendTitle();
	centerTitle();
	$(window).resize(function() {
		centerTitle();
	});
	
	
	
	
	
});











