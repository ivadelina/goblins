/* eslint-disable linebreak-style */
const boxes = Array.from(document.querySelectorAll('.box'));
const goblin = document.createElement('img');
goblin.src = 'images/goblin.png';
let random;
setInterval(() => {
  let rnd;
  do {
    rnd = boxes[Math.floor(Math.random() * boxes.length)];
  } while (random === rnd);
  random = rnd;
  rnd.append(goblin);
}, 1500);
