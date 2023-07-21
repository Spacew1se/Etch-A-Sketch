let gridSize = 16;

const container = document.querySelector('.container');
const gridContainer = document.querySelector('.gridContainer');


function createGrid(gridSize) {
  
    for (let h=0; h<gridSize; h++) {    
        const gridRow = document.createElement('div');
        gridRow.classList.add('gridRow');
        gridContainer.appendChild(gridRow);           
    }       
    
    const rows = document.querySelectorAll('.gridRow');
    rows.forEach(row => {
        for (let w=0; w <gridSize; w++) {
            const gridSquare = document.createElement('div');
            gridSquare.classList.add('gridSquare');
            row.appendChild(gridSquare);
        }
    })
    
    
}

createGrid(gridSize);