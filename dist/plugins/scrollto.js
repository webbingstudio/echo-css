/*!
 * echo.scrollTo.js v1.0.0
 * Scroll smoothly to the position that considers the navigation fixed at the top of the screen.
 * 
 * Copyright 2018 WebbingStudio
 * Released under the MIT license
 * https://opensource.org/licenses/MIT
 */

;(function($){
"use strict";

var EchoScrollTo = window.EchoScrollTo || {};

EchoScrollTo = (function() {

    function EchoScrollTo(element, options) {
        var
            t = this;

        t.initials = {
            margin: 0,
            margin_off: 0,
            margin_extend: 0,
            speed: 300
        };
        t.settings = $.extend({}, t.initials, options);

        t.init(element);

        $(element).on('click', function() {
            t.run(element);
            return false;
        });
        return false;

    }

    return EchoScrollTo;

}());

EchoScrollTo.prototype.init = function(element) {
    var
        t = this;

    return false;
};

EchoScrollTo.prototype.run = function(element) {
    var
        t = this,
        href,
        target,
        wt,
        tt,
        ss;

    href = element.hash;
    target = $(href == '#top' ? 'body' : href);

    if(target.size()){
        wt = $(window).scrollTop();
        tt = parseFloat(target.offset().top, 10) - parseFloat(t.settings.margin, 10);
        if(wt < t.settings.margin_off) {
            tt -= parseFloat(t.settings.margin_extend, 10);
        }

        // If the moving distance exceeds 2000px, increase scroll time
        ss = t.settings.speed;
        if( Math.abs(wt - tt) > 2000 ) {
            ss = ( Math.abs(wt - tt) / 2000 ) / 1.5 * ss;
        }

        $('html, body').animate({
            scrollTop: tt
            }, ss, 'swing');
    }
    return false;
};

$.fn.EchoScrollTo = function() {
    var
        element = this,
        options = arguments[0],
        args = Array.prototype.slice.call(arguments, 1),
        i;
    for (i = 0; i < element.length; i++) {
        if (typeof options == 'object' || typeof options == 'undefined') {
            element[i].EchoScrollTo = new EchoScrollTo(element[i], options);
        }
    }
    return element;

};

$(function(){

    $('.js-scrollto').EchoScrollTo();

});

})(jQuery);


