// define DOM elements
const mainContainer = document.querySelector(".container");
const gridContainer = document.querySelector(".grid");

// define a function that creates a grid of X by X squares
const generateGrid = (squareSize, numSquares) => {
  gridContainer.style.width = `${squareSize * numSquares}px`;
  for (let i = 0; i < numSquares; i++) {
    for (let j = 0; j < numSquares; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.style.width = `${squareSize - 2}px`; //subtract border width
      square.style.height = `${squareSize - 2}px`; //subtract border width
      gridContainer.appendChild(square);
    }
  }
};

generateGrid(20, 30);

const grid = document.querySelectorAll(".square");

// Event Handling

// track if mouse is pressed down
let isMouseClicked = false;

gridContainer.addEventListener("click", () => {
  if (isMouseClicked === false) isMouseClicked = true;
  else isMouseClicked = false;
});

// document.addEventListener("mouseup", () => {
//   isMouseDown = false;
// });

// if mouse is pressed down - apply the active class to a square
const setActive = (event) => {
  if (isMouseClicked) event.target.classList.add("active");
};

// add mouseover event listener to all squares - sets the active class ONLY
// if mouse is pressed down
grid.forEach((square) => square.addEventListener("mouseover", setActive));
