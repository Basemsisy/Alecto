/* Sticky Navbar */
$(window).on('scroll', function () {
    
    "use strict";
    
    if ($(window).scrollTop()) {
        
        $('nav').addClass('black');
        
    } else {
        
        $('nav').removeClass('black');
        
    }
});
