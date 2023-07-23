const INITIALSIZE = 16;
let drawMode = normalMode;

const container = document.querySelector('.container');
const gridContainer = document.querySelector('.gridContainer');


function createGrid(gridSize) {
    for (let h=0; h<gridSize; h++) {    
        const gridColumn = document.createElement('div');
        gridColumn.classList.add('gridColumn');
        gridContainer.appendChild(gridColumn);           
    }       
    
    const rows = document.querySelectorAll('.gridColumn');
    rows.forEach(row => {
        for (let w=0; w <gridSize; w++) {
            const gridSquare = document.createElement('div');
            gridSquare.classList.add('gridSquare');
            row.appendChild(gridSquare);
        }
    })
    addHover(); 
}

function removeGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function gridSlider() {
    const gridSize = document.querySelector('#gridSize');
    const sizeInput = document.querySelector('#sizeInput');
    gridSize.textContent = `${sizeInput.value}x${sizeInput.value}`;
    sizeInput.addEventListener('input', (e) => {
        gridSize.textContent = `${e.target.value}x${e.target.value}`;
        removeGrid();
        createGrid(e.target.value);
    })
    
}

function resetGrid() {
    const squares = document.querySelectorAll('.gridSquare');
    squares.forEach(square => {
        square.style.backgroundColor = 'lightblue';
    })
}

function initiateReset() {
    const resetBtn = document.querySelector('#resetButton');
    resetBtn.addEventListener('click', resetGrid);
}


//Change color when hovered over
function addHover() {
    const squares = document.querySelectorAll('.gridSquare');
    squares.forEach(square => {
        square.addEventListener("mouseover", function (e) {
            e.target.style.backgroundColor = drawMode();
        })
    })
}

function rainbowButton() {
    const rainbow = document.querySelector('#rainbowButton');
    const normal = document.querySelector('#normalButton');
    rainbow.addEventListener('click', () => drawMode = rainbowMode);
    normal.addEventListener('click', () => drawMode = normalMode);
}

function rainbowMode() {
    return `rgb(${getRandomInt(256)},${getRandomInt(256)},${getRandomInt(256)})`;
}

function normalMode() {
    return 'blue';
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

createGrid(INITIALSIZE);
initiateReset();
gridSlider();
rainbowButton();
