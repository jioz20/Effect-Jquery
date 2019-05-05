$(function() {
	cd1 = new TimelineMax();
	cd1.to($('.nut1'), 1, {x:-300})
	   .to($('.nut1'),1,{y:300})
	   .to($('.nut1'),1, {x: 500}, "+=1") //+=1: Là so sánh với chuyển động trước đó
	   .to($('.nut1'), 1, {rotationX:720})
	   .to($('.nut1'), 1, {rotationX:360, y:0})
	   .to($('.nut1'), 1, {rotationX:0, x:200})

	   $('.nutstop').click(function(event) {
	   	cd1.stop();
	   });
	   $('.nutplay').click(function(event) {
	   	cd1.play();
	   });

	   	$('.nutdaonguoc').click(function(event) {
	   	cd1.reverse();
	   });
});