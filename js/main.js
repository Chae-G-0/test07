window.addEventListener("DOMContentLoaded", () => {
    const mainSlide = new Swiper(".mainSlide", {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });

    const SC = document.querySelectorAll(".active_event");
    window.addEventListener("scroll", () => {
        let sct = window.scrollY;
        SC.forEach((el) => {
            sct > el.offsetTop - 250 ? el.classList.add("on") : el.classList.remove("on");
        });
    });

    const MENU = document.querySelectorAll(".detail div");
    const TAB = document.querySelectorAll(".decoLeft>div");
    MENU.forEach((el, idx) => {
        el.addEventListener("click", () => {
            MENU.forEach((el) => el.classList.remove("on"));
            el.classList.add("on");
            TAB.forEach((el) => el.classList.remove("on"));
            TAB[idx].classList.add("on");
        });
    });

    const SURVICE = document.querySelectorAll(".mainCS .right>ul>li");
    const UL = document.querySelectorAll(".mainCS .right>ul>li>inner");
    SURVICE.forEach((el) => {
        el.addEventListener("click", () => {
            SURVICE.forEach((el) => el.classList.remove("on"));
            el.classList.add("on");
            UL.forEach((el) => el.classList.remove("on"));
            UL[idx].classList.add("on");
        });
    });
});
