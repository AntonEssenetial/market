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
