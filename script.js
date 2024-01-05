const mainContainer = document.querySelector(".container");
const gridContainer = document.querySelector(".grid");

const generateGrid = (squareSize, numSquares) => {
  gridContainer.style.width = `${squareSize * numSquares}px`;
  for (let i = 0; i < numSquares; i++) {
    for (let j = 0; j < numSquares; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.style.width = `${squareSize - 2}px`;
      square.style.height = `${squareSize - 2}px`;
      gridContainer.appendChild(square);
    }
  }
};

generateGrid(30, 20);
