function Slider(dotsWrapp, slidsWrapp, dotsTrack, slidesTrack, dotsItem, slidsItem) {
    this.dotsTrack = dotsTrack;
    this.dotsItem = dotsItem;
    this.slidesTrack = slidesTrack;
    this.slidsItem = slidsItem;
    this.width = this.dotsItem[0];
    this.maxWidth = this.width * this.dotsItem.length;

    this.next = () => {};
}   
export { Slider };
