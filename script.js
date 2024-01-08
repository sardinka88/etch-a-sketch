// define DOM elements
const mainContainer = document.querySelector(".container");
const gridContainer = document.querySelector(".grid");
const colorSelector = document.querySelector("#color");
const sizeSelector = document.querySelector("#grid-size");
const confirmSizeButton = document.querySelector(".select-grid-size");
const selectColorButton = document.querySelector(".select-color");
const resetButton = document.querySelector(".reset");
let grid;
let color = "";

let gridSize = 30;
const setGridSize = (size) => {
  gridSize = size;
  console.log(`Size set to ${size} x ${size}`);
}

const resetGrid = () => {
  gridContainer.innerHTML = "";
}

const setColor = (newColor) => {
  color = newColor;
  console.log('Color set');
}


// define a function that creates a grid of X by X squares
const generateGrid = (numSquares = 30) => {
  const squareSize = 960 / numSquares;
  resetGrid();
  for (let i = 0; i < numSquares; i++) {
    for (let j = 0; j < numSquares; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.style.width = `${squareSize - 2}px`; //subtract border width
      square.style.height = `${squareSize - 2}px`; //subtract border width
      gridContainer.appendChild(square);
    }
  }
  grid = document.querySelectorAll(".square");
  console.log(`Generated grid`);
  grid.forEach((square) => square.addEventListener("mouseover", setActive));
};

confirmSizeButton.addEventListener('click', () => setGridSize(sizeSelector.value));
confirmSizeButton.addEventListener('click', () => generateGrid(gridSize));

selectColorButton.addEventListener('click', ()=> setColor(colorSelector.value));

resetButton.addEventListener("click", () =>{
  gridSize = 0;
  color = '';
  colorSelector.value = "#000000";
  sizeSelector.value = 0;
  gridContainer.innerHTML = "";
})


// Event Handling

// track if mouse is clicked
let isMouseClicked = false;

gridContainer.addEventListener("click", () => {
  if (isMouseClicked === false) isMouseClicked = true;
  else isMouseClicked = false;
});

// if mouse is pressed down - apply the active class to a square
const setActive = (event) => {
  if (isMouseClicked) {
    event.target.classList.add("active");
    event.target.style.backgroundColor = color;
  }
};

// add mouseover event listener to all squares - sets the active class ONLY
// if mouse is pressed down
// grid.forEach((square) => square.addEventListener("mouseover", setActive));
