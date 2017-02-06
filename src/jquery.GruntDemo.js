/*
 * GruntDemo
 * https://github.com/starwayshi/GruntDemo
 *
 * Copyright (c) 2017 starway
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.GruntDemo = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.GruntDemo = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.GruntDemo.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.GruntDemo.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].GruntDemo = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
