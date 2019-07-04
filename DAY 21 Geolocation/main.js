const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition(data => {
    console.log(data);
    speed.textContent = data.coords.speed // You can math.round this result.
    arrow.style.transform = `rotate(${data.coords.heading}deg)`; //rotate the arrow depending on the number of degrees related  north 
    // Success callback.
}, (err) => {
    console.err(err);
    alert('HEY WE NEED ACCESS TO HELP YOU GET UNLOST \u{1F622}!! ')
});