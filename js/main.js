$('.partenr .owl-carousel').owlCarousel({
    stagePadding: 50,
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    },
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true
    });
$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')

})

// Caching The Scroll Top Element
var scrollButton = $("#scroll-top");

$(window).scroll(function () {
    if ($(this).scrollTop() >= 200) scrollButton.show();
    else scrollButton.hide();
});

// Click On Button To Scroll Top
scrollButton.on('click', function () {
    $('body,html').animate({
        scrollTop: 0
    }, 600);
});

(function($) {
	
	"use strict";
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.loader-wrap').length){
			$('.loader-wrap').delay(1000).fadeOut(500);
		}
	}

	if ($(".preloader-close").length) {
        $(".preloader-close").on("click", function(){
            $('.loader-wrap').delay(200).fadeOut(500);
        })
    }
});