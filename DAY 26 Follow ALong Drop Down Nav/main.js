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

    setTimeout(() => this.classList.add('trigger-enter-active'), 150);
    // For puppy div
    background.classList.add('open');

    // This makes the selecton of dropdown dynamic as it is onky acesed when this function is triggered.
    const dropdown = this.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();

    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width
    };
    console.log(coords);

    // Set puppy div width and height to that of the dropdowns.
    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.heigh}px`);
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

// Break prob;em down into two logical parts;
a. Get the content of the dropdown showing. (By adding and removing classes and allow css do the job for us).

4. add the trigger-enter class

5. set timeout and add the trigger-enter-active class.

b. Figure out the sizes of the dropdowns and resize and  attach the puppy div to them.

6. add and remove the class .open to the puppy div.

//Figure out the exact location of the dropdowns on the page and their sizes.

7. Select the dropddowns dynamically, by grabbing them inside the functions.

8. Get the coordinates using .getBoundingClientRect.

9. Also get information about where the nav is using .getBoundingClientRect(It gives you info on absolutely where on the page an element is)

10. Figure out where are the coords for everything

*/