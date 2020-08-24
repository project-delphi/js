import cards from "./cardArray";
const Game = (grid, score) => {
  const cardsChosen = [];
  const cardsMatched = [];

  const createBoard = () => {
    grid.addEventListener("click", revealCard);
  };

  const isMatched = () => {
    // check if the two cards match
    // for those matched, add to cardsMatched array
    // reset cardsChosen to empty array
  };

  const revealCard = (e) => {
    if (e.target !== e.currentTarget) {
      console.log(e.target);
      const cell = e.target.cell;
      e.stopPropagation();
      const card = cards.filter((card) => {
        card.name == cell.name;
      });
      cell.innerHTML = card.name;
      cardsChosen.push(card);
      if (cardsChosen.length === 2) {
        setTimeout(isMatched, 500);
      }
    }
  };
};

document.addEventListener("DOMContentLoaded", () => {
  // Create div with cell class added and number them with ids
  const grid = document.querySelector(".grid");
  const score = document.querySelector("#score");
  Game(grid, score);
});
