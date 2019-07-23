/* S.A.A.S */

let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');



// No of seconds you want timer to be in
function timer(seconds) {
    // Clear any existing timers
    clearInterval(countdown);
    // old method const now = (new Date().getTime());
    // new static method on date (now)
    const now = Date.now();
    //convert from milisec to sec
    const then = now + seconds * 1000;
    displayTimeleft(seconds);
    displayEndTime(then);

    // display time 
    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000)
            // flag to stop interval
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        displayTimeleft(secondsLeft);

    }, 1000);

}

function displayTimeleft(seconds) {
    //    const hours = Math.floor(minutes / 60);
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor(seconds / 60);
    //const remainderMinutes = seconds % 3600;
    const remainderSeconds = seconds % 60;
    // attach func to DOM
    const display = `${hours}:${minutes }:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    timerDisplay.textContent = display;
    // attach display to title
    document.title = display;

}

// Shows the ending time

function displayEndTime(timestamp) {
    // Converted from timestamp of Date.now()
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    const localTime = hour > 12 ? hour - 12 : hour;

    endTime.textContent = `Be Back At \u{21AA} ${localTime}:${minutes < 10 ? '0' : ''}${minutes} `;

}


// Select buttons

function startTimer() {
    // Selects the time value on the data sets.
    // parseint converts the string returned to a real number.
    const click = parseInt(this.dataset.time);
    timer(click);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
// update form
document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    //this is the form cos it was the thing selected
    const mins = this.minutes.value;
    console.log(mins);
    timer(mins * 60);
    this.reset();
})


/* 
1. Create function timer


Pass the set interval into it's own variable, and use clearInteval to stop it rather than return, by passong it in;  clearInterval(countdown);



// My logic 1
   const display = `${hours}:${minutes  > 60 ? minutes : remainderMinutes }:${remainderSeconds > 9 ? remainderSeconds : '0' + remainderSeconds }`;

   my logic 2
      const display = `${hours}:${minutes  > 60 ? minutes : remainderMinutes }:${remainderSeconds < 10  ? '0' + remainderSeconds: '' + remainderSeconds }`;
*/