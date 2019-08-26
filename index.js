var deadline = new Date(2019,10,22,8,0,0,0).getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var t = deadline - now;
var days = Math.floor(t / (1000 * 60 * 60 * 24));
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((t % (1000 * 60)) / 1000);
$('.days').text(days);
$('.hours').text(hours);
$('.mins').text(minutes);
$('.secs').text(seconds);
}, 1000);
