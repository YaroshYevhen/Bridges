var APP = {};
APP.mainSlider = $('.slider-container');
APP.partnersSlider = $('.partners-slider');
APP.zoomImg = $('.popup-show');
APP.modalImg = $('.modal-preview');
APP.closeModal = $('.popup-hide');
APP.$document = $(document);

$(document).ready(function() {

	APP.mainSlider.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		infinite:false,
		appendArrows:$('.slider-buttons'),
		nextArrow: '<button class="slick-next slick-arrow"><i><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="14px"> <path fill-rule="evenodd" d="M0.011,6.196 L26.430,6.196 L20.508,1.139 L21.831,0.010 L30.015,6.999 L21.831,13.988 L20.508,12.859 L26.430,7.802 L0.011,7.802 L0.011,6.196 Z"/> </svg></i></button>',
    prevArrow: '<button class="slick-prev slick-arrow"><i><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="14px"> <path fill-rule="evenodd" d="M0.011,6.196 L26.430,6.196 L20.508,1.139 L21.831,0.010 L30.015,6.999 L21.831,13.988 L20.508,12.859 L26.430,7.802 L0.011,7.802 L0.011,6.196 Z"/> </svg></i></button>',
  });

	APP.partnersSlider.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		infinite:false,
		appendArrows:$('.partners-slider-buttons'),
		nextArrow: '<button class="slick-next slick-arrow"><i><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="11px" height="18px"><path fill-rule="evenodd"  fill="rgb(31, 31, 31)" d="M0.827,1.377 L9.185,9.132 L0.827,16.887 L1.636,17.637 L10.820,9.132 L1.636,0.627 L0.827,1.377 Z"/></svg></i></button>',
    prevArrow: '<button class="slick-prev slick-arrow"><i><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="11px" height="18px"><path fill-rule="evenodd"  fill="rgb(31, 31, 31)" d="M0.827,1.377 L9.185,9.132 L0.827,16.887 L1.636,17.637 L10.820,9.132 L1.636,0.627 L0.827,1.377 Z"/></svg></i></button>',
	});

	$('.hamburger').on('click', function() {
    $(this).toggleClass('active');
    $('body').toggleClass('menu');
  });
  
	if ($('.partners-slider-item__text').css('max-height') < $('.partners-slider-item__text p').css('height')) {
		$('.partners-slider-item__more').css({'display' : 'block'});
	};

	$('.partners-slider-item__more').on('click', function() {
		event.preventDefault();
		$('.partners-slider-item__text').css({'max-height' : 'none'});
		$(this).hide();
	});

	function doAnimation (){
   var windowScroll = $(window).height() + APP.$document.scrollTop(),
       element = APP.$document.find('.js-animation:not(.animate)')[0];

  $('.js-animation:not(.animate)').each(function(key, item){
	var itemOffset = $(item).offset().top + 100;

	if(windowScroll >= itemOffset){
	  $(item).addClass('animate');
	}
  });
};

doAnimation ();

APP.$document.on('scroll', function(){
  doAnimation ();
});

	if (APP.partnersSlider.length) {
  var currentSlide;
  var slidesCount;
  var sliderCounter = document.createElement('div');
  sliderCounter.classList.add('partners-slider__counter');
  
  var updateSliderCounter = function(slick, currentIndex = null) {
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = $('.partners-slider-item').length;
    $(sliderCounter).html(currentSlide + '/' + slidesCount);
  };

  APP.partnersSlider.on('init', function(event, slick) {
    APP.partnersSlider.append(sliderCounter);
    updateSliderCounter(slick);
  });

  APP.partnersSlider.on('afterChange', function(event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });

  APP.partnersSlider.slick();
}


	APP.zoomImg.on('click', function() {
		var imageSource = $(this).data('large'),
				contentText = $(this).find('p').text();

		$('.js-zoom__img').attr('src', imageSource )
	  APP.modalImg.addClass('active').find('.text').text(contentText);





		// $('.projects-popup').addClass('show')
		// 										.find('.projects-popup-content__img')
		// 										.attr('src', imageSource);
		// $('body').css({'overflow' : 'hidden'});
	});


	APP.closeModal.on('click', function() {
		APP.modalImg.removeClass('active');
	});

	$('.about-page-description__more').on('click', function() {
		event.preventDefault();
		$('.about-page-description p').css({'display' : 'inline-block'});
		$(this).hide();
	});

$('.need-animate').addClass('animate');

$(window).on('scroll', function(event){

	console.log( $(this).scrollTop() );
});
console.log( $(window).height());

$('section').each(function(key, item){
	console.log( $(item).offset().top );
});
	

});
// document ready


