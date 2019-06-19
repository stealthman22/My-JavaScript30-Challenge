// Grab the elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

const fullscreen = player.querySelector('.fullscreen');

// Build the functions
// Toggle play and pause
function togglePlay() {
    // Using turnery operator:
    //const method = video.paused ? 'play' //: 'pause';
    //video[method](); // Accessing and calling a variable, because the method name is in a sting here.
    //or
    //const method =
    // video[video.paused ? 'play' : /'pause']();
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    };
}

// We lsiten for the play/pause event rather than hook up the function.
function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚'; // We can use this here, because it is bound to the video itself.
    console.log(icon);
    toggle.textContent = icon;
}

// Fuction for the skip buttons. 
function skip() {
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip); // Parse Float converts this stringed value to a number.
}


function handleRangeUpdate() {
    video[this.name] = this.value; // I guess this hooked the name to the values, meaning it. Which are two HTML5 attributes ??.
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100; // Calculates video length in real time for the progress bar, and converts it to percent.
    progressBar.style.flexBasis = `${percent}%`;

    // Updates the progress bar in real time (manually at this stage without the timeupdate event being listened for.)

    // Without the %, the progress bar will not move at scrub.
}


// If you don't pass in e as a param, there will be an error.
function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
    // e.offsetX divides the entire width of the progress container, to determine the relative position of progress filled. (in percentage).

    //multiplying by video duration tells it the exact place in the video it should jump to .
    // video.currentTime is the current time of  the video now set to whatever time scrubTime is at.

}

function toggleFullscreen() {
    player.style.height = '100%';
    player.style.width = '100%';
    player.style.maxwidth = 'none';
    console.log('fullscreen');
}


// Hook up the event listeners
video.addEventListener('click', togglePlay); // When a click is heard on the video element, call togglePlay. 

video.addEventListener('play', updateButton); // Will listen to play/pause event on video, and change the icon.

video.addEventListener('pause', updateButton);

video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay); // Hook up play button to togglePlay;
/* 
skipButtons.forEach(button => button.addEventListener('click', skip)); */

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e) // First checks the mousedown variable, if it is true, it moves to the scrub fn, if not it returns false.    
    // We needed to pass in e because the scrub fn required the initial event of when this happened on mousemove. 
    //or:
    /* () => {
        if (mousedown) {
            scrub();
        }
    } */
);
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mousedown', () => mousedown = false);

fullscreen.addEventListener('click', toggleFullscreen);



/* 
Questions:
1. Why is selecting nodelists into variables so important in JS: and is there any other design pattern that superceeds this.

2. How does turnery operators achieve what if else statements do.

3. line 21 - 26: Do the play pause methods help toggle the state of the video.

4. How are these icons achieved (30 -33) ?

5. Why is this bound to the paused parameter.

6. How are styles and html elements created and modified in js.

7. How does parseFloat work?

8. Line 8: what exactly does the += operator do in this statement?

9. line 42 - 44: Why was the square brackets wrapped around video?

10. line 42 - 44: How  was the name property assigned to the value property?

11. Are curent time and and duration methods 46 - 50

12. Why was it important to convert the value of flex basis to % 

13. line 54 - 62: line 55 what is e.offsetX and offsetWidth.

14. What are all the built-in events that can be listened for?

15. Is it possible to build custom events?

16. Can events listeners be bound to anything?

17. How does for each really work, and what distinguishes it from other loops?

*/