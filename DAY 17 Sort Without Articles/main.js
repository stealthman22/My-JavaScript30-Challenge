const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];



function strip(bandName) {
    return bandName.replace(/^(a |the |an)/i, '').trim()
        // replace changes the specified characters in the regex with an empty string

    // Trim is a method thats cut away all white spaces around a string 
}
// Create an array of sorted items

// Implicit return.
const sortBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : 1);

document.querySelector('#bands').innerHTML = sortBands.map(band => `
    <li>${band}</li>
 `).join('');

console.log(sortBands);



// real fuction
/* 
const sortBands = bands.sort((a, b) => {
    
    return strip(a) > strip(b) ? 1 : -1;
});

console.log(sortBands) */


/* 
Creating parameters in functions
*/