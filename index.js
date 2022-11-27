let container = document.querySelector('.container');
let track = document.querySelector('.track');
let card = document.querySelectorAll('.card');
// let width = container.offsetWidth / 10;
index = 0;

function prevbtn() {
  cloneBackward()
  index += 1;
  track.style.transform = "translateX(" + index * 10 + "%)";
}

function nextbtn() {
  index -= 1;
 track.style.transform = "translateX(" + index * 10 + "%)";
 cloneForward();
  
}

// window.addEventListener("resize", function () {
//   width = container.offsetWidth;
// });



let cloneCount = -1;

function cloneForward() {
  cloneCount += 1;
  if (cloneCount === card.length) {
    cloneCount = 0;
  }
  track.append(card[cloneCount].cloneNode(true));

}

let backwardCount = card.length;

function cloneBackward() {
  
  backwardCount -= 1;
  if (backwardCount === -1) {
    backwardCount = card.length - 1;
  }
  track.prepend(card[backwardCount].cloneNode(true));
  index -= 1;
  track.style.transform = "translateX(" + index * 10 + "%)";

}
