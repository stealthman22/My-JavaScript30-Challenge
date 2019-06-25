const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];


function addItem(e) {
    console.log('Hello')
    e.preventDefault(); // Stops page load on form update.

    // We need to create an object to put the typed text into.
    // Wrapping it around carats allows it ececute first, then .value is called against it.
    const text = (this.querySelector('[name=item')).value;
    const item = {
        text, // text: text, ES6 shothand property.
        done: false
    }
    items.push(item);
    populateList(items, itemsList); // This actually recreates/rerenders the entire list once new item is added.

    //.stringify converts results to a string so it can be read by localstorage, then .parse returns it back to the original type it was
    localStorage.setItem('items', JSON.stringify(items));
    this.reset(); // Refreshes the text field after entry has been keyed in.
}

// To add the actual html in here
// This function creates and updates list items.
function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
            <li> 
            <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} >
                <label for="item${i}">${plate.text} </label>
            </li>
        `
    }).join(''); //Will take the array .map will return here, and turn it into one big string because we are setting innerHTML.

}

function toggleDone(e) {
    // Matching events to a particular targets
    if (!e.target.matches('input')) return; // Skip this unless it's an input
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);

}


addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);


populateList(items, itemsList);