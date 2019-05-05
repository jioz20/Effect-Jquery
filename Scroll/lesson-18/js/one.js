$(function(){
		var vitrimenu = $('.menutren').offset().top;
	$(window).scroll(function(event){

		var vitribody = $('body,html').scrollTop();

		//----1----
		// var vitri = $('body,html').scrollTop();
		// if((vitri > 720)&&vitri < 1200)
		// 	$('.menutren').addClass('bienhinh');
		// else 
		// 	$('.menutren').removeClass('bienhinh');



		// if((vitri > 1200)&&(vitri < 1800))
		// 	$('.menutren').addClass('cap1');
		// else 
		// 	$('.menutren').removeClass('cap1');

		// if((vitri > 1800)&&(vitri < 2400))
		// 	$('.menutren').addClass('cap2');
		// else 
		// 	$('.menutren').removeClass('cap2');
		//----1----

		if(vitribody > vitrimenu)
		{
			$('.menutren').addClass('cap3');
		}
		else 
		{
			$('.menutren').removeClass('cap3');
		}
	});
});