$(function() {
	//xử lý cho .nut click
	
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