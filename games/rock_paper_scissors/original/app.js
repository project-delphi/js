let user;
let computer;
const results = () => {
  const message =
    computer === "rock" && user === "paper"
      ? "you win"
      : computer === "rock" && user === "scissors"
      ? "you lost"
      : computer === "paper" && user === "rock"
      ? "you lost"
      : computer === "paper" && user === "scissors"
      ? "you win"
      : computer === "scissors" && user === "rock"
      ? "you win"
      : computer === "scissors" && user === "paper"
      ? "you lost"
      : "you tie";
  return message;
};

var outcome = results();
const displayResult = document.getElementById("winner");
const computerChoice = document.getElementById("computer");
const userChoice = document.getElementById("user");
const possibleChoices = document.querySelectorAll(".choices");

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    user = e.target.id;
    randomComputerChoice();
    userChoice.innerHTML = `You: ${user}`;
    computerChoice.innerHTML = `Computer: ${computer}`;
    displayResult.innerHTML = `Winner: ${results()}`;
  })
);

randomComputerChoice = () => {
  const randomNumber = 1 + Math.round(3 * Math.random());
  switch (randomNumber) {
    case 1:
      computer = "rock";
      break;
    case 2:
      computer = "paper";
      break;
    case 3:
      computer = "scissors";
      break;
    default:
      "_";
  }
};
