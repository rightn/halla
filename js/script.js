$(document).ready(function () {
    // 모달창
    let modal_close = $('.modal-close');
    let modal = $('.modal');
    modal_close.click(function () {
        modal.hide();
    });
    let headerBottom = $('.header-bottom');
    let gnbBottomLiA = $('.gnb-bottom>li');
    $.each(gnbBottomLiA, function (index, item) {
        $(this).mouseenter(function () {
            headerBottom.addClass('header-bottom-active');
        });
        $(this).mouseleave(function () {
            headerBottom.removeClass('header-bottom-active');
        });
    })
});
window.onload = function () {

    // 비주얼슬라이드
    let sw_visual = new Swiper('.sw-visual', {
        loop: true,
        speed: 1000,
        navigation: {
            prevEl: '.sw-visual-bt-prev',
            nextEl: '.sw-visual-bt-next'
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