
const container = document.querySelector('#container');
const resizeButton = document.querySelector('#resizeButton');

let isDrawing = false;

let size = 16;

for(let i = 0; i <size * size; i++){
    const newDiv = document.createElement('div');
    newDiv.classList.add()
 
    newDiv.addEventListener('pointerdown', (e) => {
        console.log(e);
        isDrawing = true;
        newDiv.style.backgroundColor = 'pink';

    })

    newDiv.addEventListener('pointermove', (e) => {
        if(!isDrawing) return;
        isDrawing = true;
        newDiv.style.backgroundColor = 'pink';

    })

    const stop = (e) => {
        isDrawing = false;
        container.releasePointerCapture(e.pointerId);
    }

    container.addEventListener('pointerup', stop);
    container.appendChild(newDiv);
}


resizeButton.addEventListener('click', () => {
    // alert('miau');
    let newSize = prompt("elegite el numero pal grid amigo (maximo 100):");
    newSize = parseInt(newSize);

});


// function resizeGrid(){
//     const inputElement = document.getElementById('grid-size');
//     alert(inputElement.value);

// }




// resizeButton.addEventListener("click", () => {
// //   let newSize = prompt("elegite el numero pal grid amigo (maximo 100):");
// //   newSize = parseInt(newSize);
//     alert('miau');

// });