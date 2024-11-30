const sendForm = () => {
    const messageForm = document.querySelector(".message__form");
    const messageBtn = document.querySelector(".message__form_btn");
    const modalForm = document.querySelector(".modal__form");
    const modalBtn = document.querySelector(".modal__btn ");
    const inputs = document.querySelectorAll(".message__form_inp");
    //
    const messagesInput = document.querySelectorAll(".messages");
    messageForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let arr = [];
        messagesInput.forEach((item) => {
            arr.push(validateRules[item.getAttribute("name")](item.value, item));
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
            arr.push(validateRules[item.getAttribute("name")](item.value, item));
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
        name: (value, target) => {
            if (/^[а-яё А-ЯЁ a-z A-Z 0-9._-]{1,30}$/g.test(value)) {
                valid(target);
                return true;
            } else {
                invalid(target);
                return false;
            }
            //
        },
        Email: (value, target) => {
            if (/^[a-z A-Z 0-9._-]+@[a-z A-Z 0-9]+\.[a-z A-Z]{2,}$/g.test(value)) {
                valid(target);
                return true;
            } else {
                invalid(target);
                return false;
            }
        },
        textarea: (value, target) => {
            if (value === "") {
                invalid(target);
                return false;
            } else {
                valid(target);
                return true;
            }
        },
        tel: (value, target) => {
            if (/^\+\d{1,1}\(\d{3,3}\)\-\d{3,3}\-\d{2,2}\-(?:\d{2,2}|\d{2,}\_)$/g.test(value)) {
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
                validateRules[target.getAttribute("name")](value, target);
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

    function Inputmask(inputSelector, maskStr) {
        this.input = document.querySelector(inputSelector);
        this.mask = maskStr;
        this.selectionCount = this.mask.indexOf("_");
        this.start = this.mask.indexOf("_");
        this.end = this.mask.lastIndexOf("_");
        this.valid;
        //функция для перемещения курсора в поле ввода
        this.selection = (event) => {
            event.target.selectionStart = this.selectionCount;
            event.target.selectionEnd = this.selectionCount;
        };
        //добавление маски и перемещение курсора во время фокуса
        this.addMask = (event) => {
            this.selection(event);
            if (event.target.value === "") {
                this.input.value = this.mask;
                this.selection(event);
            }
        };
        //получаем индекс курсора в глобальную переменную во время изменения положения кусора по клику
        this.cursor = () => {
            this.selectionCount = this.input.selectionStart - 1;
        };
        this.inputMethod = (event) => {
            event.preventDefault();
            if (/[0-9]/.test(parseInt(event.data))) {
                //при вводе чисел и прохождения условия
                if (this.selectionCount <= this.end && !this.valid) {
                    //получаем положение курсора до изменения строки
                    this.selectionCount = this.input.value.indexOf("_") + 1;
                    //изменяем строку
                    this.input.value = this.input.value.replace("_", event.data);
                    //двигаем курсор
                    this.selection(event);
                }
            } else if (event.data != null) {
                // удаляем все кроме чисел
                this.input.value = this.input.value.replace(/[a-z A-Z]/g, "");
            }
            if (event.data === null) {
                //при нажатии back space
                if (this.selectionCount >= this.start) {
                    //получаем индекс курсора в глобальную переменную во время удаления из строки
                    this.cursor();
                    //редактируем строку
                    this.input.value =
                        this.input.value.slice(0, this.input.selectionStart - 1) +
                        this.mask[this.input.selectionStart - 1] +
                        this.input.value.slice(this.input.selectionStart);
                    //
                    //сдвигаем курсор
                    this.selection(event);
                    this.selectionCount -= 1;
                }
            }
            this.valid = validateRules[event.target.getAttribute("name")](event.target.value, event.target);
        };
        this.input.addEventListener("focus", this.addMask, event);
        this.input.addEventListener("click", this.cursor, event);
        this.input.addEventListener("beforeinput", this.inputMethod, event);
    }

    new Inputmask("input[name='tel']", "+7(___)-___-__-__");
};
export { sendForm };
