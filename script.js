// define DOM elements
const mainContainer = document.querySelector(".container");
const gridContainer = document.querySelector(".grid");
const colorSelector = document.querySelector("#color");
const sizeSelector = document.querySelector("#grid-size");
const confirmSizeButton = document.querySelector(".select-grid-size");
const selectColorButton = document.querySelector(".select-color");
const canvasColorSelector = document.querySelector("#canvas-color");
const canvasColorButton = document.querySelector(".select-canvas-color");
const resetButton = document.querySelector(".reset");
const toggle = document.querySelector("#toggle");
let grid;
let color = "";
let canvasColor = "";

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

const setCanvasColor = (newColor) =>{
  canvasColor = newColor;
}

const getRandomColor = () => {
  return randomColor = Math.floor(Math.random() *16777215).toString(16);

}


// define a function that creates a grid of X by X squares
const generateGrid = (numSquares) => {
  const squareSize = 960 / numSquares; // calculate square size
  resetGrid(); //clean up old content
  for (let i = 0; i < numSquares; i++) {
    for (let j = 0; j < numSquares; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.style.width = `${squareSize - 2}px`; //subtract border width
      square.style.height = `${squareSize - 2}px`; //subtract border width
      square.style.backgroundColor = canvasColor;
      gridContainer.appendChild(square);
    }
  }
  grid = document.querySelectorAll(".square");
  console.log(`Generated grid`);
  grid.forEach((square) => square.addEventListener("mouseover", setActive)); // set event listeners
};


// Event Handling

// stores the square size and generates the grid accordingly
confirmSizeButton.addEventListener('click', () => setGridSize(sizeSelector.value));
confirmSizeButton.addEventListener('click', () => generateGrid(gridSize));

// stores the selected drawing color
selectColorButton.addEventListener('click', ()=> setColor(colorSelector.value));

// stores the selected canvas color
canvasColorButton.addEventListener("click", ()=> {
  setCanvasColor(canvasColorSelector.value);

});

// resets the screen
resetButton.addEventListener("click", () =>{
  gridSize = 0;
  color = '';
  colorSelector.value = "#000000";
  sizeSelector.value = 0;
  gridContainer.innerHTML = "";
})

// track if mouse is clicked
let isMouseClicked = false;

gridContainer.addEventListener("click", () => {
  if (isMouseClicked === false) isMouseClicked = true;
  else isMouseClicked = false;
});

// if mouse is pressed down - apply the active class to a square
const setActive = (event) => {
  if (isMouseClicked) {
    if(toggle.checked) {
      event.target.style.backgroundColor = `#${getRandomColor()}`;
    } else {
      event.target.classList.add("active");
      event.target.style.backgroundColor = color;
    }
  }
};

// add mouseover event listener to all squares - sets the active class ONLY
// if mouse is pressed down
// grid.forEach((square) => square.addEventListener("mouseover", setActive));
