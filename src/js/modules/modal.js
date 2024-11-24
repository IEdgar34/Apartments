const modal = () => {
    const modalBtn = document.querySelectorAll(".modal_openbtn");
    const modalOverlay = document.querySelector(".overlay");
    const modalClose = document.querySelector(".modal__close");
    const ioswrapper = document.querySelector(".ioswrapper");
    function modalToggle() {
        modalOverlay.classList.toggle("overlay_active");
        document.body.classList.toggle("body__overflow");
        ioswrapper.classList.toggle("body__overflow");
    }
    modalBtn.forEach((item) => item.addEventListener("click", modalToggle));
    modalClose.addEventListener("click", modalToggle);
};
export { modal };
