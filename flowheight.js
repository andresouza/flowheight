/*
* FlowHeight v1.1
* Copyright (c) 2016 André Souza
*
* FlowHeight
* is licensed under the MIT License. Read a copy of the
* license in the LICENSE.txt file or at
* http://choosealicense.com/licenses/mit
*
*/

(function($) {
   $.fn.flowheight = function(options) {

// Establish default settings/variables
// ====================================
      var settings = $.extend({
         maximum   : 9999,
         minimum   : 1,
         maxFont   : 9999,
         minFont   : 1,
         fontRatio : 35
      }, options),

// Do the magic math
// =================
      changes = function(el) {
        var $el = $(el),
          elh = el.tagName == 'HTML' ? window.innerHeight : $el.height(),
          height = elh > settings.maximum ? settings.maximum : elh < settings.minimum ? settings.minimum : elh,
          fontBase = height / settings.fontRatio,
          fontSize = fontBase > settings.maxFont ? settings.maxFont : fontBase < settings.minFont ? settings.minFont : fontBase;
        $el.css('font-size', fontSize + 'px');
      };

// Make the magic visible
// ======================
      return this.each(function() {
      // Context for resize callback
         var that = this;
      // Make changes upon resize
         $(window).resize(function(){changes(that);});
      // Set changes on load
         changes(this);
      });
   };
}(jQuery));
