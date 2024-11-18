const pagesHistory = () => {
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
        header: `
                    <section class="section__header">
                    <div class="container">
                    <header class="header">
                    <div class="header__menu-burger"><span></span><span></span><span></span></div>
                    <a href="#" class="header__logo">
                    <img src="icons/logo.svg" alt="" />
                    </a>
                    <nav class="nav">
                    <ul class="nav__list">
                    <li class="nav__item">
                    <a href="#" class="nav__list-item_link">Главная</a>
                    </li>
                    <li class="nav__item">
                    <a href="#" class="nav__list-item_link">Квартиры</a>
                    </li>
                    <li class="nav__item">
                    <a href="#" class="nav__list-item_link">Контакты</a>
                    </li>
                    <li class="nav__item">
                    <a href="#" class="nav__list-item_link">О нас</a>
                    </li>
                    </ul>
                    </nav>
                    <div class="info">
                    <div>
                    <a href="mailto:mailto:mail@yandex.ru">
                    <img src="icons/mail.svg" alt="" />
                    </a>
                    <a href="mailto:mail@yandex.ru">mail@yandex.ru</a>
                    </div>
                    <div>
                    <a href="tel:+79197142500">
                    <img src="icons/phon.svg" alt="" />
                    </a>
                    <a href="tel:+79197142500">+7 (919) 714-25-00</a>
                    </div>
                    <a href="#" class="button info__btn">Заказать звонок</a>
                    </div>
                    </header>
                    </div>
                    </section>
                    `,
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
                        <a href="#" class="button apartmentsall__cards_card-btn">Подробнее</a>
                        </li>
                        <li class="apartmentsall__cards_card">
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
                        <a href="#" class="button apartmentsall__cards_card-btn">Подробнее</a>
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
                        <a href="#" class="button apartmentsall__cards_card-btn">Подробнее</a>
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
                        <a href="#" class="button apartmentsall__cards_card-btn">Подробнее</a>
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
                        <a href="#" class="button apartmentsall__cards_card-btn">Подробнее</a>
                        </li>
                        <li class="apartmentsall__cards_card">
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
                        <a href="#" class="button apartmentsall__cards_card-btn">Подробнее</a>
                        </li>
                        <li class="apartmentsall__cards_card">
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
                        <a href="#" class="button apartmentsall__cards_card-btn">Подробнее</a>
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
            if (e.state.name === "apartments") {
                layerHeader.classList.add("apartmentsall__header");
            } else {
                layerHeader.classList.remove("apartmentsall__header");
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
                    layerHeader.classList.add("apartmentsall__header");
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
                    layerHeader.classList.remove("apartmentsall__header");
                }
            });
        });
    }
    homeBtn();
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
        console.log(all);
        all.forEach((item) => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
            });
        });
    }
    preventDef();
};
export { pagesHistory };
