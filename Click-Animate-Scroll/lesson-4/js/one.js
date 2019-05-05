$(function() {

	$('.menutop ul li:nth-child(1) a').on('click', function(event){
		event.preventDefault();		
		$('body,html').animate({ scrollTop: $('.chapter1').offset().top}, 1000);
		
	});

	$('.menutop ul li:nth-child(2) a').on('click', function(event){
		event.preventDefault();		
		$('body,html').animate({ scrollTop: $('.chapter2').offset().top}, 1000);
		
	});

	$('.menutop ul li:nth-child(3) a').on('click', function(event){
		event.preventDefault();		
		$('body,html').animate({ scrollTop: $('.chapter3').offset().top}, 1000);
		
	});

	$('.menutop ul li:nth-child(4) a').on('click', function(event){
		event.preventDefault();		
		$('body,html').animate({ scrollTop: $('.chapter4').offset().top}, 1000);
		
	});


	//Trở về phía trên đầu với phần home or cho 0px;
	$('.nutlentren').on('click', function(event){
		event.preventDefault();		
		$('body,html').animate({ scrollTop: 0}, 1000);
		
	});
});