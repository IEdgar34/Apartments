const slider = () => {
    const slider = document.querySelector(".reviews__slider_block");
    const sliderItem = document.querySelectorAll(".reviews__slider_item");
    const next = document.querySelector(".reviews__slider_next");
    const prev = document.querySelector(".reviews__slider_prev");
    const dot = document.querySelectorAll(".reviews__slider_dots-dot");

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
            slider.style.transform = `translateX(-${0}px)`;
            this.dots = 0;
            this.size = 0;
            this.width = sliderItem[0].offsetWidth + +parseInt(window.getComputedStyle(slider).columnGap);
            this.maxW = sliderItem[0].offsetWidth * (sliderItem.length - 1);
            addClass(dot, this.dots, "reviews__slider_dots-dot_active");
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
    let set;
    let x = 0;
    let start = 0;
    let end = 0;
    slider.addEventListener("touchstart", (ev) => {
        slider.addEventListener("touchmove", (e) => {
            clearTimeout(set);
            set = setTimeout(() => {
                end = e.touches[0].clientX;
                start = ev.touches[0].clientX;
                alert(start, end);
                alert(start > end);
                if (start - end < 0) {
                    s.prev();
                } else {
                    s.next();
                }
            }, 100);
        });
    });
};
export { slider };
