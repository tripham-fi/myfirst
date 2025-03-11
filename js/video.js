// Video Variables --->
var video = document.querySelector(".video");
var btnplay = document.getElementById("play-pause");
var bar = document.querySelector(".orange-bar");
var juice = document.querySelector(".orange-juice");
var videoTime = document.getElementById("video-Time");
var volume = document.getElementById("vid_volumn");
var fullscreen = document.getElementById("fs");
let mousedown = false;

// FUNCTION ====>

function convertTime(second) {
  var min = Math.floor(second / 60);
  var sec = second % 60;

  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  videoTime.textContent = min + ":" + sec;
  totalTime(Math.round(video.duration));
}

function totalTime(second) {
  var min = Math.floor(second / 60);
  var sec = second % 60;

  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  videoTime.textContent += " / " + min + ":" + sec;
}

function TogglePlayPause() {
  if (video.paused) {
    btnplay.className = "pause";
    video.play();
  } else {
    btnplay.className = "play";
    video.pause();
  }
}

video.addEventListener("click", TogglePlayPause);
video.addEventListener("dblclick", function () {
  video.requestFullscreen();
});
video.addEventListener("timeupdate", function () {
  var juice_start = video.currentTime / video.duration;
  juice.style.width = juice_start * 100 + "%";

  if (video.ended) {
    btnplay.className = "play";
  }
  convertTime(Math.round(video.currentTime));
});

function seek(e) {
  // var percent = e.offsetX / this.offsetWidth;
  // video.currentTime = percent * video.duration;
  // e.target.value = Math.floor(percent / 100);
  // this for progress tag
  const scrubTime = (e.offsetX / bar.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
  var juice_start = video.currentTime / video.duration;
  juice.style.width = juice_start * 100 + "%";
}

// EVENT ===>

fullscreen.addEventListener("click", function () {
  // video.requestFullscreen(); my basic
  if (video.requestFullscreen)
    if (document.fullScreenElement) {
      document.cancelFullScreen();
    } else {
      video.requestFullscreen();
    }
  else if (video.msRequestFullscreen)
    if (document.msFullscreenElement) {
      document.msExitFullscreen();
    } else {
      video.msRequestFullscreen();
    }
  else if (video.mozRequestFullScreen)
    if (document.mozFullScreenElement) {
      document.mozCancelFullScreen();
    } else {
      video.mozRequestFullScreen();
    }
  else if (video.webkitRequestFullscreen)
    if (document.webkitFullscreenElement) {
      document.webkitCancelFullScreen();
    } else {
      video.webkitRequestFullscreen();
    }
  else {
    alert("Fullscreen API is not supported");
  }
});

btnplay.onclick = function () {
  TogglePlayPause();
};

bar.addEventListener("click", seek);
bar.addEventListener("mousemove", (e) => mousedown && seek(e));
bar.addEventListener("mousedown", () => (mousedown = true));
bar.addEventListener("mouseup", () => (mousedown = false));

volume.addEventListener("change", function (e) {
  video.volume = e.target.value;
});

volume.addEventListener("mousemove", function (e) {
  video.volume = e.target.value;
});
