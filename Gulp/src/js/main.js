//=require components/**.*

$(window).ready(function () {
  menuShow();
  filter();
});


$('.intro-list').flickity({
  //options
  cellAlign: 'left',
  contain: true,
  prevNextButtons: false,
  wrapAround: true,
  autoPlay: true
});

$('.features-items').flickity({
  // options
  cellAlign: 'left',
  contain: true,
  prevNextButtons: false,
  // wrapAround: true
});

$('.team-people').flickity({
  // options
  cellAlign: 'left',
  contain: true,
  prevNextButtons: false,
  // setGallerySize: false,
  imagesLoaded: true
  // wrapAround: true
});