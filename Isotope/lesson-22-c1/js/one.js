$(function() {
	//Viết cho nút 
	$('nav ul li a').click(function(event) {

		//Phát hiện data class của nút được click
		var danhmuc = $(this).data('tinhnang');
		var tendanhmuc = $(this).text();

		$('section h1').text(tendanhmuc);
		// console.log(danhmuc);
		

		$('.content ul li').each(function(index, el) {
			if($(this).hasClass(danhmuc))
			{
				$(this).show(1000); //fadeIn
			}
			else 
				$(this).hide(1000);	//fadeOut
		});
		return false;
	});
});