function timelineAnimationSetUp(start, duration) {


    let keyframes = [
        {
            width: start + "%"
        },
        {
            width: "100%"
        }
    ];
    let kfe = new KeyframeEffect(this.timelinePB, keyframes, duration);
    
    let animation = new Animation(kfe);

    this.timelineAnimation = animation;
}
export { timelineAnimationSetUp };