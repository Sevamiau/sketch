
const container = document.querySelector('#container');
container.style.touchAction = 'none';

// console.log(container);

let isDrawing = false;

for(let i = 0; i <256; i++){
    const newDiv = document.createElement('div');
    newDiv.classList.add()
    // console.log(i+1);
    // newDiv.appendChild(
    //     document.createTextNode(i+1)
    // )

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

const dialog = document.querySelector('dialog');

function showDialog() {
    dialog.showModal();
}

function closeDialog() {
    dialog.close(); 
}

