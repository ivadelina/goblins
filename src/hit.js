/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable linebreak-style */
const end = Array.from(document.querySelectorAll('.end'));
const mainSection = document.querySelector('.field1');
const boxes = Array.from(document.querySelectorAll('.box'));
let counterYouLose = 0;
let counterYouWin = 0;

function hitGoblin(e) {
  if (e.target.classList.contains('box')) {
    counterYouLose++;
  }
  if (counterYouLose === 5) {
    counterYouLose = 0;
    counterYouWin = 0;
    mainSection.classList.add('hide');
    for (const el of end) {
      el.classList.remove('disappear');
    }
  }
  if (e.target.classList.contains('goblin')) {
    counterYouWin++;
  }
}
for (const el of boxes) {
  el.addEventListener('click', hitGoblin);
}
