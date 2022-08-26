import { mediaplayerClass } from "./mediaplayerClass.js"

document.addEventListener("DOMContentLoaded", function () {
    
    let playBtn = document.querySelector("#play");
    let timeline = document.querySelector("#timeline");
    let timelinePB = document.querySelector("#timeline-progressBar");
    let titleDisplay = document.querySelector("#titleDisplay");
    let timerDisplay = document.querySelector("#timer");
    let volumeBtn = document.querySelector("#volume");
    let volRange = document.querySelector("#vol-range");
    
    const mediaplayer = new mediaplayerClass();
    Object.defineProperty(mediaplayer, "playBtn", { value: playBtn });
    Object.defineProperty(mediaplayer, "timelinePB", { value: timelinePB });
    Object.defineProperty(mediaplayer, "titleDisplay", { value: titleDisplay });
    Object.defineProperty(mediaplayer, "timeline", { value: timeline });
    Object.defineProperty(mediaplayer, "timerDisplay", { value: timerDisplay });

    mediaplayer.audio.setAttribute("src", "audio_files/1.mp3");

    mediaplayer.audio.addEventListener("canplaythrough", function () {
        
        if(mediaplayer.timelineAnimation === null)
            mediaplayer.timelineAnimationSetUp(0, mediaplayer.audio.duration * 1000);
        this.volume = 0.5;
        volRange.value = this.volume*100;
    });
        
    mediaplayer.audio.addEventListener("ended", e => {
        
        mediaplayer.playBtn.innerHTML = "play_arrow";
        timelinePB.style.width = "0%";
        mediaplayer.audio.currentTime = 0;
        mediaplayer.timelineAnimation.currentTime = 0;
        mediaplayer.playing = false;

    });

    playBtn.addEventListener("click", function () { mediaplayer.playAudio() });
    
    function timelineLauncher(event) { mediaplayer.timelineManager(event) }
    timeline.addEventListener("mousedown", function (event) {

        document.addEventListener("mousemove", timelineLauncher);

        document.addEventListener("mouseup", function mUp() {
            
            document.removeEventListener("mousemove", timelineLauncher);
            if (this.playing == true)
                this.timelineAnimation.play();
            document.removeEventListener("mouseup", mUp);
        });
        
    });
    timeline.addEventListener("mousedown", function (event) {
       
        mediaplayer.timelineManager(event);
        document.addEventListener("mouseup", function mUp() {
            
            document.removeEventListener("mousemove", timelineLauncher);
            document.removeEventListener("mouseup", mUp);
        });
    });

    mediaplayer.audio.addEventListener("timeupdate", function () { mediaplayer.timer() });
    mediaplayer.audio.addEventListener("play", function () {
        mediaplayer.timelineAnimation.play();
        mediaplayer.playBtn.innerHTML = "pause";
    });
    mediaplayer.audio.addEventListener("pause", function () {
        mediaplayer.timelineAnimation.pause();
        mediaplayer.playBtn.innerHTML = "play_arrow";
    });
    volumeBtn.addEventListener("click", function () { /*mediaplayer.displayVolChange()*/ });
    volRange.addEventListener("input", (e) => { mediaplayer.audio.volume = e.target.value/100 });
});
