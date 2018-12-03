$(document).ready(
  setInterval(function(){
    $('.load-more').click();
    if($('.load-more').length < 1) {
      clearInterval();
    }
  }, 300)
)

$(document).ready(function() {
  setTimeout(
    $(".ab_ninja:first").append("<p><a class='generate-random-movie' href='#'>Generate random title</a></p>")
  , 8000)
})


$(document).ready(function() {
  setTimeout(
    $('.generate-random-movie').click(function() {
      var listed = $('.lister-item');
      $(listed).addClass('inactiveTitle');
      $(listed).removeClass('activatedTitle')
        .eq([Math.floor(Math.random() * listed.length)])
        .addClass('activatedTitle');
    }), 8000)
});