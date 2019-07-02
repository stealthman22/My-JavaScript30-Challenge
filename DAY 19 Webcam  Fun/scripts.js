  const video = document.querySelector('.player');
  const canvas = document.querySelector('.photo');
  const ctx = canvas.getContext('2d');
  const strip = document.querySelector('.strip');
  const snap = document.querySelector('.snap');


  // How to get someone's video (Webcam)
  function getvideo() {
      navigator.mediaDevices.getUserMedia({
              video: true,
              audio: false
          }).then(localMediaStream => {

              // Video won't work unless it is converted to a URL
              video.srcObject = localMediaStream;
              video.play();
          })
          .catch(err => console.error('OOH NO!!!', err))
  }

  function paintToCanvas() {
      const width = video.videoWidth;
      const height = video.videoHeight;

      // Ensure canvas height and width properties is the same as that of video.
      canvas.width = width;
      canvas.height = height;


      return setInterval(() => {
          ctx.drawImage(video, 0, 0, width, height); // Start at the top left corners, then paint the entire space.

          // To grab the pixels out
          let pixels = ctx.getImageData(0, 0, width, height)
              // mess with their values.
          pixels = redEffect(pixels);
          //pixels = rgbSplit(pixels);

          // This writes the actual image, but still allows the ones underneath it to show through for 10 more frames.
          // Because we are putting a transparency of 10% of the current image on top and cotinously stacking
          // ctx.globalAlpha = 0.8;

          pixels = greenScreen(pixels);
          // put them back in
          ctx.putImageData(pixels, 0, 0);

      }, 16);
  }


  function takePhoto() {
      // Play  sound
      snap.currentTime = 0;
      snap.play();

      // Take the data out of the canvas
      const data = canvas.toDataURL('image/jpeg')
      console.log(data);
      // Will return a base64 i.e attributes about the photo.
      const link = document.createElement('a') // Create link
      link.href = data; // designate href to raw data
      link.setAttribute('download', 'handsome'); // set download attrib
      //link.textContent = 'Download Image'; // Create some text
      link.innerHTML = `(<img src="${data}" alt="Handsome Man">`;

      strip.insertBefore(link, strip.firstChild); //insert link before the first child of strip (jQuery.Prepend) .This is where we will dump our link

  }

  // Colour effects functions

  function redEffect(pixels) {
      for (let i = 0; i < pixels.data.length; i += 4) {
          pixels.data[i + 0] = pixels.data[i + 0] + 200; // Red
          pixel.data[i + 1] = pixels.data[i + 1] - 50; // Green
          pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
          // No logic to these values.

      }
      return pixels;
  }


  function rgbSplit(pixels) {
      for (let i = 0; i < pixels.data.length; i += 4) {
          pixels.data[i - 150] = pixels.data[i + 0]; // Red
          pixels.data[i + 300] = pixels.data[i + 1]; // Green
          pixels.data[i - 150] = pixels.data[i + 2]; // Blue
          // No logic to these values.

      }
      return pixels;
  }

  function greenScreen(pixels) {
      const levels = {}; // Wil hold our min and max red, green, blue.


      // This is the range sliders
      document.querySelectorAll('.rgb input').forEach((input) => {
          levels[input.name] = input.value;
      });
      console.log(levels);

      for (i = 0; i < pixels.data.length; i = i + 4) {
          red = pixels.data[i + 0];
          green = pixels.data[i + 1];
          blue = pixels.data[i + 2];
          alpha = pixels.data[i + 3];

          if (red >= levels.rmin &&
              green >= levels.gmin &&
              blue >= levels.bmin &&
              red <= levels.rmax &&
              green <= levels.gmax &&
              blue <= levels.bmax) {
              // take it out!
              pixels.data[i + 3] = 0;
          }
      }

      return pixels;
  }

  getvideo();


  video.addEventListener('canplay', paintToCanvas);
















  /* 
  1. Grab all relevant node lists.

  2. Pipe the video into the video element, using navigator.

  3. This returns a promise that you can call .then on (this will give us alocal media stream).

  4.  Set the source of video to local media stream. You have to convert it to be a URL before it can be a live media stream.

  5. Call video.play


  We need to  take a frame from this video to paint it to the actual canvas on the screen:

  6.  Grab the width and height of the actual video

  7. Set width and height of canvas to equal width and height of actual video.

  8. Next set interval for pictures to be pasted to canvas.

  9. Paint image directly to canvas by calling draw Image and passing it the video element.

  10. Return the interval, so if you ever need to stop it from painting, you can access it, or call clear on it.

  11. Listen for event on video element called canPlay, so you can automatically run paontToCanvas.

  12. To take a picture you have to take the data out of the canvas (will return raw data called base 4)

  13. Create a link or image to put the base64 imto the strip

  // For the filters, you get the pixels out of the canvas, mess with them by changing the RGB values and then put ot it back.

  14. Create filter function, pass in pixels variable, and assign it to pixels.

  15. Use for loop in effects func, because the pixel array produced by image data does not support higher order functioning 

  16. Mess with the RGB values then return pixels again.

  17. Put pixels back in...ln 38

  */