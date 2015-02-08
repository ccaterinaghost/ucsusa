// Needs latest version of jQuery to run

$(function() {
  $('body').removeClass('noscript');

  $('.toggle-btn, .close-btn').click(function() {
    toggleNav();
  });
});

function toggleNav() {
  if ($('.site-wrapper').attr('data-state') == 'slide-closed') {
    // Display Nav when closed
    $('.site-wrapper').attr('data-state', 'slide-open');
  } else {
    // Hide Nav when open
    $('.site-wrapper').attr('data-state', 'slide-closed');
  }
}

//smooth scrolling

$('a[href^="#"]').on('click', function(event) {
    var target = $( $(this).attr('href') );
    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 500);
    }
});

// use escape to close nav ... taken from https://scotch.io/tutorials/off-canvas-menus-with-css3-transitions-and-transforms

$(document).keyup(function(e) {
  if (e.keyCode == 27) {
    if ($('.site-wrapper').hasClass('slide-closed')) {
      // Assuming you used the function I made from the demo
      toggleNav();
    }
  } 
});