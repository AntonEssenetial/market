// module__about-odds
(function() {

    // Add offer slider
    var $loadSlider = $(".jsSlick5");
    
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
