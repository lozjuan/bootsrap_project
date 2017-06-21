/*tooltip contact form */
$(function() {
  $('[data-toggle="tooltip"]').tooltip()
})

/*instanciates wowjs lib*/
new WOW().init();

smoothScroll.init({
  speed: 1000, //How fast it goes
  offset: 90, //How far it goes
});

/*---------------------------------
    hides scroll up when
 ----------------------------------*/
$(function() {
  $(window).scroll(function() {
    var scrolltop = $(this).scrollTop();
    if (scrolltop >= 50) {
      $(".scroll-up").show();
    } else {
      $(".scroll-up").hide();
    }
  });
});

/* animates header*/
$(window).scroll(function() {
  var nav = $('.head');
  var scroll = $(window).scrollTop();
  if (scroll >= 80) {
    nav.addClass("navbar-background");
  } else {
    nav.removeClass("navbar-background");
  }
});
