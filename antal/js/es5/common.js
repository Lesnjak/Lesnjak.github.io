(function () {
    'use strict';

    jQuery(document).ready(function ($) {

        $("#menu").mmenu({
            "extensions": ["theme-dark", "pagedim-black"],

            "offCanvas": {
                "position": "right",
                "zposition": "next"

            }
        });
        $('#nav-icon2').click(function () {
            $(this).toggleClass('open');
            $(".mobile").slideToggle({
                duration: 'slow'

            });
        });
        $(window).scroll(function () {
            if ($(this).scrollTop() > 400) {
                $(".header1").addClass("show-menu");
            } else {
                $(".header1").removeClass("show-menu");
            }
        });
        $('.catalog-button').click(function () {
            $(".open-catalog .open-catalog-parent").slideToggle({
                duration: 'slow'

            });
        });
        $('.add').click(function () {
            var stop = 80;
            $('.add').not(this).removeClass('add-minus');
            $('.faq-content').not($(this).parent().children('.faq-content')).slideUp({
                duration: 'slow'
            });
            $(this).toggleClass('add-minus');
            $(this).parent().children('.faq-content').slideToggle({
                duration: 'slow'
            });
            var res = 1;
            var stopSet = setInterval(function (params) {
                $(".scroll-container").getNiceScroll().resize();
                res++;
                if (res > stop) {
                    clearInterval(stopSet);
                }
            }, 10);
        });

        $('input[type="radio"]').change(function () {
            var res = 1;
            var stopSet = setInterval(function (params) {
                $(".scroll-container").getNiceScroll().resize();
                res++;
                if (res > stop) {
                    clearInterval(stopSet);
                }
            }, 10);
        });
        $('.cart-button').click(function () {
            $(this).toggleClass('cart-button1');
            $('.shopping-cart').toggleClass('open');
        });
        $('.cl').click(function () {
            $('.form-sec').removeClass('formShow');
        });

        $('.search-button').click(function () {

            $('.open-search-box').toggleClass('open-search-box-show');
        });
        $('.city-box').click(function () {
            $('html').one('click', function () {
                $(".open-change-city").removeClass("open-change-city-show");
            });
            $('.open-change-city').toggleClass('open-change-city-show');
            event.stopPropagation();
        });
        $(".change-language p").click(function () {
            var val = $(this).clone();
            $(".language-block").html(val);
        });

        function showForm(button, form, addclass) {
            $(button).click(function () {
                $('.form-sec').removeClass("formShow");
                $(form).addClass(addclass);
                return false;
            });
            $(form).click(function (e) {
                if (e.target.classList[0] == "form-sec") {
                    $(form).removeClass(addclass);
                }
            });
        }
        showForm('.chef-b', '.chef', 'formShow');
        showForm('.serv-b', '.serv', 'formShow');
        $('.about-button').click(function () {
            $('.about').css('display', 'block');
            $('.left-content').css('display', 'none');
            $(this).css('display', 'none');
        });
        $('.about-beck').click(function () {
            $('.about').css('display', 'none');
            $('.left-content').css('display', 'block');
            $('.about-button').css('display', 'block');
        });
        $('.feedback-form').on('submit', function (evt) {
            var http = new XMLHttpRequest(),
                f = this;
            var parameter = $(this).attr('data-parameter');
            var site = '';
            if (f.site) {
                site = f.site.value;
            }
            http.open("POST", "http://www.mychef.com.ua/contacts.php", true);
            http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            http.send($(this).serialize());
            evt.preventDefault();
            location.reload();
        });
        /////////////////////////////////////////////////////////

        /////////////////line-effect///////////////
        $(window).scroll(function () {
            $('.title').each(function () {
                var imagePos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow + 500) {
                    $(this).addClass('title-new');
                }
            });
        });
        /////////////////////video-block///////////////
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            prevArrow: '<button class="next"></button>',
            nextArrow: '<button class="prev"></button>',
            asNavFor: '.slider-nav',
            dots: false
        });
        $('.slider-nav').slick({
            slidesToShow: 5, // 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            arrows: false,
            dots: false,
            centerMode: true,
            focusOnSelect: true,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3

                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2

                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1

                }
            }]
        });
        $('.slider-second').slick({
            infinite: true,
            slidesToShow: 1,
            prevArrow: '<button class="prev"></button>',
            nextArrow: '<button class="next"></button>',
            dots: true

        });
        ///////////////////favorite-slider///////////
        $('.favorite-slider').slick({
            infinite: true,
            slidesToShow: 4,
            prevArrow: '<button class="prev"></button>',
            nextArrow: '<button class="next"></button>',
            responsive: [{
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4
                }
            }, {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 993,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 620,
                settings: {

                    slidesToShow: 1

                }
            }]
        });
        ///////////////////////////////////////////////////////////////////////////////////////////////////
        $('.big').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            asNavFor: '.small',
            adaptiveHeight: true,
            prevArrow: '<button class="prev"></button>',
            nextArrow: '<button class="next"></button>',
            responsive: [{
                breakpoint: 1200,
                settings: {}
            }, {
                breakpoint: 1062,
                settings: {}
            }, {
                breakpoint: 768,
                settings: {}
            }]
        });
        $('.small').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.big',
            dots: false,
            focusOnSelect: true,
            centerPadding: '40px',
            arrows: false,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            }]
        });
        ////////////////////////////////////////
        // poste
        // r frame click event
        $(document).on('click', '.js-videoPoster', function (ev) {
            ev.preventDefault();
            var $poster = $(this);
            var $wrapper = $poster.closest('.js-videoWrapper');
            videoPlay($wrapper);
        });

        ///////////////////////iframe-style//////////////
        function videoPlay($wrapper) {
            var $iframe = $wrapper.find('.js-videoIframe');
            var src = $iframe.data('src');
            $wrapper.addClass('videoWrapperActive');
            $iframe.attr('src', src);
        }
        //////////////////////like////////////////
        $('.like-input').on('change', function () {
            $(this).parent().toggleClass('like');
        });
        /////////////////stars/////////////////////
        $('.rating1 input').change(function () {
            var $radio = $(this);
            $('.rating1 .selected').removeClass('selected');
            $radio.closest('label').addClass('selected');
        });
        /////////////////scroll-style///////////////////
        $(".scroll-container").niceScroll({
            cursorcolor: "#fff",
            cursoropacitymin: 0.3,
            background: "#737373",
            cursorborder: "0",
            autohidemode: false,
            cursorminheight: 30
        });
        $(".over-main").niceScroll({
            cursorcolor: "#b3b3b3",
            cursoropacitymin: 0.3,
            background: "#e5e5e5",
            cursorborder: "0",
            autohidemode: false,
            cursorminheight: 30
        });
        $(".form-sec").niceScroll({
            cursorcolor: "#b3b3b3",
            cursoropacitymin: 0.3,
            background: "#e5e5e5",
            cursorborder: "0",
            autohidemode: false,
            cursorminheight: 30
        });

        // $(".dtBox").DateTimePicker();


        $(".scroll-container").getNiceScroll().resize();
        $(document).scroll(function () {

            $(".scroll-container").getNiceScroll().resize();
        });
        // $(".scroll-box").niceScroll({
        //     cursorcolor: "#fff",
        //     cursoropacitymin: 0.3,
        //     background: "#737373",
        //     cursorborder: "0",
        //     autohidemode: false,
        //     cursorminheight: 30
        // });
        //
        // $(".scroll-box").getNiceScroll().resize();
        // $("html").mouseover(function() {
        //     $(".scroll").getNiceScroll().resize();
        // });
        ///////////////////////////add cart//////////////////////////
        var input = $('.in'),
            input_val = parseInt(input.val()),
            btn_add = $('.add'),
            btn_remove = $('.remove');

        input.keyup(function (e) {
            var res = $(this);
            res = parseInt(input.val());

            var x = event.charCode || event.keyCode;
            if (x > 96 && x < 106) {
                $(this).val(res).change();
            } else if (x > 48 && x < 58) {
                $(this).val(res).change();
            } else if (x == 8) {
                res = '';
                $(this).val(res).change();
            } else {
                res = 1;
                $(this).val(res).change();
            }
        });

        btn_add.click(function (e) {
            var inputVal = $(this).parent().children('.in').val();
            if (e.shiftKey) {
                inputVal += 10;
            } else {
                inputVal++;
            }
            $(this).parent().children('.in').val(inputVal).change();
        });

        btn_remove.click(function (e) {
            var inputVal = $(this).parent().children('.in').val();

            if (inputVal > 11 && e.shiftKey) {
                inputVal -= 10;
            } else if (inputVal > 1) {
                inputVal--;
            }
            $(this).parent().children('.in').val(inputVal).change();
        });
        /////////////////////////////////////////////
        // count plus/minus

    });

    ///////////////////////////catalog////////////////////////////
    $('.check-filter label input:checked').parent().addClass('checked');
    $('.check-filter label input').click(function () {
        $('.check-filter label input[type="radio"]').parent().removeClass('checked');
        if ($(this).is(':checked')) {
            $(this).parent().addClass('checked');
        } else {
            $(this).parent().removeClass('checked');
        }
    });
    /////////////////////////////////////////////
    ////////////////////////////////////////////
    ////////////////////////////////////////

    //////////////////////////////////////////
    ////////////////////////////////////////////
    ///////////////////////////////////////
    $('.circle-box:nth-child(1)').click(function () {
        $(".enter-box").attr("data-step", "1");
    });
    $('.circle-box:nth-child(2)').click(function () {
        $(".enter-box").attr("data-step", "2");
    });
    $('.circle-box:nth-child(3)').click(function () {
        $(".enter-box").attr("data-step", "3");
    });

    // var t  = prompt('hello', 'by');;
    // console.log(t);
    //////////////////////select-sort//////////////////////////////
    $(".custom-select").each(function () {
        var classes = $(this).attr("class"),
            id = $(this).attr("id"),
            name = $(this).attr("name");
        var template = '<div class="' + classes + '">';
        template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
        template += '<div class="custom-options">';
        $(this).find("option").each(function () {
            template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
        });
        template += '</div></div>';

        $(this).wrap('<div class="custom-select-wrapper"></div>');
        $(this).hide();
        $(this).after(template);
    });
    $(".custom-option:first-of-type").hover(function () {
        $(this).parents(".custom-options").addClass("option-hover");
    }, function () {
        $(this).parents(".custom-options").removeClass("option-hover");
    });
    $(".custom-select-trigger").on("click", function () {
        $('html').one('click', function () {
            $(".custom-select").removeClass("opened");
        });
        $(this).parents(".custom-select").toggleClass("opened");
        event.stopPropagation();
    });
    $(".custom-option").on("click", function () {
        $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
        $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
        $(this).addClass("selection");
        $(this).parents(".custom-select").removeClass("opened");
        $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
    });

    function sortQuantity(what, where, quantity) {
        $(what).each(function (a, b) {
            if (a > quantity - 1) {
                $(where).append(b);
            }
        });
    }
    sortQuantity('.catalog-sort-chefs .favorite-cart ', '.continue-box-catalog-chefs', 6);
    sortQuantity('.catalog-sort .favorite-cart ', '.continue-box-catalog', 9);
    if ($(document).width() < 1200) {
        sortQuantity('.catalog-sort .favorite-cart ', '.continue-box-catalog', 6);
        sortQuantity('.catalog-sort-chefs .favorite-cart ', '.continue-box-catalog-chefs', 2);
    }

    if (document.querySelector('.cart-block__amount-sum')) {
        (function () {
            'use-strict';

            var counts = document.querySelectorAll('.cart-block__amount-sum');
            console.log(counts);

            var _loop = function _loop(i) {
                counts[i].querySelector('.minus').addEventListener('click', function (e) {
                    e.preventDefault();
                    var thisValue = counts[i].querySelector('input').value;
                    if (thisValue > 1) {
                        counts[i].querySelector('input').value = thisValue - 1;
                    }
                });

                counts[i].querySelector('.plus').addEventListener('click', function (e) {
                    e.preventDefault();
                    var thisValue = counts[i].querySelector('input').value;
                    counts[i].querySelector('input').value = +thisValue + 1;
                });

                // prevent input not numbers
                counts[i].querySelector('input').addEventListener('input', function () {
                    this.value = this.value.replace(/\D/gi, '').replace(/^0+/, '');
                });

                document.body.addEventListener('click', function () {
                    var thisValue = counts[i].querySelector('input').value;
                    if (!thisValue) {
                        counts[i].querySelector('input').value = 1;
                    }
                });
            };

            for (var i = 0; i < counts.length; ++i) {
                _loop(i);
            }
        })();
    }

    // $('.custom-select-trigger').width($(".custom-option").width());
})();

//# sourceMappingURL=common.js.map