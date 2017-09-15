// module__rate
(function() {

    $('.module__rate').starRating({
        starSize: 20,
        strokeWidth: 15,
        strokeColor: '#d14480',
        initialRating: 2,
        emptyColor: '#ffffff',
        hoverColor: '#ff74af',
        useFullStars: true,
        starGradient: {
            start: '#ff74af',
            end: '#ff74af'
      }
    });

    $('.module__rate-static').starRating({
        starSize: 20,
        readOnly: true,
        strokeWidth: 15,
        strokeColor: '#ff74af',
        initialRating: 2,
        emptyColor: '#ffffff',
        hoverColor: '#ff74af',
        starGradient: {
            start: '#ff74af',
            end: '#ff74af'
      }
    });

})();
