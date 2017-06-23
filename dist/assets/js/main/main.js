'use strict';

// svg4everybody();

$(function() {
    FastClick.attach(document.body);
});
  
// Modules
// modals
$(function() {
    $('[data-remodal-id]').remodal();
});


// module__bottom-cart
(function() {

    var button = $('.jsCart'),
        cart = $('.module__bottom-cart'),
        wHeight = parseInt($(window).height())-148,
        body = $('html');

    button.click(function(event) {
        $(this).toggleClass('active');
        body.toggleClass('page_mobile-menu');
        cart.toggleClass('opend');
    });

    if(body.hasClass('page_mobile-menu')) {
        document.ontouchmove = function(event){
            event.preventDefault();
        }
    }
    else {
        document.ontouchmove = function(e) {
            e.stopPropagation();
        };
    }

})();

// module__discount
(function() {

    var topSlider = $('.jsSlick3');

    topSlider.slick({
        arrows: true,
        fade: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 7000,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: '.slick-next-2',
        prevArrow: '.slick-prev-2'
    });

})();

// module__main-review
(function() {

    var topSlider = $('.jsSlick2');

    topSlider.slick({
        arrows: false,
        fade: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidetoshow: 1,
        slidetoscroll: 1,
        nextArrow: '.slick-next',
        prevArrow: '.slick-prev'
    });

})();

// module__notification
(function() {

    $('.jsClose').click(function(event) {
        $('.module__notification').removeClass('jsVisible');
        $('.module__popup').removeClass('jsVisible');
    });

})();

// module__top
(function() {

    var topSlider = $('.jsSlick');

    topSlider.slick({
        arrows: true,
        fade: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 7000,
        nextArrow: '.slick-next',
        prevArrow: '.slick-prev',
        centerPadding: '60px'
    });

    $(window).on("load resize",function(e){
        equalheight('.module__item');
    });


})();

// Sandwitch
(function() {

    $('.jsMobileDropdown').click(function(event) {
        var menu = $('.main-menu');
        $(this).toggleClass('active');
        menu.toggleClass('active');
        $('body').toggleClass('page_mobile-menu');
    });

})();

// custom select
(function() {

    $('select').styler({
        selectSmartPositioning: false
    });

    // $('.jq-selectbox__dropdown ul').mCustomScrollbar({
    //     scrollInertia:100,
    //     autoExpandScrollbar: true
    // });

})();

