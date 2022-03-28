import { playAudio } from "./modules/playAudio.js";
import { timelineHandler } from "./modules/timelineHandler.js";

class mediaplayerClass {};

//properties

mediaplayerClass.prototype.audio = new Audio();
mediaplayerClass.prototype.playing = false;

//methods

mediaplayerClass.prototype.playAudio = playAudio;
mediaplayerClass.prototype.timelineHandler = timelineHandler;

export { mediaplayerClass }
