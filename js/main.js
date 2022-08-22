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
});
