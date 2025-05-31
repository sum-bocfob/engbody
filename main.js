// *Swiper--------------------------------------
const swiper = new Swiper(".swiper", {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        // el: ".swiper-scrollbar",
    },
});

// HTML構造のみを読み込んでからの処理
$(function () {
    const header = $(".header");
    const header_btn = $(".header button");
    const top_btn = $(".top-btn");
    const mv_bg = $(".mv__bg-container");
    const question = $(".faq-list__question");

    $(window).scroll(function () {
        // *スクロールでヘッダー背景、ボタン表示
        // *スクロールでトップに戻るボタン表示非表示
        if ($(this).scrollTop() > 300) {
            header.addClass("show-bg");
            header_btn.fadeIn(300).css("display", "flex");
            top_btn.fadeIn(300).css("display", "block");
        } else {
            header.removeClass("show-bg");
            header_btn.fadeOut(300);
            top_btn.fadeOut(300);
        }
    });

    // *TOPへ戻る
    top_btn.click(function () {
        $("html, body").animate(
            {
                scrollTop: 0,
            },
            400
        );
    });

    // *FAQ アコーディオン
    question.click(function () {
        $(this).next().slideToggle(200);
        iconText = $(this).children(".icon-arrow").html();
        if (iconText === "keyboard_arrow_down") {
            $(this).children(".icon-arrow").html("keyboard_arrow_up");
        } else {
            $(this).children(".icon-arrow").html("keyboard_arrow_down");
        }
    });

    // *MV画像フェードイン
    mv_bg.fadeIn(3000);
});

// 画像もすべて読み込んでからの処理
$(window).on("load", function () {
    const training_card = $(".training .card");
    const training_card_top = training_card.offset().top;
    const food_card = $(".food .card");
    const food_card_top = food_card.offset().top;

    $(window).scroll(function () {
        // *Training Food スクロールで下からアニメーション
        if ($(this).scrollTop() > training_card_top - $(this).height()) {
            training_card.addClass("is-show");
        }
        if ($(this).scrollTop() > food_card_top - $(this).height()) {
            food_card.addClass("is-show");
        }
    });
});
