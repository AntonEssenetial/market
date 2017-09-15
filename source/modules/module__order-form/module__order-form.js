// module__order-form
(function() {

    functionTabs('.jsTab', 'jsActive', '.jsCont', '.jsParent')

    var input = $('.row_50 input'),
        button = $('.row_50 .button');

    input.on('keyup', function(){
        if($(this).val().length > 0) {
            $(this).next(button).prop('disabled', false)
        } else {
            $(this).next(button).prop('disabled', true)
        }
    });

})();
