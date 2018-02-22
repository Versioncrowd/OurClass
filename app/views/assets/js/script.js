import sayText from './modules/sayHi.js';

console.log('Hello from script');

$(() => {

sayText('Hello World');


  var winH = $(window).height();
  uppper = $('.upper-bar').innerHeight();
  nav = $('.navbar').innerHeight();
  $('.slider,.carousel-item').height(winH - (uppper + nav));

  //# festuers shuffle active
  $('.features-work ul li').on('click', function() {
    $(this).addClass('active').siblings().removeClass('active');
    if ($(this).data('class') === 'all') {
      $('.shuffle-images .col-md').css('opacity', 1);
    } else {
      $('.shuffle-images .col-md').css('opacity', '.2');
      $($(this).data('class')).parent().css('opacity', 1)

    }
  })





});