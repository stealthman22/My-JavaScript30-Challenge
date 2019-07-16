const slider = document.querySelector('.items');
// Flag to check click state
let isDown = false;
let startx;
let scrollLeft;




// Click dowm
slider.addEventListener('mousedown', () => {
    isDown = true;
});
// Leave  container div
slider.addEventListener('mouseleave', () => {
    isDown = false;
});
// Release mouse click
slider.addEventListener('mouseup', () => {
    isDown = false;
});
//Move left or right
slider.addEventListener('mousemove', () => {
    if (!isDown) return; // stop the func from running.
    console.count(isDown);

});




/* 
1. Grab nodelists.
2. Attach necesary event listeners.
3.isDown simply means mouse down, as declared in the mouse down event.
4. for mouse move set a flag that will only work if isDown is true.
*/