const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = []; // Boxing all raw data in an array

const prom = fetch(endpoint) // Calling a fetch returns a promise that remains pending until a .then is
    .then(blob => blob.json()) // Call a .json on it to convert the raw data to readable json 
    .then(data => cities.push(...data)); // last line returns a promise, hence you call .then against it with the new data as param. But will be nested inside another array. Hence call spread. 


// Filtering search into an array
function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        // We need to figure out if a city or state matches what is being searched.

        //return place.city.matchL(/joe/i) could work if we are searching for one consistent thing.

        const regex = new RegExp(wordToMatch, 'gi'); // A regex that finds the wordToMatch variable. THis is the only way to put a variable into a regex.
        //gi: global insensitive         
        return place.city.match(regex, ) || place.state.match(regex) // Both statements parse true.

    })
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ,');
}

function displayMatches() {
    const matchArray = findMatches(this.value, cities); // Called when value is changed
    const html = matchArray.map(place => {
        // Next line creates a regex that formats the search and highlights the typed words.
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class= 'hl'>${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class= 'hl'>${this.value}</span>`);
        return `
        <li>
        <span class='name'>${cityName }, ${stateName}</span>
        <span class='name'>${numberWithCommas(place.population)}</span>
        </li>
        `
    }).join('');
    suggestions.innerHTML = html;

    // Without .join, htis will return an array width multiple items
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);

searchInput.addEventListener('keyup', displayMatches); // Causes the intellisense to pop while you are searching. 