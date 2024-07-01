// NAVIGATION
$(document).ready(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $('.topNavContainer').addClass('scrolled');
    } else {
      $('.topNavContainer').removeClass('scrolled');
    }
  });
});

// FAQ Accordion Cards
$(document).ready(function() {
  $('.faq-accordion').click(function() {
    $(this).toggleClass('active');
    
    // $('.faq-accordion').not($(this)).find('.faq-accordionDropdown').removeClass('active');
  });
});
