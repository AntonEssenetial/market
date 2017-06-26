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
        container = $('.jsScrollContainer'),
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

    function initCartScroll() {
        container.css( 
            'height', (parseInt($(window).height())-148) + "px"
        );
        container.niceScroll({
            cursorcolor: "#ff74af",
            cursorwidth: "2px",
            cursorborder: "0px solid #fff", 
            cursorborderradius: "0px",
            horizrailenabled: false,
            autohidemode: true,
            oneaxismousemode:false,
            cursoropacitymax:0.7
        });
    }

    $(window).on('load resize', function(){
        initCartScroll();
    });

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
        prevArrow: '.slick-prev-2',
        infinite: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
              }
            }
        ]
    });

})();

// module__location
(function() {

    var container = $('.module__location__content');

    $(window).on('load resize', function(){
        if($(window).width() <= 868) {
            container.css( 
                'height', (parseInt($(window).height())-148) + "px"
            );
        }
    });

})();

// module__main-review
(function() {

    var revSlider = $('.jsSlick2');

    revSlider.slick({
        arrows: false,
        fade: false,
        dots: true,
        autoplay: false,
        autoplaySpeed: 2000,
        slidetoshow: 1,
        slidetoscroll: 1,
        nextArrow: '.slick-next',
        prevArrow: '.slick-prev',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
              }
            }
        ]
    });


    // Add offer slider
    var $loadSlider = $(".jsSlick4");
    
    function createSlick(){  
        $loadSlider.not('.slick-initialized').slick({
            arrows: false,
            fade: false,
            dots: true,
            slidetoshow: 2,
            slidertoscroll: 2,
            responsive: [
                {
                    breakpoint: 1920,
                    settings: "unslick"
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                }
            ]
        }); 
    };

    $(window).on("load resize",function(e){
        createSlick();
        if($(window).width() <= 1024) {
            equalheight('.module__main-review__item');
        } 
        if($(window).width() <= 414) {
            var sliderHeight = $('.module__main-review__slide, .jsSlick4').css( 
                'height', (parseInt($(window).height())-47) + "px"
            );
        } else {
            var sliderHeight = $('.module__main-review__slide, .jsSlick4').css( 
                'height', 'auto'
            );
        }
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
        if($(window).width() <= 868) {
            var sliderHeight = $('.module__top__slide').css( 
                'height', (parseInt($(window).height())-47) + "px"
            );
        } else {
            equalheight('.module__main-review__item');
            var sliderHeight = $('.module__top__slide').css( 
                'height', '520'
            );
        }
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

