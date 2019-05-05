$(function() {


	thoigian = setInterval(function(){
		$('.next').trigger('click');
	}, 3000);

	$('.next').click(function(event) {
		
		var sau = $('.active').next();

		//Xử lý cho phần nút
		var vitri = $('.xanh').index() + 1;
		$('.nutslide ul li').removeClass('xanh');


		if(vitri == $('.nutslide ul li').length)
		{
			vitri = 0;
		}
		$('.nutslide ul li:nth-child('+(vitri+1)+')').addClass('xanh');
		//Xử lý cho phần slide
		if(sau.length == 0) //nếu nó hết slide thì sẽ quay ngược trở lại
		{
			$('.active').addClass('bienMat').one('webkitAnimationEnd', function(event) {
				$('.bienMat').removeClass('bienMat'); 
			});

			$('.anhslide ._1slide:first-child').addClass('divaophai').one('webkitAnimationEnd', function(event){
				$('.active').removeClass('active');
				$('.divaophai').addClass('active').removeClass('divaophai');
			});

		} 
		else 
		{
			$('.active').addClass('bienMat').one('webkitAnimationEnd', function(event) {
				$('.bienMat').removeClass('bienMat'); 
			});


			sau.addClass('divaophai').one('webkitAnimationEnd', function(event) {

			//bỏ active phía trước
			$('.active').removeClass('active');

			//Cho cái slide sau được active
			$('.divaophai').addClass('active').removeClass('divaophai'); 
		});
		}
			
	});


	$('.previous').click(function(event) {
		clearInterval(thoigian);
		var truoc = $('.active').prev();

		var vitri = $('.xanh').index() + 1;
		$('.nutslide ul li').removeClass('xanh');


		if(vitri == 1)
		{
			vitri = $('.nutslide ul li').length + 1;
		}
		$('.nutslide ul li:nth-child('+(vitri-1)+')').addClass('xanh');

		if(truoc.length == 1)
		{
			$('.active').addClass('bienMatPhai').one('webkitAnimationEnd', function(event) {
				$('.bienMatPhai').removeClass('bienMatPhai'); 
			});

		truoc.addClass('divaotrai').one('webkitAnimationEnd', function(event) {

			//bỏ active phía trước
			$('.active').removeClass('active');

			//Cho cái slide sau được active
			$('.divaotrai').addClass('active').removeClass('divaotrai'); 
		});

		}
		else 
		{
			$('.active').addClass('bienMatPhai').one('webkitAnimationEnd', function(event) {
				$('.bienMatPhai').removeClass('bienMatPhai'); 
			});

			$('.anhslide ._1slide:last-child').addClass('divaotrai').one('webkitAnimationEnd', function(event){
				$('.active').removeClass('active');
				$('.divaotrai').addClass('active').removeClass('divaotrai');
			});
		}
	});


	//Code chuyển cho nút slide bên dưới
	$('.nutslide ul li').click(function(event){

		//không nút nào được xanh
		$('.nutslide ul li').removeClass('xanh');

		//this là nút được click
		$(this).addClass('xanh');

		//Code xử lý cho slide
		
		//Cho slide hiện tại biến mất	
		$('.active').addClass('bienMat').one('webkitAnimationEnd', function(event) {
				$('.bienMat').removeClass('bienMat'); 
			});

			$('.anhslide ._1slide:nth-child('+ ($(this).index() + 1)+')').addClass('divaophai').one('webkitAnimationEnd', function(event){
				$('.active').removeClass('active');
				$('.divaophai').addClass('active').removeClass('divaophai');
			});
	});
});