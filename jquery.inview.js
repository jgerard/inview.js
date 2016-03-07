
/*!
  *    inview.js jQuery Plugin 0.9.0
  *
  *    A tiny plugin that returns the percentage of an element in view.
  *    Percentage is a value between 0 and 1, where 1 is fully in view.
  *    inview is callable on any element.
  *
  *    Copyright 2015, Jason Gerard http://jasongerard.com
  *    @license Released under the MIT license.  
  */
(function($) {

    $.fn.inview = function() {

        var $t = $(this),
            $w = $(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            elemTop = $t.offset().top,
            elemBottom = elemTop + $t.height();

        // Some theory:
        // SI= Max(0, Min(XA2, XB2) - Max(XA1, XB1)) * Max(0, Min(YA2, YB2) - Max(YA1, YB1))
        // S=SA+SB-SI (union)
        // ratio will be SI / S

        if (elemTop > viewTop && elemBottom < viewBottom) {
            // 100% IN VIEW
            return 1;
        } else if (elemTop <= viewBottom || elemBottom >= viewTop) {
            // MAYBE IN VIEW
            // < 100% 
            // intersection = Math.max(0, Math.min())
            var overlapTop = Math.max(elemTop, viewTop);
            var overlapBottom = Math.min(elemBottom, viewBottom);
            var overlapHeight = 0;
            var overlapPercentage = 0;

            if (overlapBottom > overlapTop) {
                // OVERLAPPING
                // we have an intersection
                overlapHeight = overlapBottom - overlapTop;
                overlapPercentage = (overlapHeight / ((viewBottom - viewTop) + (elemBottom - elemTop) - overlapHeight));
                return overlapPercentage;
            } else {
                // DEFINITELY, NOT VISIBLE
                return 0;
            }
        } else {
            // NOTHING IS VISIBLE
            return 0;
        }

    };

})(jQuery);
