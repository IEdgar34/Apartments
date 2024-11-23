const scrollview = () => {
    const aboutus = document.querySelector(".aboutus");
    const contact = document.querySelector(".contacts");
    const aboutlinks = document.querySelectorAll(".about__link");
    const contactLinks = document.querySelectorAll(".contact__link");
    aboutlinks.forEach((item) => {
        item.addEventListener("click", (e) => {
            aboutus.scrollIntoView({
                behavior: "smooth",
            });
        });
    });
    contactLinks.forEach((item) => {
        item.addEventListener("click", (e) => {
            contact.scrollIntoView({
                behavior: "smooth",
            });
        });
    });
};
export { scrollview };
