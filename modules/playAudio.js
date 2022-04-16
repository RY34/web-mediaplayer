function playAudio() {

  if (this.playing === false) {
    
    this.audio.play();
    this.playBtn.innerHTML = "pause";
    this.playing = true;
  }
  else {
    
    this.audio.pause();
    this.playBtn.innerHTML = "play_arrow";
    this.playing = false;
  }
}

export  { playAudio };
