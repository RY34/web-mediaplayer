import { playAudio } from "./modules/playAudio.js";
import { timelineAnimationSetUp } from "./modules/timelineAnimationSetUp.js";
import { timelineManager } from "./modules/timelineManager.js";
import { timer } from "./modules/timer.js";

class mediaplayerClass {};

//properties

mediaplayerClass.prototype.audio = new Audio();
mediaplayerClass.prototype.playing = false;
mediaplayerClass.prototype.timelineAnimation = null;
mediaplayerClass.prototype.s;
mediaplayerClass.prototype.m = 0;
mediaplayerClass.prototype.h = 0;

//methods

mediaplayerClass.prototype.playAudio = playAudio;
mediaplayerClass.prototype.timelineAnimationSetUp = timelineAnimationSetUp;
mediaplayerClass.prototype.timelineManager = timelineManager;
mediaplayerClass.prototype.timer = timer;

export { mediaplayerClass }
