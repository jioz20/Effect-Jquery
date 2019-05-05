$(function() 
{
	//Click vào thì thay đổi màu xanh
	$('.tdkhoi').click(function(event) {
		$(this).toggleClass('xanh');

	//Xử lý phóng to ảnh
		$(".vaicaianh a").fancybox({
				'titlePosition'		: 'outside',
				'overlayColor'		: '#000',
				'overlayOpacity'	: 0.9
			});

		//Hiện nội dung khi click vào
		$(this).next().slideToggle(800, "easeInOutExpo");

		$('body,html').animate({scrollTop: $(this).offset().top}, 1000, "easeInOutExpo");	
	});

	//Xử lý accordion
	
		$('.ndkhoi').slideToggle();
});