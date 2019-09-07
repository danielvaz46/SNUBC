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

if ($(document).outerWidth() > 768) {
  offset = $('.navbar').outerHeight() - 10;
} else {
  offset = $('.navbar').outerHeight();
}

$(document).find("a").click(function(e) {
  e.preventDefault();
  var section = $(this).attr("href");
  $("html, body").animate({
    scrollTop: $(section).offset().top - offset
  });
});
