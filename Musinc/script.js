// script.js

document.addEventListener("DOMContentLoaded", function() {
  var music = document.getElementById("backgroundMusic");
  var toggleIcon = document.getElementById("toggleIcon");

  toggleIcon.addEventListener("click", function() {
    if (music.paused) {
      music.play();
      toggleIcon.src = "/home/pawan/Desktop/Didi/wedding/images/audio/pause.png"; // Update with the path to your pause icon
    } else {
      music.pause();
      toggleIcon.src = "/home/pawan/Desktop/Didi/wedding/images/audio/play.png"; // Update with the path to your play icon
    }
  });
});
