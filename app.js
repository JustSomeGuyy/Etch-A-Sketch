const container = document.querySelector("#container");
let cellSize = 20;
let gridSize = 16;
let cells = [];

function createGrid(gridSize) {
  container.style.gridTemplateColumns = `repeat(${gridSize}, ${cellSize}px)`;
  container.style.gridTemplateRows = `repeat(${gridSize}, ${cellSize}px)`;

  for (let i = 0; i < gridSize * gridSize; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.addEventListener("mouseover", changeColor);
    cells.push(cell);
    container.appendChild(cell);
  }
}

function changeColor() {
  this.style.backgroundColor = "black";
}

function clearGrid() {
  cells.forEach(cell => cell.style.backgroundColor = "white");
}

createGrid(gridSize);