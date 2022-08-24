window.addEventListener("DOMContentLoaded", () => {
    const mainSlide = new Swiper(".mainSlide", {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
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
});
