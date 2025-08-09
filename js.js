const container = document.querySelector('#container');
const resizeButton = document.querySelector('#resizeButton');
const resetButton = document.querySelector('#resetButton')

let isDrawing = false;

function randomizeColor() {

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b} )`;
}

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
        square.addEventListener('pointerdown', () => {
            isDrawing = true;
            square.style.backgroundColor = randomizeColor();
        })

        square.addEventListener('pointermove', () => {
            if(!isDrawing) return;
            square.style.backgroundColor = randomizeColor();
        })

        const stop = () => {
            isDrawing = false;
        }

        container.addEventListener('pointerup', stop);

    })


}

createGrid(16)

resizeButton.addEventListener('click', () => {
    let newSize = prompt('Elegite un tamaño de grid amigo ');
    newSize = parseInt(newSize);
    // createGrid(newSize);

    if(newSize <= 100){
        createGrid(newSize);
    } else(alert('elegi un numero bien paswato'));
    
})

resetButton.addEventListener('click', () => {
    createGrid(16);
})

