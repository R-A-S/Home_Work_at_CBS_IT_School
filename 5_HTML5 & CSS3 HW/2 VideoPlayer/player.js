/*jshint esversion: 6 */
window.addEventListener('DOMContentLoaded', function () {
  //Заменяем document.getElementById на _
  function _(id) {
    return document.getElementById(id);
  }
  //упрощаем обработчик addEventListener, и делаем его немного мультибраузерным
  function addEvent(element, eventType, fn) {
    if (element.addEventListener) {
      element.addEventListener(eventType, fn, false);
    } else if (element.attachEvent) {
      element.attachEvent('on' + eventType, fn);
    } else {
      element['on' + eventType] = fn;
    }
  }
  //Переменные
  const video = _('video');
  const playPause = _('play_pause');
  const volume = _('volume');
  const timer = _('timer');
  const dur = _('duration');
  const cur = _('current_time');
  const current = _('current');
  const progressbar = _('progressbar_range');
  const volumeBtn = _('volume_btn');
  const fullscreen = _('fullscreen');
  const playerContainer = _('player_container');
  const videoNavigation = _('video_navigation');
  //Обработчик старт/пауза
  addEvent(playPause, 'click', function () {
    if (video.paused) {
      video.play();
      playPause.classList.remove('play_pause__play');
      playPause.classList.add('play_pause__pause');
    } else {
      video.pause();
      playPause.classList.add('play_pause__play');
      playPause.classList.remove('play_pause__pause');
    }
  });
  //Обработчик на отображение времени ролика по загрузке метаданных видео
  addEvent(video, 'loadedmetadata', function () {
    dur.innerText = gTimeFormat(video.duration);
    volume.value = video.volume;
    progressbar.value = 0;
  });
  //Обработчик на отображения текущего времени при обновлении
  addEvent(video, 'timeupdate', function () {
    cur.innerText = gTimeFormat(video.currentTime);
  });
  //Функция для перевода секунд в нужный формат
  function gTimeFormat(seconds) {
    let min = Math.floor(seconds / 60) < 10 ? '0' + Math.floor(seconds / 60) : Math.floor(seconds / 60);
    let sec = Math.round(seconds - min * 60) < 10 ? '0' + Math.round(seconds - min * 60) : Math.round(seconds - min * 60);
    return min + ':' + sec;
  }

  //Обработчик на перемотку ползунком воспроизведения
  addEvent(progressbar, 'input', function () {
    let setCurrent = video.duration * (progressbar.value / 100);
    video.currentTime = setCurrent;
  });
  //Обработчик на получение текущей позиции ползунку воспроизведения
  addEvent(video, 'timeupdate', function () {
    let refreshProgressbar = video.currentTime * (100 / video.duration);
    progressbar.value = refreshProgressbar;
  });
  //Обработчик на кнопку звука
  addEvent(volumeBtn, 'click', function () {
    if (video.muted) {
      video.muted = false;
      volume.value = video.volume;
      volumeBtn.classList.add('volume_1', 'volume_2', 'volume_3');
      volumeBtn.classList.remove('volume_0');
    } else {
      video.muted = true;
      volume.value = 0;
      volumeBtn.classList.remove('volume_1', 'volume_2', 'volume_3');
      volumeBtn.classList.add('volume_0');
    }
  });
  //Обработчик на ползунок звука
  addEvent(volume, 'input', function () {
    video.muted = false;
    video.volume = volume.value;
    if (video.volume > 0.0 && video.volume <= 0.33) {
      volumeBtn.classList.add('volume_1');
      volumeBtn.classList.remove('volume_0', 'volume_2', 'volume_3');
    } else if (video.volume > 0.33 && video.volume <= 0.66) {
      volumeBtn.classList.add('volume_2');
      volumeBtn.classList.remove('volume_0', 'volume_1', 'volume_3');
    } else if (video.volume > 0.66 && video.volume <= 1) {
      volumeBtn.classList.add('volume_3');
      volumeBtn.classList.remove('volume_0', 'volume_1', 'volume_2');
    }
  });
  //Обработчик полноэкранного режима
  addEvent(fullscreen, 'click', function toggleFullScreen() {
    if (!document.mozFullScreen && !document.webkitFullScreen && !document.FullScreen) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullScreen) {
        video.webkitRequestFullScreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
    } else {
      if (document.requestFullScreen) {
        document.requestFullScreen();
      } else if (document.webkitRequestFullScreen) {
        document.webkitRequestFullScreen();
      } else if (document.mozRequestFullScreen) {
        document.mozRequestFullScreen();
      }
    }
  });
  //Вишенка ::
  addEvent(playerContainer, 'mouseover', function toggleFullScreen() {
    videoNavigation.style.display = 'block';
  });
  addEvent(playerContainer, 'mouseout', function toggleFullScreen() {
    videoNavigation.style.display = 'none';
  });
});
