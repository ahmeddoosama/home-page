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

$(function () {
    'use strict';

    $(window).on('load', function () {
        $(".loader").delay(600).fadeOut();
    });
});