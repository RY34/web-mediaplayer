import { playAudio } from "./modules/playAudio.js";
import { timelineAnimationSetUp } from "./modules/timelineAnimationSetUp.js";
import { timelineManager } from "./modules/timelineManager.js";
import { timer } from "./modules/timer.js";
import { displayVolChange } from "./modules/displayVolChange.js";

class mediaplayerClass {};


mediaplayerClass.prototype.audio = new Audio();
mediaplayerClass.prototype.playing = false;
mediaplayerClass.prototype.timelineAnimation = null;
mediaplayerClass.prototype.s;
mediaplayerClass.prototype.m = 0;
mediaplayerClass.prototype.h = 0;
mediaplayerClass.prototype.playlist = {
    songs: new Array(),
    looped: false,
}


mediaplayerClass.prototype.playAudio = playAudio;
mediaplayerClass.prototype.timelineAnimationSetUp = timelineAnimationSetUp;
mediaplayerClass.prototype.timelineManager = timelineManager;
mediaplayerClass.prototype.timer = timer;
mediaplayerClass.prototype.displayVolChange = displayVolChange;

export { mediaplayerClass }
