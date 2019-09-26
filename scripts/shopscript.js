$(function () {
    $(".slider-range").slider({
        range: true,
        min: 0,
        max: 200,
        values: [0, 200],
        slide: function (event, ui) {
            $(".pricerange-amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $(".pricerange-amount").val("$" + $(".slider-range").slider("values", 0) +
        " - $" + $(".slider-range").slider("values", 1));
});

$(document).ready(function () {
    $(window).scroll(function () {
        const target = document.querySelectorAll('.foxparallax');

        for (let i = 0; i < target.length; i++) {
            var pos = window.pageYOffset * target[i].dataset.parallaxrate;

            target[i].style.transform = 'translate3d(0px, ' + pos + 'px, 0px)'
        }

    });
});