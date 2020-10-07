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
  $(".menu__carousel").owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    nav: false
  });

  $(".reviews__carousel").owlCarousel({
    items: 1,
    dots: false,
    nav: true,
    loop: true
  });

  $(".banner__carousel").owlCarousel({
    items: 1,
    dots: true,
    nav: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 700
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

const map = L.map('map', {
  center: [46.367920, 48.066326],
  zoom: 13,
  scrollWheelZoom: false
});

var myIcon = L.icon({
  iconUrl: 'img/icon.png',
  iconSize: [60, 60],
});

L.marker([46.400367, 48.091495], {icon: myIcon}).addTo(map).bindTooltip("Жилая, 1");
L.marker([46.355315, 48.077743], {icon: myIcon}).addTo(map).bindTooltip("Куликова 50в");
L.marker([46.333398, 48.012269], {icon: myIcon}).addTo(map).bindTooltip("Богдана Хмельницкого, 10а");

L.tileLayer.provider('Jawg.Dark', {
  accessToken: 'c61oqWrV1RRTACkEr2NzXh4veCu7O4f9Ue2fru1eAikIn0EDpOi2CECI8dERQMBQ'
}).addTo(map);


$("a.scroll-to").on("click", function(e){
  e.preventDefault();
  var anchor = $(this).attr('href');
  $('html, body').stop().animate({
    scrollTop: $(anchor).offset().top
  }, 800);
  var elements = document.querySelectorAll('.navigation__link');

  if (elements) {
    for ( var i = 0; i < elements.length; i++) {
      elements[i].classList.remove('navigation__link--active');
    }
  }
  $(this).addClass('navigation__link--active');
});

window.addEventListener('scroll', function() {
  if (pageYOffset > 70) {
    document.querySelector('header').classList.add('header--mini');
  } else if (pageYOffset < 70) {
    document.querySelector('header').classList.remove('header--mini');
  }
});
