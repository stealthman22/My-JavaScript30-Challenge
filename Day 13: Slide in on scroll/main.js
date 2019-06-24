const sliderImages = document.querySelectorAll('.slide-in');

// Would run anytime there is a scroll
// We have to loop over every single image, and determine when it should be called.

function checkslide(e) {
    sliderImages.forEach(sliderImage => {
        // Half way through the image

        // how far on the image is the image being scrolled down
        // const slideInAt
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2; // Shows how far you are scrolled down at the bottom of the viewport.
        // We want images to start sloding when they are half way.


        // Bottom of the image
        const imageBottom = sliderImage.offsetTop + sliderImage.height;

        const isHalfShown = slideInAt > sliderImage.offsetTop;

        const isNotScrollPast = window.scrollY < imageBottom;
        console.log(isNotScrollPast);
        // OffsetTop shows the top of the image and how far it is from the top of the page.
        if (isHalfShown && isNotScrollPast) {
            sliderImage.classList.add('active');
        } else {
            sliderImage.classList.remove('active');
        }

    });
}

window.addEventListener('scroll', debounce(checkslide));






// Genral func, mostly copied.
// Debounce will run everytime on event, but the reffered function will only run when it is set to.
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}
// The wait parameter is very crucial here.



/* 
1. Why do you pass in events to functions?

2. What is the difference between the window and the document?

3. What is loadash?

4. What is innerHeight and innerHtml?

5. How does params really work, especially when they are singulars of variables.
*/