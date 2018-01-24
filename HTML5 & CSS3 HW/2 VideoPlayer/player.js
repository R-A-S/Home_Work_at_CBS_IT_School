window.addEventListener('DOMContentLoaded', function() {

  const vid = document.getElementById('video');
  const playPause = document.getElementById('play_pause');
  console.log(vid.paused);
  playPause.addEventListener("click", play, false);

  console.log(typeof playPause);
  function play () {

    if (vid.paused) {
      vid.play();
      playPause.classList.remove('play_pause__play');
      playPause.classList.add('play_pause__pause');
    } else {
      vid.pause();
      playPause.classList.add('play_pause__play');
      playPause.classList.remove('play_pause__pause');
    }
  }
});
