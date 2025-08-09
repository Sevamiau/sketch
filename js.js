const container = document.querySelector('#container');
const resizeButton = document.querySelector('#resizeButton');

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
            // container.realeasePointerCapture(e.pointerId);
        }

        container.addEventListener('pointerup', stop);
        // container.appendChild(squares);

    })


    // for(let i = 0; i <size * size; i++){
//     const newDiv = document.createElement('div');
//     newDiv.classList.add()
 
//     newDiv.addEventListener('pointerdown', (e) => {
//         console.log(e);
//         isDrawing = true;
//         newDiv.style.backgroundColor = 'pink';

//     })

//     newDiv.addEventListener('pointermove', (e) => {
//         if(!isDrawing) return;
//         isDrawing = true;
//         newDiv.style.backgroundColor = 'pink';

//     })

//     const stop = (e) => {
//         isDrawing = false;
//         container.releasePointerCapture(e.pointerId);
//     }

//     container.addEventListener('pointerup', stop);
//     container.appendChild(newDiv);
// }



}

createGrid(16)

resizeButton.addEventListener('click', () => {
    let newSize = prompt('Elegite un tamaño de grid amigo ');
    newSize = parseInt(newSize);
    createGrid(newSize);
    
});







// const container = document.querySelector('#container');
// const resizeButton = document.querySelector('#resizeButton');

// let isDrawing = false;

// let size = 16;

// for(let i = 0; i <size * size; i++){
//     const newDiv = document.createElement('div');
//     newDiv.classList.add()
 
//     newDiv.addEventListener('pointerdown', (e) => {
//         console.log(e);
//         isDrawing = true;
//         newDiv.style.backgroundColor = 'pink';

//     })

//     newDiv.addEventListener('pointermove', (e) => {
//         if(!isDrawing) return;
//         isDrawing = true;
//         newDiv.style.backgroundColor = 'pink';

//     })

//     const stop = (e) => {
//         isDrawing = false;
//         container.releasePointerCapture(e.pointerId);
//     }

//     container.addEventListener('pointerup', stop);
//     container.appendChild(newDiv);
// }


// resizeButton.addEventListener('click', () => {
//     // alert('miau');
//     let newSize = prompt("elegite el numero pal grid amigo (maximo 100):");
//     newSize = parseInt(newSize);
//     size = newSize;

// });

// // function resizeGrid(){
// //     const inputElement = document.getElementById('grid-size');
// //     alert(inputElement.value);

// // }




// // resizeButton.addEventListener("click", () => {
// // //   let newSize = prompt("elegite el numero pal grid amigo (maximo 100):");
// // //   newSize = parseInt(newSize);
// //     alert('miau');

// // });


