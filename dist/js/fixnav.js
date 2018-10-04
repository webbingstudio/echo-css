/*!
 * echo.fixnav.js v1.0.0
 * Give a class to fix the element at any scroll position.
 * 
 * Copyright 2018 WebbingStudio
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 */

;(function($){
"use strict";

var EchoFixNav = window.EchoFixNav || {};

EchoFixNav = (function() {

    function EchoFixNav(element, options) {
        var
            t = this;

        t.initials = {
            et: 0
        };
        t.settings = $.extend({}, t.initials, options);

        t.init(element);
        t.run(element);

        window.onscroll = function() {
            t.run(element);
        };
        return false;

    }

    return EchoFixNav;

}());

EchoFixNav.prototype.init = function(element) {
    var
        t = this;

    t.et = $(element).position().top;
    return false;
};

EchoFixNav.prototype.run = function(element) {
    var
        t = this,
        st;

    st = $(window).scrollTop();
    if (st > t.et) {
        $(element).addClass('is-fixnav-on');
    } else {
        $(element).removeClass('is-fixnav-on');
    }

    return false;
};

$.fn.EchoFixNav = function() {
    var
        element = this,
        options = arguments[0],
        args = Array.prototype.slice.call(arguments, 1),
        i;
    for (i = 0; i < element.length; i++) {
        if (typeof options == 'object' || typeof options == 'undefined') {
            element[i].EchoFixNav = new EchoFixNav(element[i], options);
        }
    }
    return element;

};

$(function(){

    $('.js-fixnav').EchoFixNav();

});

})(jQuery);


