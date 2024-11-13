const slider = () => {
    const slider = document.querySelector(".reviews__slider_block");
    const sliderItem = document.querySelectorAll(".reviews__slider_item");
    const next = document.querySelector(".reviews__slider_next");
    const prev = document.querySelector(".reviews__slider_prev");
    const dot = document.querySelectorAll(".reviews__slider_dots-dot");
    const isoWrapper = document.querySelector(".ioswrapper");
    const f = document.querySelector(".reviews__slider")
    let t = true;
    let resizeStart = 0;
    let resizeEnd = 0;
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
            clearTimeout(this.set);
            if (t) {
                resizeStart = window.innerWidth;
                t = false;
            }
            this.set = setTimeout(() => {
                resizeEnd = window.innerWidth;
                if (resizeEnd - resizeStart > 18 || resizeEnd - resizeStart < -18) {
                    this.width = sliderItem[0].offsetWidth + +parseInt(window.getComputedStyle(slider).columnGap);
                    this.maxW = sliderItem[0].offsetWidth * (sliderItem.length - 1);
                    this.size = this.width * this.dots;
                    this.transform();
                    this.dotscounter();
                    addClass(dot, this.dots, "reviews__slider_dots-dot_active");
                    t = true;
                    resizeEnd = 0;
                    resizeStart = 0;
                }
            }, 100);
        },
        dotscounter() {
            this.dots = 0;
            for (let i = this.size; i > 0; i -= this.width) {
                this.dots += 1;
            }
        },
    };
    next.addEventListener("click", s.next.bind(s));
    prev.addEventListener("click", s.prev.bind(s));
    window.addEventListener("resize", s.resize.bind(s));
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
    let start = 0;
    let end = 0;
    slider.addEventListener("touchstart",  touchS,event);
    function touchS(event) {
        isoWrapper.style.overflow = "hidden";
        document.body.style.overflow = "hidden";
        start = event.touches[0].clientX;
        /* slider.addEventListener("touchstart",  touchS,event); */
        
    }
    f.addEventListener("touchend",  touchmove,event);
    function touchmove(ev) {
        alert("touch move сработал");
        end = 0;
        // end = ev[0].changedTouches[0].clientX;
        end = ev.changedTouches[0].clientX;
        if (start - end < 0) {
            s.prev();
        } else {
            s.next();
        }
         isoWrapper.style.overflow = "";
        document.body.style.overflow = "";
    }

    let c = debounc(touchmove, 100);
    function debounc(fn, delay) {
        let se;
        return function (...args) {
            clearTimeout(se);
            se = setTimeout(() => fn.call(this, args), delay);
        };
    }
};
export { slider };
