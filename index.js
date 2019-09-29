var deadline = new Date("Oct 19, 2019 8:30:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var t = deadline - now;
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((t % (1000 * 60)) / 1000);
  $('.days').text(days);
  $('.hours').text(hours);
  $('.mins').text(minutes);
  $('.secs').text(seconds);
}, 1000);

$(document).find(".scroll").click(function(e) {
  var section = $(this).attr("href");
  offset = $('.navbar').outerHeight();
  $("html, body").animate({
    scrollTop: $(section).offset().top - offset
  });
});

$(window).on("load resize", function(e) {
  var $win = $(window);
  if ($win.width() < 992) {
    $('.o1').addClass('order-1');
    $('.o2').addClass('order-2');
  } else {
    $('.o1').removeClass('order-1');
    $('.o2').removeClass('order-2');
  }
});

$("input[type=radio]").click(function() {
  var $radioID = $("input[type='radio']:checked").attr('id');
  if ($radioID === "radio1") {
    $('.rb-1').removeClass('hide');
    $('.rb-2').addClass('hide');
  } else {
    $('.rb-1').addClass('hide');
    $('.rb-2').removeClass('hide');
  }
});

$('.drop').hover(function(){  
    $(this).trigger('click');
});
