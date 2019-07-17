const slider = document.querySelector('.items');
// Flag to check click state
let isDown = false;
let startx;
// where the initial scroll was when we started it.
let scrollLeft;




// Click dowm
slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startx = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

// Leave  container div
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});
// Release mouse click
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});
//Move left or right
slider.addEventListener('mousemove', (e) => {
    if (!isDown) return; // stop the func from running.
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;

    // Wrap log arguments in an obj to see their properties and values.
    //console.log({ startx, x });
    // tells us how far we have deviated from the initial click
    //const walk = x - startx;
    //or to jump x number of divs;
    const walk = (x - startx) * 3;
    console.log(walk);
    // Changes the div to scroll.
    // Won't worl cos we are recalculating the scrollx everytime. 
    //slider.scrollLeft = walk;
    // correct way;
    slider.scrollLeft = scrollLeft - walk;

});




/* 
1. Grab nodelists.
2. Attach necesary event listeners.
3.isDown simply means mouse down, as declared in the mouse down event.
4. for mouse move set a flag that will only work if isDown is true.
5. Add class active to mouse down and remove it for mouse move or mouse leave.

// When we click, we want to remember the anchor point i.e where exactly we clicked initially; for this we use the startx varianble

6. Pass e into the mousedown func. and log out e.pagex (this  method tells us exactly the x coordinates on the page.)

7. But to find out where in a container element was clicked; startx = e.pageX - slider.offsetLeft;    i.e we are subtracting the offsetLeft (x axis) of that containing element from the pagex.

8. Figure out where the initial scroll was when we started it. do this by attaching the scrollLeft property on slider, and house it in the scrollLeft variable.

9.  e.preventDefault();to prevent any accidental text or content selection when clicking and dragging

10. Figure out where the cursor is when they moved it; const x = e.pageX - slider.offsetLeft; in this func, this will recalculate startx whenever there is a move event.

11.  const walk = x - startx calulates the amount of deviation from the initial click.

12.    slider.scrollLeft = scrollLeft - walk; setting this value, allow for smooth scrolling. 
just setting it to walk isnt right bacause, the value of walk will be recalculated each time

*/



/* 
why do we pass in event to a function.
why could we log startx in the mousemove func , shouldn't local scope block it.
*/