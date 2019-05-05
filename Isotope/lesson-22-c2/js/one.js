$(function() {
	$('.content ul').isotope({
		itemSelector:'li'
	})

	//Code cho phần từ khóa
	$('.tukhoa').keypress(function(event){
		if(event.keyCode == '13')
		{
			tu1 = $('.tukhoa').val();
			tu1 = "."+tu1;
			$('.content ul').isotope({filter:tu1});
		}
	})

	thoigian = setInterval(function(){
		tu1 = $('.tukhoa').val();
		tu1 = "."+tu1;
		$('.content ul').isotope({filter:tu1});
	},200);

	//code cho phần nút
	
	$('nav ul li a').click(function(event) {
		var danhmuc = $(this).data('tinhnang');

		var tendanhmuc = $(this).text();

		//Cách 1: Thêm nhiều dấu chấm ngoài trước

		//Cách 2
		danhmuc = "."+danhmuc;

		//Đặt tên vào trong h1
		$('section h1').text(tendanhmuc);

		if(danhmuc == '.all')
			$('.content ul').isotope({filter:'*'});
		else 
			$('.content ul').isotope({filter:danhmuc});

		return false;
	});
});