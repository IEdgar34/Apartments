const sendForm = () => {
    const messageForm = document.querySelector(".message__form");
    const messageBtn = document.querySelector(".message__form_btn");
    const modalForm = document.querySelector(".modal__form");
    const modalBtn = document.querySelector(".modal__btn ");

    messageForm.addEventListener("submit", (e) => {
        e.preventDefault();
        messageBtn.textContent = "Отправка...";
        send(messageForm, "message", messageBtn);
    });
    modalForm.addEventListener("submit", (e) => {
        e.preventDefault();
        modalBtn.textContent = "Отправка...";
        send(modalForm, "collback", modalBtn);
    });

    async function send(data, id, btn) {
        const apiKey = "7023015420:AAErko_HZmS7aSKXyBw-mcmcSTfjGQhXEDY";
        const cathId = "-4536366649";
        const URL = `https://api.telegram.org/bot${apiKey}/sendMessage`;
        const formdata = new FormData(data);
        const text =
            id === "message"
                ? `
            📩 Вам новое сообщение:
            <b>Имя:</b> ${formdata.get("name") || "=("}
            <b>Фамилия:</b> ${formdata.get("Email") || "=("}
            <b>Сообщение:</b> ${formdata.get("textarea") || "=("}
            
            `
                : `
                📩 Заявка на обратный вызов:
                <b>Имя:</b> ${formdata.get("name") || "=("}
                <b>Номер:</b> ${formdata.get("tel") || "=("}
                
            `;
        const tmData = {
            chat_id: cathId,
            text: text,
            parse_mode: "HTML",
        };
        try {
            const respons = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(tmData),
            });
            const json = await respons.json();
            if (!json.ok) {
                btn.textContent = "Отправить";
                notification("error");
            } else {
                notification("succes");
                resetInputs();
                btn.textContent = "Отправить";
            }
        } catch (error) {
            if (error instanceof TypeError) {
                notification("error");
                btn.textContent = "Отправить";
            }
        }
    }

    function notification(value) {
        let notifBlock = document.querySelector(".notification");
        const notifications = {
            error: () => [
                "Произошла ошибка. Пожалуйста, попробуйте ещё раз позже",
                "icons/error.svg",
                "rgb(192, 3, 3)",
            ],
            succes: () => ["Спасибо за ваше сообщение. Оно успешно отправлено", "icons/succes.svg", "rgb(29, 216, 20)"],
        };
        let arr = notifications[value]();
        notifBlock.querySelector("p").textContent = arr[0];
        notifBlock.querySelector("img").src = arr[1];
        document.querySelector(":root").style.setProperty("--bg", arr[2]);
        document.querySelector(":root").style.setProperty("--transform", 0);
        setTimeout(() => {
            document.querySelector(":root").style.setProperty("--transform", "110%");
        }, 4000);
    }
    function resetInputs() {
        const inputsArr = document.querySelectorAll(".message__form_inp");
        inputsArr.forEach((item) => (item.value = ""));
    }
};
export { sendForm };
