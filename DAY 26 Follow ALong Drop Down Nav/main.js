const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter() {
    this.classList.add('trigger-enter');

    // Doesn't work because when you enter into a func the value of this changes
    // But if you change to an arrow function, the value is inherited from the parent function.
    /*   setTimeout(function() {
          console.log(this);
          this.classList.add('trigger-enter-active');
      }, 150); */

    setTimeout(() => {
        // Put this in it's own if statement to remove lag.
        if (this.classList.contains('trigger-enter')) {
            this.classList.add('trigger-enter-active')
        }
    }, 150);

    // or use this method:

    /* setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150); */

    // For puppy div
    background.classList.add('open');

    // This makes the selecton of dropdown dynamic as it is onky acesed when this function is triggered.
    const dropdown = this.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();

    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left
    };
    console.log(coords);

    // Set puppy div width and height to that of the dropdowns.
    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

function handleLeave() {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    // For puppy div
    background.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));

triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));



/* 
1. Grab needed nodelists.

2. create functions to handle the two hover states.

3.Attach event listeners.

// Break problem down into two logical parts;
a. Get the content of the dropdown showing. (By adding and removing classes and allow css do the job  of opacity and display for us).

4. add the trigger-enter class

5. set timeout and add the trigger-enter-active class.

b. Figure out the sizes of the dropdowns  and  attach the puppy div to them.

6. add and remove the class .open to the puppy div (open is an empty class not declared in the style sheet, it is used here as some form of conditional)

//Figure out the exact location of the dropdowns on the page and their sizes.

7. Select the dropddowns dynamically, by grabbing them inside the functions.

8. Get the coordinates using .getBoundingClientRect.

9. Also get information about where the nav is using .getBoundingClientRect(It gives you info on absolutely where on the page an element is)

10. Figure out where are the coords for everything.

11. Grab the height and width of the dropdown, and set it to the height and width of the puppy div (wrap them in a template literal and add px to it.)

12. Grab the top and left of the dropdown and set it the transform propersty of the puppy div (background). They will be the translate x and y repectively.

13. Subtract the navCoords.top from coords.top, and subtract the navCoords.left from coords.left

14. At the set timeout function, put the trigger-enter class in an if statement, and  trigger-enter-active as the output if the condition is met. This way the baclground will always show before the dropdown content

*/