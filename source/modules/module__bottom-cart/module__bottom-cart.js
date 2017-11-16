// module__bottom-cart
(function() {

    var button = $('.jsCart'),
        cart = $('.module__bottom-cart'),
        wHeight = parseInt($(window).height())-146,
        container = $('.jsScrollContainer'),
        body = $('html'),
        close = $('.jsCartClose'),
        closed = 'jsClosed';

    close.click(function(event) {
        cart.addClass(closed);
    });

    button.click(function(event) {
        $(this).toggleClass('active');
        //body.toggleClass('cart-opend');
        cart.toggleClass('opend');
        cart.removeClass(closed);
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
            'height', (parseInt($(window).height())-146) + "px"
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
        if($(window).width() <= 752){
            body.removeClass('cart-opend');
            cart.removeClass('opend');
            button.removeClass('active')
        }
    });

})();
