const container = document.querySelector('.sketchContainer');
const reset = document.getElementById('reset');
let input = document.getElementById('color');

main();

function main(){
    input.value = 'black';
    createGrid();

    reset.addEventListener('click', function(){
        const children = document.querySelectorAll('.pixel');
        children.forEach(child => child.remove());

        let size = 0;
        let q = 0;
        do {
            q = Number(window.prompt("Enter a grid size between 0 and 65", '16'));
        }
        while(q < 1 || !Number.isInteger(q) || q > 64);

        size = q;

        createGrid(size);
    })

    input.addEventListener('change', function(){
        draw(input.value);
    })
}

function createGrid(size=16) {   
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for(let i = 0; i < size ** 2; i++){
        const divs = document.createElement('div');
        divs.className = 'pixel';
        container.appendChild(divs);
    }
    draw();
}

function draw(color='black'){
    const hovered = document.querySelectorAll('.pixel');
    hovered.forEach(pixel => {
        pixel.addEventListener('mouseover',function() {
            pixel.style.backgroundColor = color;
        })
    })
}
