$(function() {
	//Tất cả nội dung sẽ thu lại, dãn ra
	$('.ndmotkhoi').slideUp();

	$('.motkhoi h3').click(function(event) {
		
		$('.ndmotkhoi').slideUp();

		$(this).next().slideToggle();
		//tự động thêm và xóa class xanh

		$(this).toggleClass('xanh');
	});
});