$(function(){
	

	
	$('#control').knobKnob({
		snap : 10,
		value: 90, /*set starting point - works*/
		turn : function(ratio){
			if (ratio <= 0.1) {
				$(".illustrated").fadeOut();
				$(".knit").fadeOut();
				$(".minimal").fadeIn(1000);
				$("li.da-thumbs").css("background", "#880606");

	
	
			}
		else if (ratio >= 0.9) {
			$(".minimal").fadeOut();
			$(".illustrated").fadeOut();
			$(".knit").fadeIn(1000);
			$("li.da-thumbs").css("background", "#FFFFFF");
	
			}
			
			else if (ratio > 0.1 && ratio < 0.9) {
			$(".minimal").fadeOut();
			$(".knit").fadeOut();
			$(".illustrated").fadeIn(1000);
			$("li.da-thumbs").css("background", "#C8B39B");
			
		
		
	
		
		
			}
		}
	});
	
});
