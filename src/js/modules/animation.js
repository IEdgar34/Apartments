const animation = () => {
    let set = setInterval(anim, 3000);
    function anim() {
        const title = document.querySelector(".main__content_title-wrap-title");
        if (title) {
            let text = title.innerText;
            title.textContent = "";
            let i = 0;
            setInterval(() => {
                if (i < text.length) {
                    clearInterval(set);
                    title.textContent += text[i];
                    set = setInterval(anim, 4000);
                }
                i++;
            }, 100.2);
        }
    }
};
export { animation };
