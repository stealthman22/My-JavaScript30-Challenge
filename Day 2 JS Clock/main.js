// Grabs the seconds
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


// Function to calculate the time conv from secs to degrees
function setDate() {
    const now = new Date();

    // Get seconds
    const seconds = now.getSeconds();
    console.log(seconds);
    // Change the seconds to degrees
    // Then adds 90 to remove the initial 90deg set
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    // Adding styles to second hand
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    // Get Minute
    const mins = now.getMinutes();
    console.log(mins);

    // Change the minutes to degrees
    // Then adds 90 to remove the initial 90deg set

    const minsDegrees = ((mins / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minsDegrees}deg)`;


    // Get Hour
    const hours = now.getHours();
    console.log(hours);

    // Change the minutes to degrees
    // Then adds 90 to remove the initial 90deg set

    const hrsDegrees = ((mins / 3600) * 12) + 90;
    hourHand.style.transform = `rotate(${hrsDegrees}deg)`;


}


setInterval(setDate, 1000);