// Grab speechRecognition varaible and set chrome
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// Create a new instance of speech recognition
const recognition = new SpeechRecognition();
recognition.interimResults = true;

// Create a new paragraph
let p = document.createElement('p');
const words = document.querySelector('.words');
// put p inside words.
words.appendChild(p);

// add event listener
recognition.addEventListener('result', e => {
    console.log(e.results);
    /* const transcript = Array.from(e.results)
        .map(result => result[0]) */
});

// begin the recognition.
recognition.start();










/* 
1. Declare the speechRecognition global variable.

2. Begin a new instance of speech recognition. (the recognition variable seems to be called a module)

3. Set intervalResults to be true; this allows for instant population as you are speaking (else you need to stop speaking before the text space will be populated).

4. Create a paragraph.

5. Grab the container element with class words.

6. Append the created paragraph to it.

7. Add event listener, console.log it to see the type of data being produced by speechRecognition.

8. Convert this result into an array.

9. map the first  item that result produced 
*/