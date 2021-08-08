const container = document.querySelector('.sketchContainer');
const reset = document.getElementById('reset');
const input = document.getElementById('color');
const random = document.querySelector('.random');
const rainbow = document.querySelector('.rainbow');
// Execute the function
main();

function main(){
    input.value = 'black';
    createGrid();
    // Listen for reset button and ask the grid size
    reset.addEventListener('click', function(){
        const children = document.querySelectorAll('.pixel');
        children.forEach(child => child.remove()); // Remove the existing grid

        let size = 0;
        let q = 0;
        do {
            q = Number(window.prompt("Enter a grid size between 0 and 65", '16'));
        }
        while(q < 1 || !Number.isInteger(q) || q > 64);

        size = q;

        createGrid(size); // Create a new grid with user's desired size
    })
    // Color Picker
    input.addEventListener('change', function(){
        draw(input.value);
    })
    // Random color picker
    random.addEventListener('click', function(){
        const randomColor = generateRandomColor();
        random.style.color = randomColor;
        random.style.textShadow = `0 0 3px black, 0 0 7px ${randomColor}`;
        draw(randomColor);
    })
    // Draw random color for each pixel
    drawRainbow();
}

// Create the grid with CSS Grid
function createGrid(size=16) {   
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for(let i = 0; i < size ** 2; i++){
        const divs = document.createElement('div');
        divs.className = 'pixel';
        container.appendChild(divs);
    }
    draw();
}

// Draw on mouse hovering on grid
function draw(color){
    const hovered = document.querySelectorAll('.pixel');
    hovered.forEach(pixel => {
        pixel.addEventListener('mouseenter',function() {
            pixel.style.backgroundColor = color;
        })
    })
}

function generateRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
// Let's go colorful
function drawRainbow() {
    rainbow.addEventListener('click', function() {
        const rainbowPixel = document.querySelectorAll('.pixel');
        rainbowPixel.forEach(pixel => {
            pixel.addEventListener('mouseenter',function() {
                pixel.style.backgroundColor = generateRandomColor();
            })
        })
    })
}
