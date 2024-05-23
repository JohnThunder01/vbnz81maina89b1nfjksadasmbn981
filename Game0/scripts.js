const gameGrid = document.getElementById('game-grid');
const scoreDisplay = document.getElementById('score');

let grid = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
];
let score = 0;

drawGrid();
addNewTile();

function drawGrid() {
  gameGrid.innerHTML = '';
  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 4; x++) {
      const cell = document.createElement('div');
      cell.classList.add('grid-item');
      if (grid[y][x] !== 0) {
        cell.textContent = grid[y][x];
      }
      gameGrid.appendChild(cell);
    }
  }
}

function addNewTile() {
  const availablePositions = [];
  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 4; x++) {
      if (grid[y][x] === 0) {
        availablePositions.push({ x, y });
      }
    }
  }

  if (availablePositions.length > 0) {
    const randomPosition = availablePositions[Math.floor(Math.random() * availablePositions.length)];
    grid[randomPosition.y][randomPosition.x] = Math.random() < 0.9 ? 2 : 4;
    drawGrid();
  }
}

function moveUp() {
  let moved = false;
  for (let x = 0; x < 4; x++) {
    for (let y = 1; y < 4; y++) {
      if (grid[y][x] !== 0) {
        let j = y;
        while (j > 0 && grid[j - 1][x] === 0) {
          grid[j - 1][x] = grid[j][x];
          grid[j][x] = 0;
          j--;
          moved = true;
        }
        if (j > 0 && grid[j - 1][x] === grid[j][x]) {
          grid[j - 1][x] *= 2;
          grid[j][x] = 0;
          score += grid[j - 1][x];
          scoreDisplay.textContent = score;
          moved = true;
        }
      }
    }
  }
  if (moved) {
    addNewTile();
  }
}

function moveDown() {
  let moved = false;
  for (let x = 0; x < 4; x++) {
    for (let y = 2; y >= 0; y--) {
      if (grid[y][x] !== 0) {
        let j = y;
        while (j < 3 && grid[j + 1][x] === 0) {
          grid[j + 1][x] = grid[j][x];
          grid[j][x] = 0;
          j++;
          moved = true;
        }
        if (j < 3 && grid[j + 1][x] === grid[j][x]) {
          grid[j + 1][x] *= 2;
          grid[j][x] = 0;
          score += grid[j + 1][x];
          scoreDisplay.textContent = score;
          moved = true;
        }
      }
    }
  }
  if (moved) {
    addNewTile();
  }
}

function moveLeft() {
  let moved = false;
  for (let y = 0; y < 4; y++) {
    for (let x = 1; x < 4; x++) {
      if (grid[y][x] !== 0) {
        let j = x;
        while (j > 0 && grid[y][j - 1] === 0) {
          grid[y][j - 1] = grid[y][j];
          grid[y][j] = 0;
          j--;
          moved = true;
        }
        if (j > 0 && grid[y][j - 1] === grid[y][j]) {
          grid[y][j - 1] *= 2;
          grid[y][j] = 0;
          score += grid[y][j - 1];
          scoreDisplay.textContent = score;
          moved = true;
        }
      }
    }
  }
  if (moved) {
    addNewTile();
  }
}

function moveRight() {
  let moved = false;
  for (let y = 0; y < 4; y++) {
    for (let x = 2; x >= 0; x--) {
      if (grid[y][x] !== 0) {
        let j = x;
        while (j < 3 && grid[y][j + 1] === 0) {
          grid[y][j + 1] = grid[y][j];
          grid[y][j] = 0;
          j++;
          moved = true;
        }
        if (j < 3 && grid[y][j + 1] === grid[y][j]) {
          grid[y][j + 1] *= 2;
          grid[y][j] = 0;
          score += grid[y][j + 1];
          scoreDisplay.textContent = score;
          moved = true;
        }
      }
    }
  }
  if (moved) {
    addNewTile();
  }
}

document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'w':
    case 'ArrowUp':
      moveUp();
      break;
    case 's':
    case 'ArrowDown':
      moveDown();
      break;
    case 'a':
    case 'ArrowLeft':
      moveLeft();
      break;
    case 'd':
    case 'ArrowRight':
      moveRight();
      break;
  }
});