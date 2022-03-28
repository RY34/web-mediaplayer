function timelineHandler(start, duration) {


    let keyframes = [
        {
            width: start + "%"
        },
        {
            width: "100%"
        }
    ];
    let kfe = new KeyframeEffect(this.timelineColor, keyframes, duration);
    
    let animation = new Animation(kfe);


    if (this.timelineAnimation == null) {
        Object.defineProperty(this, "timelineAnimation", { value: animation, configurable: true });
    }
}
export { timelineHandler };


/*let keyFrames = new KeyframeEffect(this.timelineColor, null, { duration: 2000 });
    
    let animatione = new Animation(keyFrames);
    
    let start = 50

    animatione.effect.setKeyframes([
            {
                width: start + "%"
            },
            {
                width: "100%"
            }
    ]);

    Object.defineProperty(this, "animatione", { value: animatione });*/