$(function() {
	//xử lý cho .nut click
	$('.noidung').addClass('noidunghienra');
	$('.momo').addClass('momora');

	var thongbao = setInterval(function(){
		$('.noidung').removeClass('noidunghienra'),
		$('.momo').removeClass('momora'), 
		clearInterval(thongbao);}, 5000);


	$('.nut').click(function(event) 
	{
		$('.noidung').addClass('noidunghienra');
		$('.momo').addClass('momora'); 
	});

	$('.nutdong').click(function(event) {
		$('.noidung').removeClass('noidunghienra');
		$('.momo').removeClass('momora'); 
	});
});