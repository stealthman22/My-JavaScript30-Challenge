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
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')
    p.textContent = transcript;
    if (e.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
    }

    if (transcript.includes('console.log')) {
        alert('\u{1F984} \u{1F984} \u{1F984} \u{1F984} \u{1F984} \u{1F984} \u{1F984} \u{1F984}');
    }

    console.log(transcript);
});

recognition.addEventListener('end', recognition.start);

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

9. map the  array and pick the first  item that result produced 

10. Map over it again and return the transcript.

11. Then call join to join the returned strings.

12 Add another event listener for the end event, and pass the recognition.start function so it doen't stop recognizing.

13. Set the created paragraph to equal transcript.

14. Stop it from replacing older paragraphs; using an if statement thats checks for isFinal, and override preassignes value of p.

you can set alets or console messages with the .includes method
this can be hooked up to api's to trigger certain functions.
*/