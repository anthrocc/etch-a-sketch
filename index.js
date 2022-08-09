var size = 50;

// Set the size of the board
const btn = document.querySelector('#size');
btn.addEventListener('click', () => {
    alert("Button clicked");
    size = document.getElementById("slider").value;
    alert(size);
    boxes(size);
});

// Clear the board;
const btnClear = document.querySelector('#clear');
btnClear.addEventListener('click', () => {
    alert("Clear clicked");
    boxes(size);
});


boxes(size);


// Create the board
function boxes(size) {

    const container = document.getElementById('container');

    // Clear the old board layout 
    container.innerHTML = '';

    let cols = size;

    // alert("cols = " + size);

    let cellTotal = size * size;

    // alert("cellTotal = " + cellTotal);

    //container.style = 'display: grid; grid-template-columns: repeat(${cols}, 1fr); grid-template-rows: repeat(${cols}, 1fr); height: 500px; width: 500px;';

    container.style.gridTemplateRows = `repeat(${cols}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

    for (let i = 0; i < cellTotal; i++) {

        const box = document.createElement('div');
        box.classList.add('box');
        box.classList.add('grid-item');
        box.addEventListener('mouseover', (event) => { box.style.backgroundColor = 'black'; });
        box.style = 'background-color: white;';
        container.appendChild(box);
    }
}

// const buttons = document.querySelectorAll('button');
// buttons.forEach((button) => {
//     button.addEventListener('click', () => {
//         alert(button.id);
//         if (button.id == 'black') {
//             box.addEventListener('mouseover', (event) => { box.style.backgroundColor = 'black'; });
//         }
//         else {
//             box.addEventListener('mouseover', (event) => { box.style.backgroundColor = 'black'; });
//         }


//         // TODO send colorID to line 48 for the hover
//     });
// });