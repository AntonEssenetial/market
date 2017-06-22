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
        prevArrow: '.slick-prev'
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

