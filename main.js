$('.dp-recent__slider').slick({
    infinite: true,
    dots: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<img src="img/left.png" width="60px" class="slider-left">',
    nextArrow: '<img src="img/right.png" width="60px" class="slider-right">'
  });

          
  $('.dp_meetot__slider').slick({
    infinite: true,
    dots: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<img src="img/bleft.png" width="60px" class="dp_meetot__left">',
    nextArrow: '<img src="img/bright.png" width="60px" class="dp_meetot__right">',
    responsive: [
      {
        breakpoint: 1256,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });

    var map;
    function initMap() {
        map = new google.maps.Map(document.querySelector('.dp-map'), {
            center: {lat: 48.9215, lng: 24.70972},
            zoom: 10,
        });
     
      var image = './img/pointer.png';
      var marker = new google.maps.Marker({
          position: {lat: 48.9215, lng: 24.70972},
          map: map,
          icon: image
      });     
    }
    $('.dp-header__navi a').on('mouseover' , function() {
      $(this).css('text-decoration', 'none');
    })
    
$('.dp-header__navi a').on('click' , function() {
  $('.checkbox12').prop('checked', false);
  $(this).css('text-decoration', 'none');
})

