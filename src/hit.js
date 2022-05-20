const end = Array.from(document.querySelectorAll('.end'));
const mainSection = document.querySelector('.field1');
const boxes = Array.from(document.querySelectorAll('.box'));
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
    for(let el of end) {
      el.classList.remove('disappear'); 
    }
  }
  if(e.target.classList.contains('goblin')) {
    counterYouWin++
    console.log(counterYouWin);
  };
  };