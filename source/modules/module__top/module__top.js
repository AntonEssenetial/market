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
