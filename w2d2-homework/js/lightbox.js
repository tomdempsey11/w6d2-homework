$(document).ready(function(){
    // When an image inside the photo grid is clicked:
    $('.photo-grid img').on('click', function(){
      var imgSrc = $(this).attr('src');            // Get the source of the clicked image
      $('#lightbox img').attr('src', imgSrc);        // Set the Lightbox image source
      $('#lightbox').css('display', 'flex').hide().fadeIn();  // Set display to flex then fade in
    });
    
    // When the close button is clicked, hide the Lightbox
    $('#lightbox .close').on('click', function(){
      $('#lightbox').fadeOut();
    });
    
    // Also, if the user clicks anywhere on the overlay outside the image container, close the Lightbox
    $('#lightbox').on('click', function(e){
      if ($(e.target).is('#lightbox')) {
        $('#lightbox').fadeOut();
      }
    });
});

  