// module__user-orders
(function() {

    $('.jsDetails').click(function(event) {
        $(this).toggleClass('active')
        $(this).next('.module__user-orders__details').toggleClass('active');
    });
    $('.jsShowSearch').click(function(event) {
        $(this).toggleClass('active')
        $('.m-show').toggleClass('active');
    });

})();
