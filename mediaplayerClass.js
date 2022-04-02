import { playAudio } from "./modules/playAudio.js";
import { timelineAnimationSetUp } from "./modules/timelineAnimationSetUp.js";
import { timelineManager } from "./modules/timelineManager.js";

class mediaplayerClass {};

//properties

mediaplayerClass.prototype.audio = new Audio();
mediaplayerClass.prototype.playing = false;
mediaplayerClass.prototype.timelineAnimation = null;

//methods

mediaplayerClass.prototype.playAudio = playAudio;
mediaplayerClass.prototype.timelineAnimationSetUp = timelineAnimationSetUp;
mediaplayerClass.prototype.timelineManager = timelineManager;

export { mediaplayerClass }
