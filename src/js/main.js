"use strict";
import { slider } from "./modules/mainslider";
import { menu } from "./modules/menu";
import { pagesHistory } from "./modules/pages";
import { animation } from "./modules/animation";
import { Slider } from "./modules/apartslider";

window.addEventListener("DOMContentLoaded", () => {
    slider();
    menu();
    pagesHistory(Slider);
    animation();
    
});
