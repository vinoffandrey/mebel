/*=====================================Меню-бургер==============================*/
$(document).ready(function () {
	$('.menu__body, .menu__burger').click(function (event) {
		$('.menu__burger, .menu__body, .header__container').toggleClass('active');
		$('body').toggleClass('lock')
	});
});


/*=====================================Слайдер==============================*/
$(document).ready(function () {
	$('.slider').slick({
		adaptiveHeight: true,
		arrows: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
				}
			}, {
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
});

$(document).ready(function () {
	$('.slider2').slick({
		adaptiveHeight: true,
		arrows: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 2,
				}
			}, {
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
});