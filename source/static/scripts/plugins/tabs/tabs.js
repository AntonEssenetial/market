function functionTabs(tab, tabActive, tabContent, parentDiv){

    var jsTab = $(tab),
        jsTabActive = tabActive,
        jsParent = $(parentDiv),
        jsContent = $(tabContent);

    jsTab.click(function() {
        $(this).closest(jsParent).find(jsTab).removeClass(jsTabActive).eq($(this).index()).addClass(jsTabActive);
        $(this).closest(jsParent).find(jsContent).removeClass('jsActive animated fadeInRight').eq($(this).index()).addClass('jsActive animated fadeInRight');
    }).eq(0);

}

    // Auto height column function
    equalheight = function(container){

    var currentTallest = 0,
        currentRowStart = 0,
        rowDivs = new Array(),
        $el,
        topPosition = 0;

    $(container).each(function() {
  
        $el = $(this);
        $($el).height('auto')
        topPostion = $el.position().top;
  
        if (currentRowStart != topPostion) {
            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
        rowDivs.length = 0; // empty the array
        currentRowStart = topPostion;
        currentTallest = $el.height();
        rowDivs.push($el);
        } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        }
            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
            }
        });
    }
