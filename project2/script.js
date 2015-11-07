var $overlay = $('<div class="cover centerVH"><p>+</p></div>');
var imageClick = $("li a");

// Hover functionality Sh!t
imageClick.hover(function() {
   $(this).append($overlay);
}, function() {
   $overlay.remove();
});

// PopUp functionality
imageClick.click(function(e) {
   e.preventDefault();
   $popUp = $('<div class="popUp centerVH"></div>');
   var img = $($(this).children());

   $("body").append($popUp);

   $popUp.append('<img src="' + img.attr("src") + '"">', '<p>' + img.attr("alt") + ' </p>');


   $popUp.click(function() {
      $popUp.remove();
   });
});

function imageClicked(imgObj) {
   return imgObj.click(function() {return true;});
}

   