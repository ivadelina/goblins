const mainSection = document.querySelector('.field1');
const newGame = document.querySelector('.newGame');
const end = Array.from(document.querySelectorAll('.end'));
newGame.addEventListener('click', start)
function start(e) {
  mainSection.classList.remove('hide');
  for(let el of end) {
    el.classList.add('disappear');
  }
}