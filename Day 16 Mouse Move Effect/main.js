const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');

const walk = 300; // 100px

function shadow(e) {
    /* 
        const width = hero.offsetWidth;
        const height = hero.offsetHeight; */

    // Or use destructuring syntax
    const {
        offsetWidth: width,
        offsetHeight: height
    } = hero;
    let {
        offsetX: x,
        offsetY: y // help get the position where your cursor is at, during an event.
    } = e;

    //console.log(x, y); // Shows 0 when close to the h1 elements tip because :
    // Even tho we are listening for the mousemove event, 
    //if we have  chidren in this element, and hover over them, it eill still show the xy gor the parent.


    console.log(this, e.target); // if these things are not the same, then:
    // This stops the value from returning back to 0.
    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    console.log(x, y);

    // Next how far should the text shadow go?
    const xwalk = Math.round(x / width * walk) - (walk / 2);
    const ywalk = Math.round(y / height * walk) - (walk / 2);
    // Means if 100 is as high as we go, 0 is not as low as we will go. if 100 is our walk 50 is as high as we go, and -50 is as low as we go.

    console.log(xwalk, ywalk);

    // adding multiple colors
    // -1 to make it go the opposite direction. 
    text.style.textShadow = `
        ${xwalk}px ${ywalk}px 0 rgba(255, 0, 255, 0.7),
             ${xwalk * -1}px ${ywalk}px 0 rgba(0, 0, 255, 0.7),
            ${ywalk }px ${xwalk* -1}px 0 rgba(0, 200, 255, 0.7),
               ${ywalk * -1}px ${xwalk}px 0 rgba(0, 119, 255, 0.7)
        `;
}


hero.addEventListener('mousemove', shadow);