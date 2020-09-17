document.addEventListener("DOMContentLoaded", () => {
  const timeLeftNode = document.querySelector("#time-left");
  const startNode = document.querySelector("#start");
  let timeLeft = 10;

  countDown = () => {
    setInterval(() => {
      timeLeft <= 0 ? clearInterval((timeLeft = 0)) : null;
      timeLeftNode.innerHTML = timeLeft;
      timeLeft--;
    }, 1000);
  };
  startNode.addEventListener("click", countDown);
});
