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
    }) // This is more or less a keylogger.


/* 
Questions

1. What is really the window ?

2. What is the difference between window and Window

3.How exactly does splice work

4. What is the join method?

5. .lenght -1 is a widely used pattern, what does it do?
    
6. What is cornfy
*/