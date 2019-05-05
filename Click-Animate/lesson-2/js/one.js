$(function() {
	// $('.dangnhap').animate({opacity:0, marginLeft: -100})
	$('.dangky').animate({opacity:0, marginLeft: -100})
	

	//Khi nhấn vào nút đăng nhập thì nó sẽ chuyển sang giao diện đăng ký với hiệu ứng chuyển sang trái -100px
	$('.nutdangnhap').click(function(event) {
		$('.dangnhap').animate({opacity:0, marginLeft: -100});
		$('.dangky').animate({opacity:1, marginLeft: 0});
	});



	$('.nutdangky').click(function(event) {
		$('.dangky').animate({opacity:0, marginLeft: -100});
		$('.dangnhap').animate({opacity:1, marginLeft: 0});
	});
});