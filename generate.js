// Automatically clicks the load-more button, allowing it scrap the full list.
$(document).ready(
  setInterval(function(){
    $('.load-more').click();
    // If all content is loaded, then button disappears and the interval is stopped
    if($('.load-more').length < 1) {
      clearInterval();
    }
  }, 300)
)

// Appends the Randomizer link on the right side of the page
$(document).ready(function() {
  setTimeout(
    $(".ab_ninja:first").append("<p><a class='generate-random-movie' href='#'>Generate random title</a></p>")
  , 8000)
})

$(document).ready(function() {
  setTimeout(
    $('.generate-random-movie').click(function() {
      var listed = $('.lister-item');
      // When the link is clicked, it removes all titles from display;
      $(listed).addClass('inactiveTitle');
      // After setting them, it sets a single, random entry to become visible.
      $(listed).removeClass('activatedTitle')
        .eq([Math.floor(Math.random() * listed.length)])
        .addClass('activatedTitle');
    }), 8000)
});