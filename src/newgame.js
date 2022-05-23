/* eslint-disable linebreak-style */
const mainSection = document.querySelector('.field1');
const newGame = document.querySelector('.newGame');
const end = Array.from(document.querySelectorAll('.end'));
function start(e) {
  mainSection.classList.remove('hide');
  for (const el of end) {
    el.classList.add('disappear');
  }
}
newGame.addEventListener('click', start);
