$(document).ready(function() {
	
	//NEED THIS!
	var title = document.querySelector('.display-title').innerHTML;
	var titleArray = title.split("");
	$('.display-title').empty();

	//NEED THIS!
	function appendTitle() {
		for (i = 0; i < titleArray.length; i++) { 
			var delay = i/4;
			var inc = i+1;
			$('.display-title').append("<div>" + titleArray[i] + "</div>");
			$('.display-title div:nth-of-type(' + inc + ')').removeAttr("style").css("animation-delay", delay + "s"); 
		}
	};
	
	//NEED THIS!
	function centerTitle() {
		var sumW = 0;
		var sumH = 0;
		$('.display-title div').each(function() {
			sumW += $(this).outerWidth();
			sumH = $(this).outerHeight();
		});
		$(".display-title").width(sumW + 20).height(sumH);
	};
	
	//NEED THIS!
	appendTitle();
	centerTitle();
	$(window).resize(function() {
		centerTitle();
	});
	
	
	
	function changeAnim(x) {
		$('.display-title div').removeClass().addClass(x);
	};

	$('.anim-select').change(function() {
		var new_anim = $(this).val();
		changeAnim(new_anim);
	});
	
	$('.play').click(function(e) {
		e.preventDefault();
		$('.display-title div').removeClass();
		var new_anim = $('.anim-select').val();
		setTimeout(function(){
			changeAnim(new_anim)
		}, 1);
	});
	
});











