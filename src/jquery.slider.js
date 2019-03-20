$.fn.mySlider = function(config) {
    config = $.extend({}, $.fn.mySlider.defaults, config);
    return this.each(function() {});
};

$.fn.mySlider.defaults = {
    tag: '<input>',
    'class': 'range'
};