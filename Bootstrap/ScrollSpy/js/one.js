$(function() {
	$('body').scrollspy({target:'.menutren'})
	// target: mục tiêu
	
	$('.menutren ul li a').click(function(event) {
		var vitri = $(this).attr('href'); //Lấy thuộc tính href 
		var toado = $(vitri).offset().top;

		$('body,html').animate({scrollTop:toado});
		return false;
	});
});