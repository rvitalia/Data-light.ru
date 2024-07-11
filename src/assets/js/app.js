document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper__main', {
        slidesPerView: 4,      // Количество слайдов на странице
        spaceBetween: 16,      // Отступ между слайдами в пикселях
        loop: true,            // Включение циклического режима
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // when window width is >= 320px
            100: {
                slidesPerView: 1,
                spaceBetween: 50,
            },
            
            650: {
                slidesPerView: 2,
                spaceBetween: 50,
            },
            768: {
                spaceBetween: 30,
                slidesPerView: 2,
            },
            // when window width is >= 480px
            1000: {
                spaceBetween: 30,
                slidesPerView: 3,
            },
            // when window width is >= 640px
            1200: {
                spaceBetween: 16,
                slidesPerView: 4,
            }
        }
    });

});


