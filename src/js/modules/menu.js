const menuBtn = document.querySelector(".header__menu-burger");
const nav = document.querySelector(".nav");
const iosWrap = document.querySelector(".ioswrapper");

const menu = () => {
    menuBtn.addEventListener("click", navTogle);
    function navTogle() {
        menuBtn.classList.toggle("header__menu-burger_active");
        nav.classList.toggle("nav_active");
        iosWrap.classList.toggle("body__overflow");
    }
};
export { menu };
