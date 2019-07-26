/* S.A.A.S */

const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;


const randomTime = (min, max) => {
    // I still don't get this maths
    return Math.round(Math.random() * (max, min) + min);
}


const randomHole = holes => {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
        console.log('Ah naah thats the same hole');
        // Running a function in itself
        randomHole(holes);
    }


    lastHole = hole;
    return hole;
};

// For the moles
const peep = () => {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        // Short if 
        if (!timeUp) peep();

    }, time)

}

// Start a game
const startGame = () => {
    scoreBoard.textContent = 0;
    // Setting it again if we want to play again ?
    timeUp = false;
    score = 0;
    peep();
    /*  
    // This worked too
    setInterval(() => {
         timeUp = true;
     }, 20000); */
    // Short timeout syntax!
    setTimeout(() => timeUp = true, 20000)
}

// Hammer Mole head.
const hammer = e => {
    if (!e.isTrusted) return;
    // Increment score
    score++;
    // remove mole after a good click
    this.classList.remove('up');
    // increase score   after a good click
    scoreBoard.textContent = score;

}; // cheater!

moles.forEach(mole => mole.addEventListener('click', hammer))


/* 
1. Build function that gives us a random amount of time (sete the min and max time) using Math.random

2. Pop in a math.round for consise figures.

3. Build another function for random holes to popup.
Use the idx variable to pick random index in a nodelist.

3. Instantiate a late hole variable that holds in memory the last hole that pops up. let it equal hole.

4. Add a flag that restarts the function once last hole is hole.

5. Form a peek function for the moles popping up, Set a time and hole variable and set it to randomTime and randomHole respectively.
now add class of .up

6. Re run the peep function so the game goes on .

7. Build startGAme function and run peep in there and also set a timeout for each play session.

8. Hook timeout to start button
*/