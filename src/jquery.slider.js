$.fn.mySlider = function(config) {
    config = $.extend({}, $.fn.mySlider.defaults, config);
    return this.each(function() {
        var el = $(this);
        el.html(function() {
            var words = el.css({}, );
        });
    });
};

$.fn.mySlider.defaults = {
    tag: '<input>',
    'class': 'range'
};