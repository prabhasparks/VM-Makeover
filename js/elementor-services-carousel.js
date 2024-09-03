(function($) {
    var servicesCarousel = function ($scope, $) {
		
    // Services owlCarousel
    jQuery('.services .owl-carousel').owlCarousel({
        loop: true
        , margin: 30
        , mouseDrag: true
		, autoplay: jQuery(".services .owl-carousel").data("services-autoplay")
		, autoplayTimeout:jQuery(".services .owl-carousel").data("services-timeout")
		, smartSpeed: jQuery(".services .owl-carousel").data("services-speed")
        , dots: jQuery(".services .owl-carousel").data("services-dots")
        , nav: false
        , responsiveClass: true
        , responsive: {
            0: {
                items: 1
            , }
            , 600: {
                items: 2
            }
            , 1000: {
                items: jQuery(".services .owl-carousel").data("services-item")
            }
        }
    });		


    };

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/belenava-services.default', servicesCarousel);
    });

   
})(jQuery);