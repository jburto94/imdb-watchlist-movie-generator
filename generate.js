// Automatically loads all of user's watchlist to their screen
(function() {
  var click = setInterval(checkBtn, 300);
  function checkBtn() {
    let loadMore = document.querySelector('.load-more');
    if(loadMore == null) {
      clearInterval(click);
    } else {
      // clicks the load more button on the screen to load titles
      loadMore.click();
    }
  }
})();

 var aside = document.querySelector('.ab_ninja');
// After 8 seconds, the link is added to the page
// 8 seconds, so that the list has loaded properly
setTimeout(
  aside.insertAdjacentHTML(
    'beforeend', 
    '<p><a href="#" class="generate-btn">Generate random title</a></p>'
  ), 
8000);

const generateRandom = () => {
  let listed = document.querySelectorAll('.lister-item');
  // Adds inactive class to all elements, hiding them
  for(let i = 0; i < listed.length; i++) {
    listed[i].classList.add('inactiveTitle');
    // Previously activated title has class removed to hide it
    if(listed[i].classList.contains('activatedTitle')) {
      listed[i].classList.remove('activatedTitle');
    }
  }
  // Chooses random title to be activated
  listed[Math.floor(Math.random() * listed.length)].classList.add('activatedTitle');
}

var generate = document.querySelector('.generate-btn');
setTimeout(generate.addEventListener('click', generateRandom), 8000);

// SetTimeouts are to let the user's page load, but the extension works best when
// user manually scrolls through list once to let items load.