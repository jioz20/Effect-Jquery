$(function() {
	//TweenMax.to(TenCuaPhanTu, ThoiGian, {TenThuocTinh:GiaTri, TenThuocTinh:GiaTri, v.v});
	
	// TweenMax.to($('.nut2'), 1 , {y:200, opacity:0, scale: 2});

	// TweenMax.from($('.nut1'), 1 , {x:-200, opacity:0,scale: 2});

	// TweenMax.from($('.nut3'), 1 , {x:200, opacity:0, scale: 2});

	$('.nut2').click(function(event) {
		TweenMax.fromTo($('.nut1'), 2, {x:-200}, {x:500});
		TweenMax.to($(this), 2, {y:"+=50"});
		TweenMax.to($('.nut3'), 2, {scale:"+=0.1"});
	});

	

	// TweenMax.fromTo($('.btn-primary'), 1, {y:600, opacity:0}, {y:0, opacity: 1});
	
	vdsstaggerfrom();
	
	function vdsstaggerto()
	{
		TweenMax.staggerTo($('.btn-primary'), 2, {x:-300, opacity:0}, 0.5)
	}

	function vdsstaggerfrom()
	{
		TweenMax.staggerFrom($('.btn-primary'), 2, {y:300, opacity:0, ease:Bounce.easeOut}, 0.2)
	}
});