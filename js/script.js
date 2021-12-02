/* burger-menu */
$('.burger-btn').on('click', function () {
  $('.header-nav').fadeToggle(300);
  $('.burger-btn').toggleClass('close');
  $('body').toggleClass('noscroll');
  $('.nav-item').on('click', function () {
    $('.header-nav').fadeOut(300);
    $('.burger-btn').removeClass('close');
    $('body').removeClass('noscroll');
  })
});

/* sticked-header */
$(function () {
  const $window = $(window);
  const $header = $('.header');
  const $fv = $('.fv');
  const fvHeight = $fv.outerHeight();
  const fixed = 'fixed';
  
  $window.on('load scroll', function () {
    let value = $(this).scrollTop();
       
    if (value > fvHeight) {
      $header.addClass(fixed);
    } else {
      $header.removeClass(fixed);
    };
  });

});