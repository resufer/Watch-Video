window.onload = () => {
  let countVideos = 8; // enter your number
  let currentVideo = 1;

  function changeVideo(e) {
    console.log(e.code);
    if (e.code === 'Space') {
      let video = document.querySelector('video');
      if (currentVideo >= countVideos) {
        currentVideo = 1;
      } else {
        ++currentVideo;
      }
      video.src = "videos/video" + currentVideo + ".mp4";
    }
  };

  document.body.addEventListener('keypress', (e) => changeVideo(e))
};