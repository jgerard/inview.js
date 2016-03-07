inview.js jQuery plugin
=======================

A tiny plugin that returns the percentage of an element in view. Useful
when you want to trigger effects depending on what's visible to the user.

The percentage is a decimal value between 0 and 1, where 1 is fully in view (i.e. 100%).
Once loaded, inview is callable on any element.

    $('.my-element').inview();

Installation
------------

Include this plugin after jQuery is loaded.

```html
    <script src="jquery.min.js"></script>
    ...
    <script src="jquery.inview.min.js"></script>
```

Usage
-----

A common place to use inview is within the window scroll event.

```js
$(window).scroll(function() {
    var el = $('.my-element');
    var percentage = el.inview(); // returns a value between 0 and 1

    // If more than 40% visible, add the class 'in-view'
    // otherwise remove.
    if (percentage > 0.4) {
        el.addClass("in-view"); 
    } else {
        el.removeClass("in-view"); 
    }
}
```