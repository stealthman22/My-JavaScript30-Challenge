// S.A.A.S

const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');


function handlePlayback(e) {

    const y = e.pageY - this.offsetTop;
    const percent = y / this.offsetHeight;
    const min = 0.4;
    const max = 4;
    const height = Math.round(percent * 100) + '%';
    // To update the number inside the speed bar on mouse move.
    // This finction offsets minimum value to equal min, and same for max.
    const playback = percent * (max - min) + min;
    bar.style.height = height;
    bar.textContent = playback.toFixed(2) + 'x';
    video.playbackRate = playback;
    console.log(playback);
    console.log(height);
}


speed.addEventListener('mousemove', handlePlayback);



/* 
1. First select necessary nodelists.

2. build the update for visuals and functionality of the speed div.

3. We have to figure out where the speed bar will be 0 and where it will be full height.

4. To do this we grab event.pageY (y axis), and subtract the offsetTop from it (bind the offsetTop to this, so it will refer to the speed div itself).

N.B: offsetTop means if anything is taking the absolute top of that ekement e.g a navbar, some padding.

5. Turn the value of Y to a percentage; const percent = y / this.offsetHeight;

6.set min and max variables that declare the speed of play.

7. create height variable and convert percent var to actual percent with Math.round  const height = Math.round(percent * 100) + '%';

8. Now we need some maths that will set the minimum play rate to equal the value of the min var and the maximum to the value of the max var.

9. Set the height of the speed bar to equal the height variable ; bar.style.height = height; (Now it will begin sliding.).

10. Set the textContent of speed bar to equal the playbackRate, then call to fix on it to format the output; var; bar.textContent = playbackRate.toFixed(2).
*/