// 👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀

const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight); // puts highlight in the DOM


// Listen when someone enters a link
function highlightLink() {
    // This method gives us info on the link size and location
    const linkCoords = this.getBoundingClientRect() // This is the thing that was triggered
    console.log(linkCoords);



    const Coords = {
        // Already set
        width: linkCoords.width,
        height: linkCoords.height,
        // Important
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX
            // Switch the highlight references to linkCoords to Coords.
    };
    // To reset the dimensions of the highlight class dynamically

    //Dynamically sets the width and height property of the element to the that of the links
    highlight.style.width = `${Coords.width}px`;
    highlight.style.height = `${Coords.height}px`;
    highlight.style.transform = `translate(${linkCoords.left}px, ${Coords.top}px)`;



}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));












/* 
To properly align the highlighter, we can either get the offset of the parent, or get how far the person has scrolled down, and add that to the actual item.
*/