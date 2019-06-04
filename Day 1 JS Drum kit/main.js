// Listen for a key event


function playSound(e) {

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return; // Stops function from running all together.

    audio.currentTime = 0; //rewind to the start

    audio.play();

    // add the class of playing 
    key.classList.add('playing');
    //key.classList.remove
    //key.classList.toggle

}


function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip if it is not a transform.

    this.classList.remove('playing');

}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);