function Slider(border, previewTrack, sliderItemList, next, prev, touchStart, toucMoveEnd) {
    this.border = border;
    this.track = previewTrack;
    this.itemList = sliderItemList;
    this.nextBtn = next;
    this.prevBtn = prev;
    //
    this.touchS = touchStart;
    this.touchmE = toucMoveEnd;
    /* this.touchE = touchEnd; */
    //
    this.width = this.itemList[0].clientWidth + parseInt(window.getComputedStyle(this.track).columnGap);
    this.maxWidth = this.width * (this.itemList.length - 1);
    this.minWidth = 0;
    this.size = 0;
    this.start = 0;
    this.end = 0;
    this.set;
    //
    this.itemList[0].classList.add("slider__dots-dot_active");

    //
    this.transform = () => {
        this.track.style.transform = `translate3d(-${this.size}px,0px,0px)`;
    };
    this.next = () => {
        if (this.size < this.maxWidth) {
            this.size += this.width;
            this.transform();
            this.addActiveClass();
        }
    };
    this.prev = () => {
        if (this.size > this.minWidth) {
            this.size -= this.width;
            this.transform();
            this.addActiveClass();
        }
    };
    this.resize = () => {
        this.width = this.itemList[0].clientWidth + parseInt(window.getComputedStyle(this.track).columnGap);
        this.maxWidth = this.width * (this.itemList.length - 1);
        this.itemList.forEach((item, counter) => {
            if (item.classList.contains("slider__dots-dot_active")) {
                this.size = this.width * counter;
            }
        });
        this.track.style.transform = `translate3d(-${this.size}px,0px,0px)`;
    };
    this.addActiveClass = () => {
        let borderX = this.border.getBoundingClientRect().x;
        this.itemList.forEach((item) => {
            item.classList.remove("slider__dots-dot_active");
        });
        setTimeout(() => {
            this.itemList.forEach((item) => {
                let itemX = item.getBoundingClientRect().x;
                if (borderX - itemX > -18 && borderX - itemX < 0) {
                    item.classList.add("slider__dots-dot_active");
                    document.querySelector(".slider__track  img").src = item.querySelector("img").src;
                }
            });
        }, 300);
    };
    //
    this.nextBtn.addEventListener("click", this.next);
    this.prevBtn.addEventListener("click", this.prev);
    window.addEventListener("resize", this.resize);

    this.startFn = (event) => {
        this.start = event.touches[0].clientX;
    };
    this.moveFn = (event) => {
        removeEventListener("resize", this.resize);
        document.body.classList.add("body__overflow");
        document.querySelector(".ioswrapper").classList.add("body__overflow");

        let move = event.touches[0].clientX;
        if (this.size === 0) {
            this.track.style.transform = `translate3d(${this.size + (move - this.start) * 2}px,0px,0px)`;
        } else {
            this.track.style.transform = `translate3d(-${this.size + -(move - this.start) * 2}px,0px,0px)`;
        }
    };
    this.endFn = (event) => {
        window.addEventListener("resize", this.resize);
        document.body.classList.remove("body__overflow");
        document.querySelector(".ioswrapper").classList.remove("body__overflow");
        this.end = event.changedTouches[0].clientX;
        if (this.end - this.start < -50 && this.size < this.maxWidth) {
            this.next();
        } else if (this.end - this.start > 50 && this.size > this.minWidth) {
            this.prev();
        } else {
            this.track.style.transform = `translateX(-${this.size}px)`;
        }
    };
    this.touchS.addEventListener("touchstart", this.startFn, event);
    this.touchmE.addEventListener("touchmove", this.moveFn, event);
    this.touchmE.addEventListener("touchend", this.endFn, event);
    //
}
export { Slider };
