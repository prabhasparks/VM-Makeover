(function($) {
    var testimonialsCarousel = function ($scope, $) {

		// Testimonials owlCarousel
		jQuery('.testimonials .owl-carousel').owlCarousel({
			loop:true,
			margin: 30,
			mouseDrag:true,
			autoplay: jQuery(".testimonials .owl-carousel").data("testimonials-autoplay"), 
			autoplayTimeout:jQuery(".testimonials .owl-carousel").data("testimonials-timeout"), 
			smartSpeed: jQuery(".testimonials .owl-carousel").data("testimonials-speed"), 			
			dots: jQuery(".testimonials .owl-carousel").data("testimonials-dots"),
			nav: false,
			navText: ["<span class='lnr ti-angle-left'></span>","<span class='lnr ti-angle-right'></span>"],
			responsiveClass:true,
			responsive:{
				0:{
					items:1,
				},
				600:{
					items:1
				},
				1000:{
					items:1
				}
			}
		});


    };

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/belenava-testimonials.default', testimonialsCarousel);
    });

   
})(jQuery);