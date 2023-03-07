(function ($) {
	
	"use strict";

	

	$(window).scroll(function() {
	  var scroll = $(window).scrollTop();
	  var box = $('.header-text').height();
	  var header = $('header').height();

	  if (scroll >= box - header) {
	    $("header").addClass("background-header");
	  } else {
	    $("header").removeClass("background-header");
	  }
	});
	

	


	// Window Resize Mobile Menu Fix
	mobileNav();


	// Scroll animation init
	window.sr = new scrollReveal();
	

	// Menu Dropdown Toggle
	if($('.menu-trigger').length){
		$(".menu-trigger").on('click', function() {	
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}


	$(document).ready(function () {
	    $(document).on("scroll", onScroll);
	    
	    //smoothscroll
	    $('.scroll-to-section a[href^="#"]').on('click', function (e) {
	        e.preventDefault();
	        $(document).off("scroll");
	        
	        $('a').each(function () {
	            $(this).removeClass('active');
	        })
	        $(this).addClass('active');
			$(this).removeClass('active');
	        var target = this.hash,
	        menu = target;
	       	var target = $(this.hash);
			if(target.length){
				$('html, body').stop().animate({
					scrollTop: (target.offset().top) + 1
				}, 500, 'swing', function () {
					window.location.hash = target;
					$(document).on("scroll", onScroll);
				});
			}	        
	    });
	});

	function onScroll(event){
	    var scrollPos = $(document).scrollTop();
	    $('.nav a').each(function () {
	        var currLink = $(this);
	        var refElement = $(currLink.attr("href"));
			//$(this).toggleClass('active');
			//$('.header-area .nav').slideToggle(200);
			if (refElement.length){
				if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
					$('.nav ul li a').removeClass("active");
					currLink.addClass("active");
				}
				else{
					currLink.removeClass("active");
				}
			}	
			$(this).toggleClass('active');
			$('.header-area .nav').removeClass("activ");

	    });
	}


	// Page loading animation
	 $(window).on('load', function() {

        $('#js-preloader').addClass('loaded');

    });


	// Window Resize Mobile Menu Fix
	$(window).on('resize', function() {
		mobileNav();
	});


	// Window Resize Mobile Menu Fix
	function mobileNav() {
		var width = $(window).width();
		$('.submenu').on('click', function() {
			if(width < 767) {
				$('.submenu ul').removeClass('active');
				$(this).find('ul').toggleClass('active');
			}
		});
	}


})(window.jQuery);
$(document).ready(function () {
	$(".offerItemTitle").click(function () {
		$(this).parents(".offerslide").children(".offerItem").removeClass("active");
		$(this)
		.parents(".offerslide")
		.children(".offerItem")
		.children(".offerItemTitle")
		.removeClass("hide");
		$(this).parent(".offerItem").addClass("active");
		$(this).addClass("hide");
	});
});