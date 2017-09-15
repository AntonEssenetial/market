// module__s-item
(function() {


    $('.button_js').click(function(event) {
        $(this).closest('.module__order-form__form-row').find('.button').removeClass('active')
        $(this).addClass('active');
        return false;

    });


    function desktop(){
        var container = $('.module__s-item__tool');

        $('.jsTool').click(function(event) {
            $(this).find(container).addClass('active')
        });

        $(document).mouseup(function (e) {
            if (container.has(e.target).length === 0){
                container.removeClass('active');
            }
        });
    }

    function mobile() {
        var container = $('.module__s-item__tool');

        $('.jsTool').click(function(event) {
            container.toggleClass('active')
        });
    }

    $(window).on('load resize', function(){
        if($(window).width() <= 1024) {
            mobile();
        } else {
            desktop();
        }
    });

})();
