// Sandwitch
(function() {

    var menu = $('.module__mobile-blocks'),
        body = $('html');

    $('.jsMobileDropdown').click(function(event) {
        $(this).toggleClass('active');
        menu.toggleClass('active');
        body.toggleClass('page_mobile-menu');
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
