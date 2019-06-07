// updating css variables with js

// Selects all input elements on page
const inputs = document.querySelectorAll('.controls input');

// Updates selected properties as they are changed.
function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

}

// Listen for a change event in each of the values of input




inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));