$(document).scroll(function() {
  var y = $(this).scrollTop();

  jQuery.each(".excuses li",function(index,value){
        if (y > ($(this).offset().top * 4) ) {
            $(this).fadeIn();
          } else {
            $(this).fadeOut();
          }
  });

  
});