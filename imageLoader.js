$('.contentIntro').imagesLoaded( { background: true }, function() {
    console.log('#container background image loaded');
    $('#loadScreen').addClass('invisible');
    $('.scrollDownNotification').removeClass('invisible').addClass('scrollDownAnimation');
  });