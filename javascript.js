const INITIALSIZE = 16;
const BGCOLOR = 'rgb(255, 255, 255)';
const FILLCOLOR = 'rgb(0, 0, 0)';

let drawMode = normalMode;


const wrapper = document.querySelector('.wrapper');
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
            gridSquare.style.backgroundColor = BGCOLOR;
            row.appendChild(gridSquare);
        }
    })
    addHoverEffect(); 
}

function removeGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function resetGrid() {
    const squares = document.querySelectorAll('.gridSquare');
    squares.forEach(square => {
        square.style.backgroundColor = BGCOLOR;
    })
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

function addHoverEffect() {
    const squares = document.querySelectorAll('.gridSquare');
    squares.forEach(square => {
        square.addEventListener("mouseover", function (e) {
            e.target.style.backgroundColor = drawMode(e);
        })
    })
}

function initButtons() {
    const resetBtn = document.querySelector('#resetButton');
    const rainbow = document.querySelector('#rainbowButton');
    const normal = document.querySelector('#normalButton');
    const eraser = document.querySelector('#eraserButton');
    const shading = document.querySelector('#shadingButton');
    resetBtn.addEventListener('click', resetGrid);
    rainbow.addEventListener('click', () => drawMode = rainbowMode);
    normal.addEventListener('click', () => drawMode = normalMode);
    eraser.addEventListener('click', () => drawMode = eraserMode);
    shading.addEventListener('click', () => drawMode = shadingMode);
}

function rainbowMode() {
    return `rgb(${getRandomInt(256)},${getRandomInt(256)},${getRandomInt(256)})`;
}

function normalMode() {
    return FILLCOLOR;
}

function eraserMode() {
    return BGCOLOR;
}

//If the current color lacks an alpha (opacity) value, and is not already completely black
//Change the color to black at 10% opacity
//If an alpha value is present increase it by 10%
function shadingMode(e) {
    let currentColor = e.target.style.backgroundColor;
    let newColor = 'rgba(0, 0, 0, 0.1)';

    if (currentColor.slice(3, 4) !== 'a' && currentColor !== 'rgb(0, 0, 0)') {
        return newColor;
    }
    else {
        let currentAlpha = parseFloat(currentColor.slice(-4, -1));
        currentAlpha += 0.1;
        newColor = currentColor.slice(0,-4) + currentAlpha.toFixed(1) + ')';
    }
    return newColor;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

createGrid(INITIALSIZE);
gridSlider();
initButtons();
