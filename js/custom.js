$(function(){

	
	$('#menu').mmenu({
		extensions	: [ 'effect-slide-menu', 'pageshadow' ],
		searchfield	: false,
		navbar 		: {
			title		: 'القائمة'
		},
		navbars		: [
			{
				position	: 'top',
				content		: [ 'searchfield' ]
			}, {
				position	: 'top',
				content		: [
					'prev',
					'title',
					'close'
				]
			}
		]
	});













		$(".header .searchHeader i").click(function ()
		{
			$(this).siblings().toggleClass("active")
		});
		

	$('#slider').bxSlider({
		useCSS: false,
		auto: true,
		controls: true,
		pager: true,
		autoHover: true,
		responsive: true,
		nextSelector: '#slider-next',
		prevSelector: '#slider-prev',
		nextText: '<i class="fa fa-angle-right"></i>',
		prevText: '<i class="fa fa-angle-left"></i>',
		SliderLoad: function () {
			$('.the-slider-inner > li').eq(1).addClass('active-slide');
		}
	});
	
	$('#sliderPhotos').bxSlider({
		useCSS: false,
		auto: true,
		controls: true,
		pager: false,
		autoHover: true,
		responsive: true,
		nextSelector: '#slider-next',
		prevSelector: '#slider-prev',
		nextText: '<i class="fa fa-angle-right"></i>',
		prevText: '<i class="fa fa-angle-left"></i>',
		SliderLoad: function () {
			$('.the-slider-inner > li').eq(1).addClass('active-slide');
		}
	});
	

	
	
	  var Owlprojects = $('#Owlprojects');
	 
	  Owlprojects.owlCarousel({
	      
	      items : 4, //10 items above 1000px browser width
	      itemsDesktop : [1200,4], //5 items between 1000px and 901px
	      itemsDesktopSmall : [979,3], // betweem 900px and 601px
	      itemsTablet: [768,2], //2 items between 600 and 0
	      itemsMobile : [479,1],// itemsMobile disabled - inherit from itemsTablet option
	      slideSpeed : 500,
	      paginationSpeed : 400,
	      pagination:false,
	      navigation:true,
	      autoPlay:true,
	      navigationText:["<i class='fa fa-angle-left fa-2x'></i>","<i class='fa fa-angle-right fa-2x'></i>"]
	  });
	
		
	
	
});
