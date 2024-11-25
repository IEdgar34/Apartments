const sendForm = () => {
    const messageForm = document.querySelector(".message__form");
    const messageBtn = document.querySelector(".message__form_btn");
    const modalForm = document.querySelector(".modal__form");
    const modalBtn = document.querySelector(".modal__btn ");
    const inputs = document.querySelectorAll(".message__form_inp");
    //
    const messagesInput = document.querySelectorAll(".messagesInput");
    messageForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let arr = [];
        messagesInput.forEach((item) => {
            arr.push(validateRules[item.getAttribute("name")](item.value, item, "submit"));
        });
        arr.includes(false)
            ? null
            : ((messageBtn.textContent = "Отправка..."), send(messageForm, "message", messageBtn));
    });
    //
    const modalInputs = document.querySelectorAll(".modal_input");
    modalForm.addEventListener("submit", (e) => {
        e.preventDefault();

        let arr = [];
        modalInputs.forEach((item) => {
            //во время отправки формы получаем в массив резулятаты проверок всех полей ввода
            arr.push(validateRules[item.getAttribute("name")](item.value, item, "submit"));
        });
        //отправляем форму в случае прохождения проверок 
        arr.includes(false) ? null : ((modalBtn.textContent = "Отправка..."), send(modalForm, "collback", modalBtn));
    });
    //
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
                inputs.forEach((item) => item.classList.remove("message__form_inp_valid"));
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

    //inputs validate

    const validateRules = {
        name: (value, target, type) => {
            if (/^[а-яё А-ЯЁ a-z A-Z 0-9._-]{1,30}$/g.test(value)) {
                valid(target);
                return true;
            } else {
                invalid(target);
                return false;
            }
            //
        },
        Email: (value, target, type) => {
            if (/^[a-z A-Z 0-9._-]+@[a-z A-Z 0-9]+\.[a-z A-Z]{2,}$/g.test(value)) {
                valid(target);
                return true;
            } else {
                invalid(target);
                return false;
            }
        },
        textarea: (value, target, type) => {
            if (value === "") {
                invalid(target);
                return false;
            } else {
                valid(target);
                return true;
            }
        },
        tel: (value, target, type) => {
            if (/^[0-9]{11,11}$/g.test(value)) {
                valid(target);
                return true;
            } else {
                invalid(target);
                return false;
            }
        },
    };
    inputs.forEach((item) => {
        item.addEventListener("input", (e) => {
            let value = e.target.value;
            let target = e.target;
            if (value === "") {
                target.classList.remove("message__form_inp_valid");
                target.classList.remove("message__form_inp_invalid");
            } else {
                validateRules[target.getAttribute("name")](value, target, "input");
            }
        });
    });

    function valid(target) {
        target.classList.add("message__form_inp_valid");
        target.classList.remove("message__form_inp_invalid");
    }
    function invalid(target) {
        target.classList.remove("message__form_inp_valid");
        target.classList.add("message__form_inp_invalid");
    }
};
export { sendForm };
