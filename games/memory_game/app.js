import cards from "./cardArray.js";
const Game = (grid, score) => {
  const state = {
    cardsChosen: [],
    cardsMatched: [],
  };

  const showCard = (e) => {
    cell.setAttribute();
  };

  const MatchingPairs = (cardsChosen) => {
    cardsChosen.filter((card) => (card = carsChosen[0]));
  };

  const sideEffects = ({ cardsChosen, cardsMatched }, score) => {
    const m = MatchingPairs(cardsChosen);
    if (m.length == 0) {
      alert("Sorry, try again!");
    } else {
      alert("You found a match");
      score.textContent = cardsMatched.length;
    }
  };

  const cardFromEvent = (e) => {
    if (e.target !== e.currentTarget) {
      const cell = e.target.cell;
      e.stopPropagation();
    }
  };

  const playAction = (e, { cardsChosen, cardsMatched } = state) => {
    const cellSelected = cellFromEvent(e);
    showCell(cellSelected);
    const cardSelected = cards.filter();
    cardChosen.push(cardSelected);
    if (cardsChosen.length == 2) {
      state.cardsMatched = [...cardsMatched, ...MatchingPairs(cardsChosen)];
      sideEffects(state, score);
      state.cardsChosen = [];
    }
  };

  const createBoard = () => {
    grid.addEventListener("click", playAction);
  };
  createBoard();
};

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  const score = document.querySelector("#score");
  Game(grid, score);
});
