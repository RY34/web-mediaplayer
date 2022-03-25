import {mediaplayerClass} from "./mediaplayerClass.js"

document.addEventListener("DOMContentLoaded", function () {
    
    let playBtn = document.querySelector("#play");
    let timeline = document.querySelector("#timeline"); // for later
    let timelineColor = document.querySelector("#timeline-color");
    let pointer = document.querySelector("#pointer"); // for later
    
    const mediaplayer = new mediaplayerClass();
        Object.defineProperty(mediaplayer, "playBtn", { value: playBtn });
        Object.defineProperty(mediaplayer, "timelineColor", { value: timelineColor });
    
    mediaplayer.audio.setAttribute("src", "audio_files/1.mp3");

    mediaplayer.audio.addEventListener("canplaythrough", function () {
        
        let timelineAnimation = timelineColor.animate([
            {
                width: "0%" //fixed animation, will be changed later, just for tests
            },
            {
                width: "100%"
            }
        ], { duration: mediaplayer.audio.duration * 1000 });
        timelineAnimation.pause();

        Object.defineProperty(mediaplayer, "timelineAnimation", { value: timelineAnimation });

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
