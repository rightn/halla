$(document).ready(function () {

});
window.onload = function () {

    // 비주얼슬라이드
    let sw_visual = new Swiper('.sw-visual', {
        loop: true,
        navigation: {
            prevEl: 'sw-visual-bt-prev',
            nextEl: 'sw-visual-bt-next'
        },
        pagination: {
            el: ".swiper-pagination"
        }
    });

    let sw_sin = new Swiper('.sw-sin', {
        loop: true,
        pagination: {
            el: ".sin-pg"
        }
    })

};