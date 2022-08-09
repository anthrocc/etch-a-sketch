const btn = document.querySelector('#btn1');
btn.addEventListener('click', () => {
    alert("Button clicked");
    boxes(5);
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
        box.style = 'background-color: white;';
        box.textContent = i + 1;
        container.appendChild(box);
    }

    // const box = document.createElement('div');
    // box.classList.add('box');
    // box.style.cssText = 'height: 200px; width: 200px; background-color: blue;';
    // container.appendChild(box);

}