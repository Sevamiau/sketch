const container = document.querySelector('#container');
const resizeButton = document.querySelector('#resizeButton');
const resetButton = document.querySelector('#resetButton')

let isDrawing = false;

function createGrid(size) {
    container.innerHTML = '';
    const squareSize = 500 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.appendChild(square);
    
    }

    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('pointerdown', (e) => {
            isDrawing = true;
            square.style.backgroundColor = 'pink';
        })

        square.addEventListener('pointermove', (e) => {
            if(!isDrawing) return;
            square.style.backgroundColor = 'pink'
        })

        const stop = (e) => {
            isDrawing = false;
        }

        container.addEventListener('pointerup', stop);

    })


}

createGrid(16)

resizeButton.addEventListener('click', () => {
    let newSize = prompt('Elegite un tamaño de grid amigo ');
    newSize = parseInt(newSize);
    createGrid(newSize);
    
})

resetButton.addEventListener('click', () => {
    createGrid(16);
})

