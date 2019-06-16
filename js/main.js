$(document).ready(function(){
	var $gallery = $('.gallery__carousel');
	
	if ($gallery.length) {
		$gallery.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			dots: false
		});
	}
	
	var $roomsSlider = $('.rooms__main-slider');
	
	if ($roomsSlider.length) {
		$roomsSlider.slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: true,
			dots: false
		});
	}
	
	var $roomsInnerSlider = $('.rooms__inner-slider');
	
	if ($roomsInnerSlider.length) {
		$roomsInnerSlider.each(function () {
			$(this).slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
				dots: false
			});
		})
	}
	
	// smooth scrolling
	
	$('.cta-screen__btn, .nav__link').on('click', function (e) {
		e.preventDefault();
		
		var href = $(this).attr('href');
		
		$('html, body').animate({
			scrollTop: $(href).offset().top
		}, 600);
	})
	
});


