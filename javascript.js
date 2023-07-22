let gridSize = 64;

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
            e.target.style.backgroundColor = 'blue';
        })
    })
}

createGrid(gridSize);
addHover();
initiateReset();