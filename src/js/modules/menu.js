const menuBtn = document.querySelector(".header__menu-burger");
const nav = document.querySelector(".nav");
const iosWrap = document.querySelector(".ioswrapper");
const navLink = document.querySelectorAll(".nav_active, .nav__list-item_link");

const menu = () => {
    navLink.forEach((item) => {
        item.addEventListener("click", () => {
            if (window.innerWidth <= 1000) {
                navTogle();
            }
        });
    });
    menuBtn.addEventListener("click", navTogle);
    function navTogle() {
        document
            .querySelector(":root")
            .style.setProperty("--pr", window.innerWidth - document.documentElement.clientWidth + "px");

        menuBtn.classList.toggle("header__menu-burger_active");
        nav.classList.toggle("nav_active");
        document.body.classList.toggle("body__overflow");
        iosWrap.classList.toggle("body__overflow");
    }
};
export { menu };
