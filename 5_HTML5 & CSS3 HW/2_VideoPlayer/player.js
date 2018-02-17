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
      if (video.volume >= 0.0 && video.volume <= 0.33) {
        volumeBtn.classList.add('volume_1');
        volumeBtn.classList.remove('volume_0', 'volume_2', 'volume_3');
      } else if (video.volume > 0.33 && video.volume <= 0.66) {
        volumeBtn.classList.add('volume_2');
        volumeBtn.classList.remove('volume_0', 'volume_1', 'volume_3');
      } else if (video.volume > 0.66 && video.volume <= 1) {
        volumeBtn.classList.add('volume_3');
        volumeBtn.classList.remove('volume_0', 'volume_1', 'volume_2');
      }
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
  addEvent(fullscreen, 'click', function () {
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
  addEvent(playerContainer, 'mouseover', function () {
    videoNavigation.style.display = 'block';
  });
  addEvent(playerContainer, 'mouseout', function () {
    videoNavigation.style.display = 'none';
  });
});











_______________________________________
var u = doT.template(s.default),
      c = $(document),
      d = {
          el: null,
          id: null
      },
      f = function(e) {
          return 0 === e.inMinutesMod ? parseInt(e.inMinutes) + ":00" : (e.inMinutes = parseInt(e.duration - e.inMinutesMod) / 60, e.inMinutesMod < 10 ? parseInt(e.inMinutes) + ":0" + parseInt(e.inMinutesMod) : parseInt(e.inMinutes) + ":" + parseInt(e.inMinutesMod))
      },
      p = function() {
          function e(t) {
              var n = this;
              ! function(e, t) {
                  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
              }(this, e), this.model = i({}, t.model, {
                  fullScreenEnabled: l.fullScreenEnabled,
                  isFullScreen: !1,
                  volume: 1
              }), this.cashed = t.cashed, this.el = document.createElement("div"), this.el.className = this.model.className, this.$el = $(this.el), this.togglePlay = this.togglePlay.bind(this), this.toggleMute = this.toggleMute.bind(this), this.toggleFullScreen = this.toggleFullScreen.bind(this), this.changeTime = this.changeTime.bind(this), this.changeVolume = this.changeVolume.bind(this), this.onVideoProgress = this.onVideoProgress.bind(this), this.updateTime = this.updateTime.bind(this), this.moveTimeTooltip = this.moveTimeTooltip.bind(this), this.init = this.init.bind(this), this.onFullScreenChange = this.onFullScreenChange.bind(this), this.$el.on("mousemove", ".video_range", this.moveTimeTooltip).on("mouseleave", ".video_range", function() {
                  return n.$timeTooltip.fadeOut(200)
              }).on("change input", ".video_range", this.changeTime).on("change input", "#video_volume", this.changeVolume).on("click", "#playpause", this.togglePlay).on("click", ".js-player", this.togglePlay).on("click", ".vv_btn", this.toggleMute).on("click", "#video_fullscreen", this.toggleFullScreen), (0, l.addFullScreenChangeListener)(this.onFullScreenChange)
          }
          return r(e, [{
              key: "render",
              value: function() {
                  var t = this;
                  return this.el.innerHTML = u(this.model), this.videoEl = this.el.querySelector(".js-player"), this.$videoControls = this.$el.find(".js-video-controls"), this.$videoLoader = this.$el.find(".js-video-loader"), this.videoRangeInput = this.el.querySelector(".video_range"), this.videoProgressLine = this.el.querySelector(".video_progress"), this.videoBufferingLine = this.el.querySelector(".video_buffering"), this.videoVolumeLine = this.el.querySelector(".video_volume_current"), this.currentTime = this.el.querySelector(".video_cur_time"), this.totalTime = this.el.querySelector(".video_total_time"), this.$timeTooltip = this.$el.find(".video_time"), this.$playBtn = this.$el.find("#playpause"), this.$volumeBtn = this.$el.find(".vv_btn"), d.id === this.model.id ? (this.el.removeChild(this.videoEl), this.videoEl = d.el, this.el.appendChild(this.videoEl), this.videoEl.style.display = "block", this.videoEl.ontimeupdate = this.updateTime, this.videoEl.onprogress = this.onVideoProgress, e.clearVideoCash(), this.init()) : (this.videoEl.src = fex.urlPrefix + "/play/" + this.model.objectId + "/" + this.model.id, this.videoEl.poster = fex.urlPrefix + "/show/" + this.model.objectId + "/" + this.model.id + "?800h,0", this.videoEl.ontimeupdate = this.updateTime, this.videoEl.onprogress = this.onVideoProgress, this.videoEl.oncanplay = function() {
                      return t.init(!0)
                  }), this.$videoControls.hide(), this.$videoLoader.show(), this
              }
          }, {
              key: "init",
              value: function(e) {
                  this.videoEl.oncanplay = null, this.videoRangeInput.max = this.videoEl.duration.toFixed(), this.updateTime(), e && !fex.mobileMedia.matches && (this.$playBtn.removeClass("pause"), this.videoEl.play()), this.$videoControls.show(), this.$videoLoader.hide()
              }
          }, {
              key: "togglePlay",
              value: function() {
                  this.videoEl.paused || this.videoEl.ended ? (this.videoEl.play(), this.$playBtn.removeClass("pause")) : (this.videoEl.pause(), this.$playBtn.addClass("pause"))
              }
          }, {
              key: "toggleMute",
              value: function() {
                  0 === this.videoEl.volume ? (this.$volumeBtn.removeClass("mute"), this.videoEl.volume = this.model.volume, this.videoVolumeLine.style.width = 100 * this.model.volume + "%") : (this.$volumeBtn.addClass("mute"), this.videoEl.volume = 0, this.videoVolumeLine.style.width = "0%")
              }
          }, {
              key: "toggleFullScreen",
              value: function() {
                  this.model.isFullScreen = !this.model.isFullScreen, this.model.isFullScreen ? (c.trigger("beforeFullScreen"), this.el.requestFullscreen ? this.el.requestFullscreen() : this.el.mozRequestFullScreen ? this.el.mozRequestFullScreen() : this.el.webkitRequestFullScreen ? this.el.webkitRequestFullScreen() : this.el.msRequestFullscreen && this.el.msRequestFullscreen()) : document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen()
              }
          }, {
              key: "changeTime",
              value: function(e) {
                  this.videoProgressLine.style.width = e.target.value / e.target.max * 100 + "%", this.videoEl.currentTime = e.target.value
              }
          }, {
              key: "moveTimeTooltip",
              value: function(t) {
                  this.$timeTooltip.css("left", t.offsetX - this.$timeTooltip.width() / 1.2 + "px"), this.$timeTooltip.is(":hidden") && this.$timeTooltip.fadeIn(200), this.$timeTooltip.text(f(e.getTooltipTime(t)))
              }
          }, {
              key: "changeVolume",
              value: function(e) {
                  this.model.volume = parseFloat(e.target.value), this.videoVolumeLine.style.width = 100 * this.model.volume + "%", this.videoEl.volume = this.model.volume, this.$volumeBtn.toggleClass("mute", !this.model.volume)
              }
          }, {
              key: "updateTime",
              value: function() {
                  this.currentTime.textContent = f(this.getCurrentTime()), this.totalTime.textContent = f(this.getTotalTime()), this.videoEl.ended ? this.$playBtn.addClass("pause") : this.videoProgressLine.style.width = this.videoEl.currentTime / this.videoEl.duration * 100 + "%"
              }
          }, {
              key: "onVideoProgress",
              value: function() {
                  if (this.videoEl.buffered.length) {
                      var e = this.videoEl.buffered.end(this.videoEl.buffered.length - 1);
                      this.videoBufferingLine.style.width = e / this.videoEl.duration * 100 + "%"
                  }
              }
          }, {
              key: "getCurrentTime",
              value: function() {
                  return {
                      duration: this.videoEl.currentTime,
                      inMinutesMod: this.videoEl.currentTime % 60,
                      inMinutes: this.videoEl.currentTime / 60
                  }
              }
          }, {
              key: "getTotalTime",
              value: function() {
                  return {
                      duration: this.videoEl.duration,
                      inMinutesMod: this.videoEl.duration % 60,
                      inMinutes: this.videoEl.duration / 60
                  }
              }
          }, {
              key: "dispose",
              value: function(t) {
                  this.videoEl.pause(), t ? (e.clearVideoCash(), d.id = this.model.id, d.el = this.videoEl, d.el.style.display = "none", document.body.appendChild(this.videoEl)) : (this.videoEl.src = "", this.el.innerHTML = ""), (0, l.removeFullScreenChangeListener)(this.onFullScreenChange)
              }
          }, {
              key: "onFullScreenChange",
              value: function() {
                  this.model.isFullScreen = (0, l.isFullScreen)(), this.el.setAttribute("data-fullscreen", this.model.isFullScreen), c.trigger("fullscreenChanged", this.model.isFullScreen), this.model.isFullScreen || c.trigger("afterFullScreen", this.model.isFullScreen)
              }
          }], [{
              key: "getTooltipTime",
              value: function(e) {
                  var t = e.offsetX / e.target.clientWidth * parseInt(e.target.max, 10);
                  return {
                      duration: t,
                      inMinutesMod: t % 60,
                      inMinutes: t / 60
                  }
              }
          }, {
              key: "clearVideoCash",
              value: function() {
                  d.el && d.el.parentNode === document.body && (document.body.removeChild(d.el), d.id = null, d.el = null)
              }
          }]), e
      }();