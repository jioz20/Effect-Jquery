$(function() {
	TweenMax.staggerFrom($('.to'), 1, {bottom:100, opacity: 0}, 0.3);

	$('.noidungthem').slideUp(0);

	$('.nutload').click(function(event) {
		$('.noidungthem').slideDown();
	});
});