import './styles/main.scss';

const menu = document.querySelector('.header__navigation');
const menuBtn = document.querySelector('.header__nav-btn');
const btnSvg = document.querySelector('.ham1');

menuBtn.addEventListener('click', function () {
  menu.classList.toggle('header__navigation--show');
  menuBtn.classList.toggle('header__nav-btn--active');
  btnSvg.classList.toggle('active');
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true
  });
});

$(document).ready(function() {
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('title') + '<small>Шашлычный мир</small>';
      }
    }
  });
});
