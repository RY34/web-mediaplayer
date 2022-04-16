function timelineManager(event) {

    let rect, rectX, rectWidth, cursorX, posX, timelineNewWidth, audioDur, audioCurrentTime;
    
    this.timelineAnimation.cancel();
    rect = this.timeline.getBoundingClientRect();
    rectX = rect.left;
    rectWidth = rect.width;
    cursorX = event.clientX;
    posX = cursorX - rectX;
    timelineNewWidth = (posX * 100) / rectWidth;
    audioDur = this.audio.duration;
    audioCurrentTime = (audioDur * posX) / rectWidth;

    if(timelineNewWidth <= 100)
        this.timelineColor.style.width = timelineNewWidth + "%";
    
    let self = this;

    document.addEventListener("mouseup", function mUp() {
                
        document.removeEventListener("mousemove", timelineManager);
        self.audio.currentTime = audioCurrentTime;
        self.timelineAnimation.currentTime = audioCurrentTime * 1000;

        if (self.playing == true)
            self.timelineAnimation.play();
        document.removeEventListener("mouseup", mUp)
    });
}

export { timelineManager };