const divs = document.querySelectorAll('div');

const button = document.querySelector('button')


function logText(e) {
    console.log(this.classList.value);
    //console.log(this);

    //e.stopPropagation(); // Stop bubbling. 
}




// Loop through all divs and listen for a click event
divs.forEach(div => div.addEventListener('click', logText, {
    capture: false,
    once: true
}));

button.addEventListener('click', () => {
    console.log('Click!!!!!!!!')
}, {
    once: true
})

// Same thing as declaring once
//divs.removeEventListener('click', logText);


/* 
The click ripple effects happens because the browser does something called a capture (it ripples down after a click) , and then does a bubble (it ripples from down to top).

At capture, the browser is only figuring out what you want, but on bubble, it triggers the click events.

Adding a third argument to our function; Capture: true, this ensures that the function is not run on the bubble up, but on the capture down. False by default.

Stop propagation: e.stopPropagation(); This will say stop bubbling this event up, I clicked on the one that I wanted. It won't trigger events on the parents anymore.
You can wrap this in an if statement.

once: listen for a click and then unbind; It will listen for a click then unbind the event listener, causing it not to listen for future clicks.
Very useful in store checkouts.

*/