$(document).ready(function() {

		var title = $('.stj-title').text();
		var titleArray = title.split('');
		var sumW = 0;
		$('.stj-title').empty();

		for (i = 0; i < titleArray.length; i++) { 
			var delay = i/4;
			var inc = i+1;
			//Delete forward slashes below to randomize the delays (OPTIONAL)
				var delay = Math.random(delay);
			$('.stj-title').append("<div>" + titleArray[i] + "</div>");
			var current = $('.stj-title div:nth-of-type(' + inc + ')');
			if (titleArray[i] === " ") {
				current.addClass("stj-anim stj-gap");
			} else {
				current.addClass("stj-anim").css("animation-delay", delay + "s").addClass('');  //ADD THE ANIMATION NAME HERE!
			}
		};
		
		//Sets the width of the title so it can be centered with margin auto
		$('.stj-title div').each(function() {
			sumW += $(this).outerWidth()+1;
		});
		$('.stj-title').css("width", sumW);
		
		//When animation finished, reset title to old state (OPTIONAL)
		/*
		$('.stj-title div:last-child').one('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend', function() {
			$('.stj-title').empty().html(title);
		});
		*/
});











