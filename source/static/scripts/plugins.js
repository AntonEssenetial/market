// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[ length ];

        // Only stub undefined methods.
        if (!console[ method ]) {
            console[ method ] = noop;
        }
    }
}());


// Собираем все нужные плагины в нужном порядке

//////////////////////////////////////////////////////////////////////////////
// Important plugins
//////////////////////////////////////////////////////////////////////////////


// JQuery
// Browser feature detection library for HTML5/CSS3
//= require jquery/dist/jquery.js


// FastclickJS
// Remove delay between a physical tap and the firing of a click event on mobile browsers.
//= require fastclick/lib/fastclick.js


// Helpers
//= require helpers/jquery.isset.js
//= require helpers/jquery.easing-1.3.js


// SVG4Everybody
//= require svg4everybody/dist/svg4everybody.js


// Remodal
// Css modal windows
// ---------------------------------------------------------------------------
//= require remodal/dist/remodal.js


//////////////////////////////////////////////////////////////////////////////
// Optionals plugins
//////////////////////////////////////////////////////////////////////////////

// Tabs
// ---------------------------------------------------------------------------
//= require tabs/tabs.js


// Navgoco
// ---------------------------------------------------------------------------
//= require navgoco/jquery.navgoco.min.js


// Slick
// ---------------------------------------------------------------------------
//= require slick/slick.min.js


// Rating
// ---------------------------------------------------------------------------
//= require rating/jquery.star-rating-svg.min.js


// Nicescroll
// ---------------------------------------------------------------------------
//= require nicescroll/jquery.nicescroll.min.js


// Sticky
// ---------------------------------------------------------------------------
//= require sticky/jquery.sticky.js


// Modernizr
// ---------------------------------------------------------------------------
//= require modernizr/modernizr.js


// From styler
// ---------------------------------------------------------------------------
//= require formstyler/jquery.formstyler.min.js
