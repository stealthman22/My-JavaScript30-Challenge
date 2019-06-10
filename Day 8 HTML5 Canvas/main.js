const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#bada55';
ctx.lineJoin = 'round'; // what line ends should look like
ctx.lineCap = 'round' // when a line meets another
ctx.lineWidth = 50;

//globalCompositeOperation
ctx.globalCompositeOperation = 'multiply'

let isDrawing = false; // without click, dont draw.
let lastX = 0; // line start
let lastY = 0; // line end

// hsl
let hue = 0;

let direction = true;



function draw(e) {
    if (!isDrawing) return; // stop the fn from running if they are not moused down.
    console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    // Start from
    ctx.moveTo(lastX, lastY);
    // go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    // After the draw function we want to update the lastX and the lastY
    /*   lastX = e.offsetX;
      lastY = e.offsetY; */
    //or
    [lastX, lastY] = [e.offsetX, e.offsetY]; // Destructuring an array.

    // changes the hue of color.
    hue++;
    if (hue >= 360) {
        hue = 0;
    }

    if (ctx.lineWidth >= 70 || ctx.lineWidth <= 1) {
        direction = !direction;
    }

    if (direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }

}



canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    // Update the position of lastX and lastY after every mouse down.
    [lastX, lastY] = [e.offsetX, e.offsetY]
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);