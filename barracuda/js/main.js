$(document).ready(function () {
	$('.slider').slick({
		dots: true,
        autoplay: true,
        infinite: true,
        speed: 600,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
	});
	$('.products-slider').slick({
		dots: false,
        autoplay: false,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
        	{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {

                breakpoint: 768,
                settings: {
	                slidesToShow: 2,
	                slidesToScroll: 1
	            }
            },
            {
                breakpoint: 576,
                settings: {
                	slidesToShow: 1,
                	centerMode: true,
                	centerPadding: '25px'
                }
            }
            
        ]
	})

	//datepicker

	$('.date').pickadate({
		monthsFull: [ 'Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень' ],
	    monthsShort: [ 'січ', 'лют', 'бер', 'кві', 'тра', 'чер', 'лип', 'сер', 'вер', 'жов', 'лис', 'гру' ],
	    weekdaysFull: [ 'Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П‘ятниця', 'Субота' ],
	    weekdaysShort: [ 'нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб' ],
	    today: 'Сьогодні',
	    clear: 'Викреслити',
	    close: 'Закрити',
	    firstDay: 1,
	    format: 'dd mmmm yyyy p.',
		formatSubmit: 'yyyy/mm/dd'
	});

	// Select
	$('#form-select, #lang-select, #phone-select').niceSelect();




	// dropdown
	$('.nav-list a').click(function(e) {
		var currTarget = $(e.target);
		$(this).siblings('.nav-dropdown').toggle();	
		$('.nav-dropdown').not($(this).siblings()).hide();
		e.stopPropagation();
	});

	$('.menu-toggle').click(function() {
		$('.mobile-hide').toggleClass('mobile-show', 1000);
		$('.menu-toggle').toggleClass('active');
	});

	$('html').click(function() {
		$('.nav-dropdown').hide();
	});

	//search
	$('.search-btn').click(function () {
		$('.search input').css('visibility', 'visible');
	})

	$('.mobile-search-btn').click(function() {
		$('.search-input-parrent').toggle();
		if($('.mobile-hide').hasClass('mobile-show')){
			$('.mobile-hide').removeClass('mobile-show');
		}
	})

	//scrol top
	$(window).scroll(function(){
		if ($(this).scrollTop() > 500) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});

	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},500);
		return false;
	});
})