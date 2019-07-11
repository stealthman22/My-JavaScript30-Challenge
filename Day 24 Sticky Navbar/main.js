const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;


function fixNav() {
    if (window.scrollY >= topOfNav) {
        document.body.classList.add('fixed-nav');
        // Nav height
        document.body.style.paddingTop = nav.offsetHeight + 'px';
    } else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
    }
}

window.addEventListener('scroll', fixNav);


/* 
1. Grab the Nav bar.

2. Create a function to fix it.

3. Add an event listener for the scroll event.

4. Create a nodelist that grabs the offset top of the navbar i.e how far the top of the navbar is from the top of the page.

5. Create a conditional that equates topOfNav to window.scrollY (How far we have we scrolled the page).

//  At that point the two values equal, we make the nav fixed.

6. Add a class dynamically that sets nav to fixed, and remove it when the condition is not true.

// This will affect the sizing of the nav (position fixed) as it no longer is part of the page flow.

// To corect this we need to offset the amount of padding the nav gives up once it is fixed.

7. Add a style of padding top which will equal the offset height of the nav when the condition is true, and equal 0 when it is false.

*/