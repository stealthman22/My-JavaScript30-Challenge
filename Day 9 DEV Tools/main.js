const dogs = [{
    name: 'Snickers',
    age: 2
}, {
    name: 'hugo',
    age: 8
}];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('hello'); // Test code output

// Interpolated
console.log('Hello I am a %s string!34w34w23e', '&') // Interpolates whatever you have passed as the second into the first (just like ES6 backticks).

// Styled
console.log('%c I am some great text', 'font-size: 50px; color: blue;') // interpoates css styles to a target string.

// warning! 
console.warn('OOH NOOOOO!!!'); // throws an warning with a trace to where it is called

// Error :|
console.error('OOh Why!!'); // displays an error 

// Info
console.info('crocodles eat 5-4 people per year'); // Should display an info icon.


// Testing
console.assert(1 === 2, 'That is wrong!'); // Would only fire if assertion is wrong.

const p = document.querySelector('p');

console.assert(p.classList.contains('YES'), 'That is NO');

// clearing
//console.clear();

// Viewing DOM Elements
console.dir(p);

// Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`)
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old.`)
    console.log(`${dog.name} can live up to ${dog.age * 7} years old`);
    console.groupEnd(`${dog.name}`);
}); // Keeps all related info in gouped drop down menu.

// counting
console.count('joe');
console.count('joe');
console.count('joe');
console.count('joe');
console.count('Steve');
console.count('Steve')
console.count('Steve')
console.count('joe');
console.count('joe');
console.count('joe');
// Keeps a count of how many times an item has been called.

// timing
console.time('fetching data');
fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json').then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data)
    }); // Checks how long tasks take.

console.table(dogs);