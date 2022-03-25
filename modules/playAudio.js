function playAudio() {

  if (this.playing === false) {
    
    this.audio.play();
    this.playBtn.innerHTML = "pause";
    this.playing = true;
    this.timelineAnimation.play();

  }
  else {
    
    this.audio.pause();
    this.playBtn.innerHTML = "play_arrow";
    this.playing = false;
    this.timelineAnimation.pause();
  }

  this.audio.addEventListener("ended", function(){this.playBtn.innerHTML = "play_arrow";})
}

export {playAudio};
