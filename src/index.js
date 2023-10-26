import CustomCursor from 'custom-cursor.js';

document.addEventListener('DOMContentLoaded', function () {
  const cursor = new CustomCursor({
    /* configuration options here */
    color: 'red',
    trailColor: 'rgba(255, 0, 0, 0.5)',
    customClass: 'custom-cursor',
    elementToBind: '.custom-cursor' // Specify the element here

  });
});