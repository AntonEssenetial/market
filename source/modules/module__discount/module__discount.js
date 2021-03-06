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
        draggable: false,
        responsive: [
            {
                breakpoint: 1024,
                draggable: true,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
              }
            },
            {
              breakpoint: 768,
              draggable: true,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
              }
            }
        ]
    });

})();
