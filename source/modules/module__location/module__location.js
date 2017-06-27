// module__location
(function() {

    var container = $('.module__location__content');

    $(window).on('load resize', function(){
        if($(window).width() <= 868) {
            container.css( 
                'height', (parseInt($(window).height())-136) + "px"
            );
        }
    });

})();
