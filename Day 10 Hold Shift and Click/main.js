//Will always show you keycode values.
/* 
document.addEventListener("keydown", (e) => {
    console.log(e.which);
}); */


// My first js code that actually worked somehow.
/* const checked = document.querySelector('input:checked');
const items = document.querySelectorAll('.item')

function show(checked) {

    if (checked = true) {
        console.log('Yes');
    } else {
        console.log('no')
    }


}


function checkBetween() {

}

document.addEventListener('click', show); */


// Grabs all checkboxes
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');


let lastChecked; // assining to the item initially checked.
// Initializing variables (not adding values, sets them as a container, but empty, meaning they can keep changing. hence we neveer initialize with const.)

// Handles ALL that happens on the click event.
function handleCheck(e) {
    // Check if they had the shift key down.
    //And check that they are checking it.

    let inBetween = false // Evaluates when you are inbetween  two checks
    if (e.shiftKey && this.checked) {
        // Run the main function
        // Loop over every single checkbox.
        checkboxes.forEach(checkbox => {
            console.log(checkbox);

            // This conditional sets and  evaluates the value of checkbox.
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween; // Set the variable to the opposite of itself.
                console.log('What tha heck is going on!!!');
            }

            // If inbetween is true then, else no.
            if (inBetween) {
                checkbox.checked = true;
            }
        })
    }
    lastChecked = this;
}

//Loop over all to check for click, then run function
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));