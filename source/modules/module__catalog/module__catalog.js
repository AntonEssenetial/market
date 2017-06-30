// module__catalog
(function() {

    $('.module__catalog-item__img').click(function(event) {
        container.addClass('active')
    });

    var container = $('.module__catalog__wrap');
    $(document).mouseup(function (e) {
        if (container.has(e.target).length === 0){
            container.removeClass('active')
        }
    });

    $('.jsSearch').click(function(event) {
        $('.module__catalog__m-search').toggleClass('active');
    });

})();
