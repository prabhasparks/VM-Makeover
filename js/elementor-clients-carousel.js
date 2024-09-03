(function($) {
    var clientsCarousel = function ($scope, $) {

		// Clients owlCarousel
		jQuery('.clients .owl-carousel').owlCarousel({
			loop: true
			, margin: 30
			, mouseDrag: true
			, autoplay: jQuery(".clients .owl-carousel").data("clients-autoplay")
			, autoplayTimeout:jQuery(".clients .owl-carousel").data("clients-timeout")
			, smartSpeed: jQuery(".clients .owl-carousel").data("clients-speed")
			, dots: false
			, responsiveClass: true
			, responsive: {
				0: {
					margin: 10
					, items: 3
				}
				, 600: {
					items: 3
				}
				, 1000: {
					items: 4
				}
			}
		});


    };

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/belenava-clients.default', clientsCarousel);
    });

   
})(jQuery);