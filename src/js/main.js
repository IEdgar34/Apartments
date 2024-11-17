"use strict";
import { slider } from "./modules/mainslider";
import { menu } from "./modules/menu";
import { pagesHistory } from "./modules/pages";
import { animation } from "./modules/animation";

window.addEventListener("DOMContentLoaded", () => {
    slider();
    menu();
    pagesHistory();
    animation();
});
