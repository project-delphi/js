const squareNodes = document.querySelectorAll(".square");
const countdownNode = document.querySelector("#countdown");
let scoreNode = document.querySelector("#score");
let currentTime = 60;
let scoreValue = 0;
let moleSquare;

const randomSquare = () => {
  [...squareNodes].filter((element) => {
    element.classList.remove("mole");
  });
  const randomSq = squareNodes[Math.floor(Math.random() * squareNodes.length)];
  randomSq.classList.add("mole");
  moleSquare = randomSq.id;
};

squareNodes.forEach((element) => {
  element.addEventListener("mouseup", () => {
    scoreValue += element.id === moleSquare ? 1 : 0;
    scoreNode.textContent = scoreValue;
  });
});

const moveMole = () => {
  setInterval(randomSquare, 500);
};

const countDown = () => {
  currentTime--;
  console.log(currentTime.toString());
  countdownNode.textContent = currentTime.toString();
  if (currentTime === 0) {
    clearInterval(timerId);
    alert("GAME OVER!, your final score is " + scoreValue);
  }
};

moveMole();

const timerId = setInterval(countDown, 1000);
