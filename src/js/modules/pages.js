const pagesHistory = (Slider) => {
    const wrapper = document.querySelector(".section__main");
    const layerHeader = document.querySelector(".section__header");

    let obj = {
        homePage: {
            name: "home",
            title: "Аренда квартир",
            class: "home",
            content: `<main class="main main__bg overflow" id="del">
            <div class="main__content">
            <div class="main__content_title-wrap">
            <h1 class="main__content_title-wrap-title">Аренда квартир в Березниках</h1>
            <h3 class="subtitle">На длительный срок или посуточно</h3>
            <a href="#" class="button main__btn apart__link">Смотреть варианты</a>
            </div>
            <div class="main__content_image-wrap">
            <img src="images/mainImage-min.webp" alt="image" class="main__content_image" />
            </div>
            </div>
            </main>
            <div class="card" id="del">
            <div class="container">
                <ul class="card__wrapp">
                    <li class="card__item">
                    <div class="card__item_img">
                    <img src="icons/offer.svg" alt="" />
                        </div>
                        <p class="card__item_description">
                        Заключаем договоры, предоставляет отчётные документы
                        </p>
                        </li>
                        <li class="card__item">
                        <div class="card__item_img">
                        <img src="icons/many.svg" alt="" />
                        </div>
                        <p class="card__item_description">Наличный и безналичный расчёт</p>
                        </li>
                        <li class="card__item">
                        <div class="card__item_img">
                        <img src="icons/time.svg" alt="" />
                        </div>
                        <p class="card__item_description">Бронирование и заселение круглосуточно</p>
                        </li>
                        <li class="card__item">
                        <div class="card__item_img">
                        <img src="icons/save.svg" alt="" />
                        </div>
                        <p class="card__item_description">Полная конфиденциальность</p>
                        </li>
                        </ul>
                        </div>
                        </div>
                        <div class="apartments" id="del">
                        <div class="container">
                        <div class="apartments__wrapp">
                        <h1 class="title apartments__title">Наши квартиры</h1>
                        <ul class="apartments__cards">
                        <li class="apartments__card">
                        <figure>
                        <img src="images/apart1-min.webp" alt="" loading="lazy" />
                        </figure>
                        <div class="apartments__card_descr">
                        <h3 class="apartments__card_descr-title">Однокомнатная квартира</h3>
                        <h4 class="apartments__card_descr-title-mob">1 комната</h4>
                        <p class="apartments__card_descr-price">Сутки: <span>1 500 ₽</span></p>
                        <div>
                        <div>
                        <img src="icons/target.svg" alt="" />
                        <span class="apartments__card_descr-address"
                        >Березники, ул. Юбилейная 108</span
                        >
                        </div>
                        <button class="button apartments__card_descr-btn">Подробнее</button>
                        </div>
                        </div>
                        </li>
                        <li class="apartments__card">
                        <figure>
                        <img src="images/apart2-min.webp" alt="" loading="lazy" />
                        </figure>
                        <div class="apartments__card_descr">
                        <h3 class="apartments__card_descr-title">Трёхкомнатная квартира</h3>
                        <h4 class="apartments__card_descr-title-mob">3 комнаты</h4>
                        <p class="apartments__card_descr-price">Сутки: <span>1 300 ₽</span></p>
                        <div>
                        <div>
                        <img src="icons/target.svg" alt="" />
                        <span class="apartments__card_descr-address"
                        >Березники, ул. Гагарина 89</span
                        >
                        </div>
                        <button class="button apartments__card_descr-btn">Подробнее</button>
                        </div>
                        </div>
                        </li>
                        <li class="apartments__card">
                        <figure>
                        <img src="images/apart3-min.webp" alt="" loading="lazy" />
                        </figure>
                        <div class="apartments__card_descr">
                        <h3 class="apartments__card_descr-title">Двухкомнатная квартира</h3>
                        <h4 class="apartments__card_descr-title-mob">2 комнаты</h4>
                        <p class="apartments__card_descr-price">Сутки: <span>1 700 ₽</span></p>
                        <div>
                        <div>
                        <img src="icons/target.svg" alt="" />
                        <span class="apartments__card_descr-address"
                        >Березники, ул. Власова 14</span
                        >
                        </div>
                        <button class="button apartments__card_descr-btn">Подробнее</button>
                        </div>
                        </div>
                        </li>
                        <li class="apartments__card">
                        <figure>
                        <img src="images/apart4-min.webp" alt="" loading="lazy" />
                        </figure>
                        <div class="apartments__card_descr">
                        <h3 class="apartments__card_descr-title">Пятикомнатная квартира</h3>
                        <h4 class="apartments__card_descr-title-mob">5 комнат</h4>
                        <p class="apartments__card_descr-price">Сутки: <span>4 100 ₽</span></p>
                        <div>
                        <div>
                        <img src="icons/target.svg" alt="" />
                        <span class="apartments__card_descr-address"
                        >Березники, ул. Шмидта 10</span
                        >
                        </div>
                        <button class="button apartments__card_descr-btn">Подробнее</button>
                        </div>
                        </div>
                        </li>
                        </ul>
                        <a class="apartments__link apart__link" href="#">Смотреть все квартиры</a>
                        </div>
                        </div>
                        </div>
                        `,
        },
        details: {
            name: "details",
            title: "Аренда квартир",
            class: "details",
            content: `
                    <div class="container">
                        <h1 class="title details__title update"></h1>
                        <div class="details__content">
                            <div class="details__images-wrapp">
                                <div class="details__slider">
                                    <div class="slider">
                                        <div class="slider__track update__slids">
                                           
                                            
                                            
                                        </div>
                                    </div>
                                    <div class="slider__dots-wrapp">
                                        <div class="slider__prev">
                                            <svg width="40.000000" height="40.000000" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                <desc>
                                                        Created with Pixso.
                                                </desc>
                                                <defs>
                                                    <linearGradient x1="-20.000006" y1="-0.000027" x2="19.999992" y2="-2.000023" id="paint_linear_1_2065_0" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#FF7A00"/>
                                                        <stop offset="1.000000" stop-color="#FFB039"/>
                                                    </linearGradient>
                                                </defs>
                                                <circle id="Ellipse 9" r="20.000000" transform="matrix(-1 0 0 1 20 20)" fill="url(#paint_linear_1_2065_0)" fill-opacity="1.000000"/>
                                                <path id="Vector" d="M22.71 11.68C22.8 11.59 22.87 11.47 22.92 11.35C22.97 11.23 22.99 11.1 22.99 10.97C22.98 10.84 22.95 10.71 22.9 10.59C22.84 10.47 22.77 10.36 22.67 10.27C22.58 10.18 22.46 10.11 22.34 10.06C22.22 10.01 22.09 9.99 21.96 10C21.83 10 21.7 10.03 21.58 10.08C21.46 10.14 21.35 10.21 21.26 10.31L12.76 19.31C12.58 19.49 12.49 19.74 12.49 20C12.49 20.25 12.58 20.5 12.76 20.68L21.26 29.68C21.35 29.78 21.46 29.86 21.58 29.92C21.7 29.97 21.83 30 21.96 30.01C22.09 30.01 22.22 29.99 22.35 29.94C22.47 29.9 22.59 29.82 22.68 29.73C22.78 29.64 22.86 29.53 22.91 29.41C22.96 29.29 22.99 29.16 23 29.03C23 28.9 22.97 28.76 22.93 28.64C22.88 28.52 22.81 28.41 22.71 28.31L14.86 20L22.71 11.68Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero"/>
                                            </svg>
                                        </div>
                                        <div class="slider__dots ">
                                            <div class="border">
                                            <div class="update__slids preview__track"> </div>
                                            </div>
                                        </div>
                                        <div class="slider__next">
                                            <svg width="40.000000" height="40.000000" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                <desc>
                                                        Created with Pixso.
                                                </desc>
                                                <defs>
                                                    <linearGradient x1="-0.000006" y1="19.999973" x2="39.999992" y2="17.999977" id="paint_linear_1_2062_0" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#FF7A00"/>
                                                        <stop offset="1.000000" stop-color="#FFB039"/>
                                                    </linearGradient>
                                                </defs>
                                                <circle id="Ellipse 9" cx="20.000000" cy="20.000000" r="20.000000" fill="url(#paint_linear_1_2062_0)" fill-opacity="1.000000"/>
                                                <path id="Vector" d="M17.28 11.68C17.19 11.59 17.12 11.47 17.07 11.35C17.02 11.23 17 11.1 17 10.97C17.01 10.84 17.04 10.71 17.09 10.59C17.15 10.47 17.22 10.36 17.32 10.27C17.41 10.18 17.53 10.11 17.65 10.06C17.77 10.01 17.9 9.99 18.03 10C18.16 10 18.29 10.03 18.41 10.08C18.53 10.14 18.64 10.21 18.73 10.31L27.23 19.31C27.41 19.49 27.5 19.74 27.5 20C27.5 20.25 27.41 20.5 27.23 20.68L18.73 29.68C18.64 29.78 18.53 29.86 18.41 29.92C18.29 29.97 18.16 30 18.03 30.01C17.9 30.01 17.77 29.99 17.64 29.94C17.52 29.9 17.4 29.82 17.31 29.73C17.21 29.64 17.13 29.53 17.08 29.41C17.03 29.29 17 29.16 17 29.03C16.99 28.9 17.02 28.76 17.06 28.64C17.11 28.52 17.18 28.41 17.28 28.31L25.13 20L17.28 11.68Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero"/>
                                            </svg>

                                        </div>
                                    </div>
                                </div>
                                <div class="details__info">
                                    <h1 class="apartmentsall__cards_card-title details__info_title update">
                                        
                                    </h1>
                                    <p class="apartmentsall__cards_card-descr details__info_descr update">
                                       
                                    </p>
                                    <p class="apartmentsall__cards_card-price details__info_price update"></p>
                                    <p class="apartmentsall__cards_card-address details__info_address">
                                        <img src="icons/target.svg" alt="" class="apartmentsall__cards_card-icon" />
                                        <span class="update"></span>
                                    </p>
                                    <a href="#" class="button apartmentsall__cards_card-btn details__info-btn"
                                        >Забронировать</a
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="details__list-wrapp">
                            <h2 class="details__list-wrapp_title">Оснащение:</h2>
                            <div class="details__list-wrapp_content update__list">
                                
                            </div>
                        </div>
                        <p class="details__descr">Все сделано с любовью для Вас!</p>
                        <a href="#" class="button details__allapart_btn apart__link">Смотреть все квартиры</a>
                    </div>
               
            `,
        },
        apartments: {
            name: "apartments",
            title: "Наши квартиры",
            class: "apartmentsall",
            content: `<div class="container">
                        <h1 class="title apartmentsall__title">Наши квартиры</h1>
                        <ul class="apartmentsall__cards">
                        <li class="apartmentsall__cards_card">
                        <img src="images/apartall-min.webp" alt="" class="apartmentsall__cards_card-img" />
                        <h1 class="apartmentsall__cards_card-title">Однокомнатная квартира</h1>
                        <p class="apartmentsall__cards_card-descr">
                        СДАМ 1- ую квартиру улучшенной планировки с лоджией, есть всё необходимое спальные
                        места кровать 2...
                        </p>
                        <p class="apartmentsall__cards_card-price">1 200 ₽ за сутки</p>
                        <p class="apartmentsall__cards_card-address">
                        <img src="icons/target.svg" alt="" class="apartmentsall__cards_card-icon" />
                        <span>Березники, ул. Юбилейная 108</span>
                        </p>
                        <a href="#" class="button apartmentsall__cards_card-btn" id="apart1">Подробнее</a>
                        </li>
                        <li class="apartmentsall__cards_card ">
                        <img src="images/apartall1-min.webp" alt="" class="apartmentsall__cards_card-img" />
                        <h1 class="apartmentsall__cards_card-title">Однокомнатная квартира</h1>
                        <p class="apartmentsall__cards_card-descr">
                        СДАМ 1- ую квартиру улучшенной планировки с лоджией, есть всё необходимое спальные
                        места кровать 2...
                        </p>
                        <p class="apartmentsall__cards_card-price">1 200 ₽ за сутки</p>
                        <p class="apartmentsall__cards_card-address">
                        <img src="icons/target.svg" alt="" class="apartmentsall__cards_card-icon" />
                        <span>Березники, ул. Юбилейная 108</span>
                        </p>
                        <a href="#" class="button apartmentsall__cards_card-btn" id="apart2">Подробнее</a>
                        </li>
                        <li class="apartmentsall__cards_card">
                        <img src="images/apartall3-min.webp" alt="" class="apartmentsall__cards_card-img" />
                        <h1 class="apartmentsall__cards_card-title">Однокомнатная квартира</h1>
                        <p class="apartmentsall__cards_card-descr">
                        СДАМ 1- ую квартиру улучшенной планировки с лоджией, есть всё необходимое спальные
                        места кровать 2...
                        </p>
                        <p class="apartmentsall__cards_card-price">1 200 ₽ за сутки</p>
                        <p class="apartmentsall__cards_card-address">
                        <img src="icons/target.svg" alt="" class="apartmentsall__cards_card-icon" />
                        <span>Березники, ул. Юбилейная 108</span>
                        </p>
                        <a href="#" class="button apartmentsall__cards_card-btn" id="apart3">Подробнее</a>
                        </li>
                        <li class="apartmentsall__cards_card">
                        <img src="images/apartall4-min.webp" alt="" class="apartmentsall__cards_card-img" />
                        <h1 class="apartmentsall__cards_card-title">Однокомнатная квартира</h1>
                        <p class="apartmentsall__cards_card-descr">
                        СДАМ 1- ую квартиру улучшенной планировки с лоджией, есть всё необходимое спальные
                        места кровать 2...
                        </p>
                        <p class="apartmentsall__cards_card-price">1 200 ₽ за сутки</p>
                        <p class="apartmentsall__cards_card-address">
                        <img src="icons/target.svg" alt="" class="apartmentsall__cards_card-icon" />
                        <span>Березники, ул. Юбилейная 108</span>
                        </p>
                        <a href="#" class="button apartmentsall__cards_card-btn" id="apart4">Подробнее</a>
                        </li>
                        <li class="apartmentsall__cards_card">
                        <img src="images/apartall5-min.webp" alt="" class="apartmentsall__cards_card-img" />
                        <h1 class="apartmentsall__cards_card-title">Однокомнатная квартира</h1>
                        <p class="apartmentsall__cards_card-descr">
                        СДАМ 1- ую квартиру улучшенной планировки с лоджией, есть всё необходимое спальные
                        места кровать 2...
                        </p>
                        <p class="apartmentsall__cards_card-price">1 200 ₽ за сутки</p>
                        <p class="apartmentsall__cards_card-address">
                        <img src="icons/target.svg" alt="" class="apartmentsall__cards_card-icon" />
                        <span>Березники, ул. Юбилейная 108</span>
                        </p>
                        <a href="#" class="button apartmentsall__cards_card-btn" id="apart5">Подробнее</a>
                        </li>
                        <li class="apartmentsall__cards_card ">
                        <img src="images/apartall6-min.webp" alt="" class="apartmentsall__cards_card-img" />
                        <h1 class="apartmentsall__cards_card-title">Однокомнатная квартира</h1>
                        <p class="apartmentsall__cards_card-descr">
                        СДАМ 1- ую квартиру улучшенной планировки с лоджией, есть всё необходимое спальные
                        места кровать 2...
                        </p>
                        <p class="apartmentsall__cards_card-price">1 200 ₽ за сутки</p>
                        <p class="apartmentsall__cards_card-address">
                        <img src="icons/target.svg" alt="" class="apartmentsall__cards_card-icon" />
                        <span>Березники, ул. Юбилейная 108</span>
                        </p>
                        <a href="#" class="button apartmentsall__cards_card-btn" id="apart6">Подробнее</a>
                        </li>
                        <li class="apartmentsall__cards_card ">
                        <img src="images/apartall7-min.webp" alt="" class="apartmentsall__cards_card-img" />
                        <h1 class="apartmentsall__cards_card-title">Однокомнатная квартира</h1>
                        <p class="apartmentsall__cards_card-descr">
                        СДАМ 1- ую квартиру улучшенной планировки с лоджией, есть всё необходимое спальные
                        места кровать 2...
                        </p>
                        <p class="apartmentsall__cards_card-price">1 200 ₽ за сутки</p>
                        <p class="apartmentsall__cards_card-address">
                        <img src="icons/target.svg" alt="" class="apartmentsall__cards_card-icon" />
                        <span>Березники, ул. Юбилейная 108</span>
                        </p>
                        <a href="#" class="button apartmentsall__cards_card-btn" id="apart7">Подробнее</a>
                        </li>
                        </ul>
                        </div>`,
        },
    };

    history.replaceState(obj.homePage, "", document.location.href);

    const historyApi = {
        home(classSelector, addContent, titleName) {
            this.displayContent(classSelector, addContent, titleName);
            apartBtn();
        },
        apartments(classSelector, addContent, titleName) {
            this.displayContent(classSelector, addContent, titleName);
            detailsBtn();
        },
        details(classSelector, addContent, titleName) {
            this.displayContent(classSelector, addContent, titleName);
            detailsBtn();
            apartBtn();
        },
        displayContent(classSelector, addContent, titleName) {
            removeElements(elementsToRemove("#del"));
            let div = document.createElement("div");
            div.setAttribute("id", "del");
            div.classList.add(classSelector, "overflow");
            div.innerHTML = addContent;
            wrapper.insertAdjacentElement("afterbegin", div);
            document.querySelector("title").textContent = titleName;
        },
    };
    window.addEventListener("popstate", (e) => {
        e.preventDefault();
        if (e.state) {
            historyApi[e.state.name](e.state.class, e.state.content, e.state.title);
            preventDef();
            if (e.state.name === "details") {
                let link = localStorage.getItem("apartlink");
                getContent(link).then((d) => {
                    if (d) {
                        addContent(d);
                        const border = document.querySelector(".border");
                        const track = document.querySelector(".preview__track");
                        const itemList = document.querySelectorAll(".slider__dots-dot");
                        const next = document.querySelector(".slider__next");
                        const prev = document.querySelector(".slider__prev");
                        //
                        const touchStart = document.querySelector(".slider__dots-wrapp");
                        const touchEnd = document.querySelector(".slider__dots ");
                        let slider = new Slider(border, track, itemList, next, prev, touchStart, touchEnd);
                    } else {
                        console.log("err");
                    }
                });
            }
        } else {
            console.log("not state");
        }
    });
    function apartBtn() {
        let link = document.querySelectorAll(".apart__link");
        link.forEach((item) => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
                if (history.state.name !== "apartments") {
                    history.pushState(obj.apartments, "", "#apart");
                    historyApi.apartments("apartmentsall", obj.apartments.content, obj.apartments.title);
                    preventDef();
                    scrollDisplay();
                }
            });
        });
    }
    apartBtn();

    function homeBtn() {
        let link = document.querySelectorAll(".home__link");
        link.forEach((item) => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
                if (history.state.name !== "home") {
                    history.pushState(obj.homePage, "", "#home");
                    historyApi.home("home", obj.homePage.content, obj.homePage.title);
                    preventDef();
                    scrollDisplay();
                }
            });
        });
    }
    homeBtn();
    function detailsBtn() {
        const link = document.querySelectorAll(".apartmentsall__cards_card-btn");
        link.forEach((item) => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
                if (history.state.name !== "details") {
                    history.pushState(obj.details, "", "#details");
                    historyApi.details("details", obj.details.content, obj.details.title);
                    localStorage.setItem("apartlink", e.target.getAttribute("id"));
                    scrollDisplay();
                    getContent(e.target.getAttribute("id")).then((d) => {
                        if (d) {
                            addContent(d);
                            const border = document.querySelector(".border");
                            const track = document.querySelector(".preview__track");
                            const itemList = document.querySelectorAll(".slider__dots-dot");
                            const next = document.querySelector(".slider__next");
                            const prev = document.querySelector(".slider__prev");
                            //
                            const touchStart = document.querySelector(".slider__dots-wrapp");
                            const touchEnd = document.querySelector(".slider__dots ");
                            let slider = new Slider(border, track, itemList, next, prev,touchStart,touchEnd);
                        } else {
                            console.log("err");
                        }
                    });
                    preventDef();

                    ///
                }
            });
        });
    }
    detailsBtn();
    function removeElements(arr) {
        arr.forEach((item) => {
            if (item) {
                item.remove();
            }
        });
    }

    function elementsToRemove(id) {
        let arr = document.querySelectorAll(id);
        return arr;
    }

    function preventDef() {
        const all = document.querySelectorAll("a[href='#']");
        /* console.log(all); */
        all.forEach((item) => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
            });
        });
    }
    preventDef();

    async function getContent(url) {
        try {
            let respons = await fetch("page.json");
            let data = await respons.json();
            return data.apartslist[url];
        } catch (err) {
            console.log(err.message);
            return null;
        }
    }
    function addContent(data) {
        const info = document.querySelectorAll(".update");
        const slids = document.querySelectorAll(".update__slids");
        const list = document.querySelector(".details__list-wrapp_content,.update__list");
        let i = 0;
        let b = 0;
        let listArr = Array.from(Object.values(data.equipmentlist));
        //
        for (let key in data) {
            if (typeof data[key] !== "object") {
                info[i].textContent = data[key];
                i++;
            }
        }
        //
        for (let i = 0; i < 3; i++) {
            let ul = document.createElement("ul");
            ul.classList.add("details__list-wrapp_list", `list${i + 1}`);
            let c = 0;
            for (; b <= listArr.length; b++) {
                if (listArr[b]) {
                    c++;
                    let li = document.createElement("li");
                    li.classList.add("details__list-wrapp_list-item");
                    li.textContent = listArr[b];
                    ul.append(li);
                    if (c === 5) break;
                }
            }
            b += 1;
            list.append(ul);
        }
        //
        for (let i = 0; i < slids.length; i++) {
            for (let c = 0; c < data.imageurl.length; c++) {
                let img = document.createElement("img");
                img.src = data.imageurl[c];
                if (i === 0) {
                    slids[i].append(img);
                } else {
                    let div = document.createElement("div");
                    div.classList.add("slider__dots-dot");
                    div.append(img);
                    slids[i].append(div);
                }
            }
        }
    }

    function scrollDisplay() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }
};
export { pagesHistory };
