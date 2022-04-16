function timer() {
    
    this.s = parseInt(this.audio.currentTime);

    this.s = parseInt(this.audio.currentTime % 60)
    this.m = parseInt((this.audio.currentTime / 60) % 60);

    if (this.s < 10)
        this.s = '0' + this.s;
    
 
    this.timerDisplay.innerHTML = `${this.m}:${this.s}`;
}

export { timer }