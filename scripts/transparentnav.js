$(document).ready(function() {
    $(window).scroll(function() {
        const target = document.querySelectorAll('.foxparallax');

        for(let i = 0; i < target.length; i++) {
            var pos = window.pageYOffset * target[i].dataset.parallaxrate;

            target[i].style.transform = 'translate3d(0px, ' + pos +'px, 0px)'
        }

    });
});
