$(document).ready(function() {
		var animArr = [];

		$('.anim-select option').each(function() {
			var options = $(this).val();
			animArr.push(options);
		});

		var clear = animArr.join(" ");
		
		function changeAnim(x,y) {
			$('.stj-title div').removeClass(y).addClass(x);
		};

		$('.anim-select').change(function() {
			var new_anim = $(this).val();
			$('.stj-title div').removeClass(clear).addClass(new_anim);
			changeAnim(new_anim);
		});
			
			$('.play').click(function(x) {
				x.preventDefault();
				var choice = $('.anim-select').val();
				$('.stj-title div').removeClass(clear);
				setTimeout(function(){
					changeAnim(choice, clear)
				}, 1);
			});
		});