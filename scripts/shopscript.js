$(document).ready(function () {
    //parallax
    $(window).scroll(function () {
        const target = document.querySelectorAll('.foxparallax');

        for (let i = 0; i < target.length; i++) {
            var pos = window.pageYOffset * target[i].dataset.parallaxrate;

            target[i].style.transform = 'translate3d(0px, ' + pos + 'px, 0px)'
        }

    });

    function sliderCreator() {
        $(".slider-range").slider({
            range: true,
            min: 0,
            max: 250,
            values: [0, 250],
            slide: function (event, ui) {
                $(".pricerange-amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        $(".pricerange-amount").val("$" + $(".slider-range").slider("values", 0) +
            " - $" + $(".slider-range").slider("values", 1));
    }
    sliderCreator();



    let allgames = $(".shop-item");
    let selectedfilters = [];


    //Filter the checkboxes

    let checkboxes = $("input[type=checkbox]");
    checkboxes.change(function () { //check if checkboxes are changed
        if ($(this).is(':checked')) {
            allgames.hide();
            selectedfilters.push(this.id.slice(0, -7));
            for (let i = 0; i < selectedfilters.length; i++) {
                $("." + selectedfilters[i]).show();
            }
            filter();
        } else {
            selectedfilters.splice(selectedfilters.indexOf(this.id.slice(0, -7)));
            if (selectedfilters[0]) {
                allgames.hide();
                for (let i = 0; i < selectedfilters.length; i++) {
                    $("." + selectedfilters[i]).show();
                }
                filter();
            } else {
                allgames.show();
                filter();
            }
        }
    });

    //Filter by price
    function filter() {
        let lowestprice = document.getElementById("pricerange-amount").value.slice(0, 4);
        let highestprice = document.getElementById("pricerange-amount").value.slice(4);
        highestprice = highestprice.replace(/\D/g, '');
        lowestprice = lowestprice.replace(/\D/g, '');
        for (let i = 0; i < allgames.length; i++) {
            let price = allgames[i].querySelector('.item-price').innerHTML.replace(/\D/g, '');
            price = parseInt(price);


            if (!(price >= lowestprice && price <= highestprice)) {
                allgames[i].style.display = "none";
                console.log("poof");
            }
            //if the current game doesnt fit in the pricerange, remove it
            //if it does, execute below code
            else if (selectedfilters[0]) {

                let elementClasses = $(allgames[i]).attr("class").split(" ");
                console.log(elementClasses);
                for (let j = 0; j < elementClasses.length; j++) {
                    if (selectedfilters.includes(elementClasses[j])) {
                        console.log(allgames[i]);
                        allgames[i].style.display = "block";
                    }
                }

            } else {
                console.log("unpoof");
                allgames[i].style.display = "block";
            }

        }
    }

    //onclick events for the slider

    $('.ui-slider-handle').click(function () {
        filter();
    });
    $('.ui-slider-handle').mouseout(function () {
        filter();
    });

});