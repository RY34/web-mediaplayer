import {mediaplayerClass} from "/mediaplayerClass.js"





document.addEventListener("DOMContentLoaded", function () {
    
    let playBtn = document.querySelector("#play");
    
    const mediaplayer = new mediaplayerClass();
      Object.defineProperty(mediaplayer, "playBtn", {value: playBtn});
   mediaplayer.audio.setAttribute("src", );
    playBtn.addEventListener("click", function(){mediaplayer.playAudio()});
    /*let root = document.querySelector(":root");
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
