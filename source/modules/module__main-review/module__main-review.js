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
                    breakpoint: 6000,
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
                'height', (parseInt($(window).height())-0) + "px"
            );
        } else {
            var sliderHeight = $('.module__main-review__slide, .jsSlick4').css( 
                'height', 'auto'
            );
        }
    });

})();
