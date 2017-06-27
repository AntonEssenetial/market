// module__stat
(function() {

    var $loadSlider = $(".jsSlick6");
    
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
                    breakpoint: 752,
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
    });

})();
