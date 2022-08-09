const size = 5;

const btn = document.querySelector('#size');
btn.addEventListener('click', () => {
    alert("Button clicked");
    let sliderSize = document.getElementById("slider").value;
    alert(sliderSize);
    boxes(sliderSize);
});

const btnClear = document.querySelector('#clear');
btnClear.addEventListener('click', () => {
    alert("Clear clicked");
    boxes(size);
});


boxes(16);

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

    for(let i = 0; i < cellTotal; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.classList.add('grid-item');
        box.addEventListener('mouseover', (event) => { box.style.backgroundColor = 'black';});
        box.style = 'background-color: white;';
        // box.textContent = i + 1;
        container.appendChild(box);
    }

    // const box = document.createElement('div');
    // box.classList.add('box');
    // box.style.cssText = 'height: 200px; width: 200px; background-color: blue;';
    // container.appendChild(box);

}