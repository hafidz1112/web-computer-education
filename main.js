
const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
});

window.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        slidesPerView: 2, // default di desktop

        breakpoints: {
            0: {
                slidesPerView: 1 // untuk layar kecil, misalnya HP
            },
            768: {
                slidesPerView: 3 // untuk layar tablet ke atas
            }
        }
    });
});

