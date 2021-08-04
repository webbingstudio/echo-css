/*!
 * echo.toggle.js v1.0.0
 * Perform processing on the premise of menu open / close and switching of toggle buttons.
 * 
 * Copyright 2019 WebbingStudio
 * Released under the MIT license
 * https://opensource.org/licenses/MIT
 */

;(function($){
"use strict";

var EchoToggle = window.EchoToggle || {};

EchoToggle = (function() {

    function EchoToggle(element, options) {
        var
            t = this;

        t.initials = {
            screen: 'body',
            ready_class: 'js-toggle-ready',
            open_class: 'js-toggle-open',
            close_class: 'js-toggle-close',
            wrap_class: 'js-toggle-wrap',
            active_wrap_class: 'js-toggle-active',
            default_target: '.js-toggle-target'
        };
        t.settings = $.extend({}, t.initials, options);

        t.target;
        t.sync;

        t.init(element);

        $(element).on('click', function() {
            t.run(element);
            return false;
        });
        $(t.sync).on('click', function() {
            t.run(element);
            return false;
        });
        return false;

    }

    return EchoToggle;

}());

EchoToggle.prototype.init = function(element) {
    var
        t = this;

        t.target = $(element).data('toggle-target');
        t.sync = $(element).data('toggle-sync');

        if ( t.target === undefined ) {
            t.target = t.settings.default_target;
        }
        if ( t.sync === undefined ) {
            t.sync = '';
        }

        $(t.settings.screen).addClass( t.settings.wrap_class );
        $(t.target)
            .removeClass( t.settings.open_class )
            .removeClass( t.settings.close_class )
            .addClass( t.settings.ready_class );
        $(element).attr('aria-expanded', 'false');
        $(t.sync).attr('aria-expanded', 'false');

    return false;
};

EchoToggle.prototype.run = function(element) {
    var
        t = this;

    if( ( $(element).attr('aria-expanded') ) === 'true' ) {
        $(t.target)
            .removeClass( t.settings.open_class )
            .addClass( t.settings.close_class );
        $(element).attr('aria-expanded', 'false');
        $(t.sync).attr('aria-expanded', 'false');
        $(t.settings.screen).removeClass( t.settings.active_wrap_class );
    } else {
        $(t.target)
            .removeClass( t.settings.close_class )
            .addClass( t.settings.open_class );
        $(element).attr('aria-expanded', 'true');
        $(t.sync).attr('aria-expanded', 'true');
        $(t.settings.screen).addClass( t.settings.active_wrap_class );
    }

    return false;
};

$.fn.EchoToggle = function() {
    var
        element = this,
        options = arguments[0],
        args = Array.prototype.slice.call(arguments, 1),
        i;
    for (i = 0; i < element.length; i++) {
        if (typeof options == 'object' || typeof options == 'undefined') {
            element[i].EchoToggle = new EchoToggle(element[i], options);
        }
    }
    return element;

};

$(function(){

    $('.js-toggle').EchoToggle();

});

})(jQuery);


