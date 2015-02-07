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

$('a[href^="#"]').on('click', function(event) {
    var target = $( $(this).attr('href') );
    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});