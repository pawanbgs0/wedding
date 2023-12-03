document.addEventListener("DOMContentLoaded", function () {
  var audio = document.getElementById("backgroundMusic");
  var openInvitation = document.getElementById("open-invitation");
  var toggleIcon = document.getElementById("toggleIcon");

  // Add click event listener to the element with ID "open-invitation"
  openInvitation.addEventListener("click", function () {
    // Check if the audio is paused, and play or pause accordingly
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });

  toggleIcon.addEventListener("click", function () {
    if (audio.paused) {
      audio.play();
      toggleIcon.src = "images/audio/pause.png"; // Update with the path to your pause icon
    } else {
      audio.pause();
      toggleIcon.src = "images/audio/play.png"; // Update with the path to your play icon
    }
  });
});
