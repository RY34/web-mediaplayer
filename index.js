import { mediaplayerClass } from "./mediaplayerClass.js"

document.addEventListener("DOMContentLoaded", function () {
    
    let playBtn = document.querySelector("#play");
    let timeline = document.querySelector("#timeline"); // for later
    let timelineColor = document.querySelector("#timeline-color");
    //let pointer = document.querySelector("#pointer"); // for later
    let titleDisplay = document.querySelector("#titleDisplay");
    
    const mediaplayer = new mediaplayerClass();
    Object.defineProperty(mediaplayer, "playBtn", { value: playBtn });
    Object.defineProperty(mediaplayer, "timelineColor", { value: timelineColor });
    Object.defineProperty(mediaplayer, "titleDisplay", { value: titleDisplay });

    mediaplayer.audio.setAttribute("src", "audio_files/1.mp3");

    mediaplayer.audio.addEventListener("canplaythrough", function () {
        
        mediaplayer.timelineHandler(0, mediaplayer.audio.duration*1000);
       /* let timelineAnimation = timelineColor.animate([
            {
                width: "0%" //fixed animation, will be changed later, just for tests
            },
            {
                width: "100%"
            }
        ], { duration: mediaplayer.audio.duration * 1000 });
        timelineAnimation.pause();

        Object.defineProperty(mediaplayer, "timelineAnimation", { value: timelineAnimation });*/
        timeline.addEventListener("click", function divWidth(event) {
            
            mediaplayer.timelineAnimation.cancel();
            let rect = timeline.getBoundingClientRect();
            let rectX = Math.floor(rect.left);
            let width = Math.floor(rect.width);
            let cursorX = Math.floor(event.clientX);
            let posX = cursorX - rectX;
            let widthLeft = width - posX;
            let timelineNewWidth = Math.floor((posX * 100) / width);
            let audioDur = Math.floor(mediaplayer.audio.duration);
            let timelineLeft = Math.floor(((audioDur * widthLeft) / width) * 1000);
            let audioCurrentTime = Math.floor((audioDur * posX) / width);

            mediaplayer.audio.currentTime = audioCurrentTime;

            timelineColor.style.width = timelineNewWidth + "%";
            delete mediaplayer.timelineAnimation;
            mediaplayer.timelineHandler(timelineNewWidth, timelineLeft);

            if (mediaplayer.audio.paused == false) {
                mediaplayer.timelineAnimation.play();
            }
        });
        
        mediaplayer.audio.addEventListener("ended", e => { //for now, to be changed later into module
            
            mediaplayer.playBtn.innerHTML = "play_arrow";
            mediaplayer.timelineAnimation.cancel();
            timelineColor.style.width = "0%";

        });
    });
    
    

    playBtn.addEventListener("click", function () { mediaplayer.playAudio() });
    
    /*this will be handler for changing colors of UI, left for later date
    
    let root = document.querySelector(":root");
    let pinkBtn = document.querySelector("#pinkBtn");
    let defaultBtn = document.querySelector("#defaultBtn");
    let purpleBtn = document.querySelector("#purpleBtn");

    pinkBtn.addEventListener("click", function () {
    
        root.style.setProperty("--wrapperBg", "#eb1ac4");
    });

    defaultBtn.addEventListener("click", function () {
        
        root.style.setProperty("--wrapperBg", "#2b3238");
    });

    purpleBtn.addEventListener("click", function () {
        
        root.style.setProperty("--wrapperBg", "#b087dc")
    })*/
});
