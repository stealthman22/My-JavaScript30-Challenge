const pressed = [];
const secretCode = 'wesbos';


window.addEventListener('keyup', (e) => {
        console.log(e.key);
        pressed.push(e.key);
        pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

        if (pressed.join('').includes(secretCode)) {
            console.log('WTF');
        };
        cornfy_add()
        console.log(pressed);
    }) // Thia is more or less a keylogger.