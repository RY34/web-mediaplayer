import {playAudio} from "/modules/playAudio.js";

class mediaplayerClass {};

//properties

mediaplayerClass.prototype.audio = new Audio();
mediaplayerClass.prototype.playing = false;

//methods

mediaplayerClass.prototype.playAudio = playAudio;

export {mediaplayerClass}
