/* eslint-disable linebreak-style */
const boxes = Array.from(document.querySelectorAll('.box'));
const goblin = document.createElement('img');
const mainSection = document.querySelector('.field');
const looser = document.querySelector('.looser');
const newGame = document.querySelector('.newGame');
console.log(newGame)
goblin.src = 'images/goblin.png ';
goblin.classList.add('goblin');
let random;
setInterval(() => {
  let rnd;
  do {
    rnd = boxes[Math.floor(Math.random() * boxes.length)];
  } while (random === rnd);
  random = rnd;
  rnd.append(goblin);
}, 1000);
let counterYouLose = 0;
let counterYouWin = 0;
for(el of boxes) {
  el.addEventListener('click', hitGoblin);
}
function hitGoblin(e) {
  console.log(e.target.classList)
if(e.target.classList.contains('box')) {
  counterYouLose ++
  console.log(counterYouLose);
};
if(counterYouLose === 5) {
  console.log('You lose')
  counterYouLose = 0;
  counterYouWin = 0;
  mainSection.classList.add('hide');

}
if(e.target.classList.contains('goblin')) {
  counterYouWin++
  console.log(counterYouWin);
};
};

newGame.addEventListener('click', start)
function start(e) {
  mainSection.classList.remove('hide');
}