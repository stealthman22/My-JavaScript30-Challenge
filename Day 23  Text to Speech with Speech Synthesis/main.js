const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

// Set text on page load as default
msg.text = document.querySelector('[name="text"]').value;

function populateVoices() {

    voices = speechSynthesis.getVoices();
    const voiceOptions = voices
        .filter(voice => voice.lang.includes('en'))
        .map(voice => `<option value="${voice.name}"> ${voice.name} ${(voice.lang)} </option>`).join('');
    voicesDropdown.innerHTML = voiceOptions;
}

// To change voices from the default
function setVoice() {
    msg.voice = voices.find(voice => voice.name === this.value);
    toggle();
    console.log(this.value);
}

// To retart speech when language is changed
function toggle(startOver = true) {
    // Cancel current speech
    speechSynthesis.cancel();
    if (startOver) {
        speechSynthesis.speak(msg);
    }
}

function setOption() {
    console.log(this.name, this.value);
    msg[this.name] = this.value;
    toggle();
}

// Add event listener
speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
options.forEach(option => option.addEventListener('change', setOption));
speakButton.addEventListener('click', toggle);

// Passing an argument to a function 1
/* stopButton.addEventListener('click', function () {
    toggle(false);
}) */
//  Passing an argument to a function 2
/* stopButton.addEventListener('click', function () {
    toggle.bind(null, false);
}) */

// Passing an argument to a function 3
stopButton.addEventListener('click', () => toggle(false));


/*
1. Select all relevant nodelists.

2. Set text on page load as default.

3. Populate all voices using speechSynthesis

4. Listen for the event 'voiceschanged' on speechSynthesis,

5.Map over all the provided voices and set them as options in the voices dropdown. (name and language...some have the language attached to the name by default). You can filter for any language you want using .filter and .includes

6. Set innerHTML of voice dropdown to the current value of voices

7. Create a function to allow changing of the voices, and listen for a 'change' event.
For this to work we need to find the corresponding speechSynthesis voice object (i.e it's this.value);

8. We loop over all voice types using the find method,and find the selected voice name and set it to the this.value.nd then recall the play state on it (speechSynthesis.speak)

// Now we have to restart when voice is changed
9. Create toggle function, Set cancel on the speech synthesis, and then call toggle from within set voice.

10. Set a flag (start over) incase you do not want it to restart.

11. Listen for a change event on the options, so as to be able to use the controls set, and update the text area.

12. Now set a fuction that (setOption), that binds the values changed to equal the speechSynthesisUtterance, and call toggle on it.

13. Hook the start button to an event listener and run toggle to start the speech synthesis.

14.
*/