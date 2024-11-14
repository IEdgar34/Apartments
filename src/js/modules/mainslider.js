const slider = () => {
    const slider = document.querySelector(".reviews__slider_block");
    const moveEndWrapper = document.querySelector(".reviews__slider");
    const moveWrapp = document.querySelector(".reviews__slider_wrap");
    const sliderItem = document.querySelectorAll(".reviews__slider_item");
    const next = document.querySelector(".reviews__slider_next");
    const prev = document.querySelector(".reviews__slider_prev");
    const dot = document.querySelectorAll(".reviews__slider_dots-dot");
    const isoWrapper = document.querySelector(".ioswrapper");
    
    const s = {
        width: sliderItem[0].offsetWidth + +parseInt(window.getComputedStyle(slider).columnGap),
        maxW: sliderItem[0].offsetWidth * (sliderItem.length - 1),
        size: 0,
        dots: 0,
        left: 0,
        right: 0,
        set: {},
        transform() {
            slider.style.transform = `translateX(-${this.size}px)`;
        },
        next() {
            if (this.size < this.maxW) {
                this.size += this.width;
                this.transform();
                this.dotscounter();
                addClass(dot, this.dots, "reviews__slider_dots-dot_active");
            }
        },
        prev() {
            if (this.size > 0) {
                this.size -= this.width;
                this.transform();
                this.dotscounter();
                addClass(dot, this.dots, "reviews__slider_dots-dot_active");
            }
        },
        resize() {
            this.width = sliderItem[0].offsetWidth + +parseInt(window.getComputedStyle(slider).columnGap);
            this.maxW = sliderItem[0].offsetWidth * (sliderItem.length - 1);
            this.size = this.width * this.dots;
            this.transform();
            this.dotscounter();
            addClass(dot, this.dots, "reviews__slider_dots-dot_active");
            clearTimeout(this.set);
        },
        dotscounter() {
            this.dots = 0;
            for (let i = this.size; i > 0; i -= this.width) {
                this.dots += 1;
            }
        },
    };

    function addClass(arrElemets, counter, classSelector) {
        arrElemets.forEach((item) => {
            item.classList.remove(classSelector);
        });
        arrElemets[counter].classList.add(classSelector);
    }

    function dotsMove() {
        dot.forEach((item, count) => {
            item.addEventListener("click", (e) => {
                s.size = s.width * count;
                s.transform();
                s.dotscounter();
                addClass(dot, s.dots, "reviews__slider_dots-dot_active");
            });
        });
    }
    dotsMove();
    next.addEventListener("click", s.next.bind(s));
    prev.addEventListener("click", s.prev.bind(s));
    window.addEventListener("resize", s.resize.bind(s));

    let start = 0;
    let moveEnd;
    slider.addEventListener("touchstart", touchS, event);
    function touchS(event) {
        isoWrapper.style.overflow = "hidden";
        document.body.style.overflow = "hidden";
        start = event.touches[0].clientX;
    }
    moveEndWrapper.addEventListener("touchend", touchmove, event);
    function touchmove(ev) {
        if (moveEnd - start > 100 && s.size > 0) {
            s.prev();
        } else if (moveEnd - start < -100 && s.size < s.maxW) {
            s.next();
        } else {
            slider.style.transform = `translateX(-${s.size}px)`;
        }
        isoWrapper.style.overflow = "";
        document.body.style.overflow = "";
    }

    moveWrapp.addEventListener("touchmove", (e) => {
        moveEnd = e.touches[0].clientX;
        if (s.size <= 0) {
            slider.style.transform = `translateX(${s.size + (moveEnd - start)}px)`;
        } else {
            slider.style.transform = `translateX(-${s.size + -(moveEnd - start)}px)`;
        }
    });
};
export { slider };
