"use strict";
$(document).ready(function () {
    /////////////////change checked//////////////////
    if ($(document).width() < 768) {
        $('#radio33').attr('checked', '');
        $('#radio11').attr('checked', 'checked');
    }


    ///////////////////////////text animate/////////////////////////
    $(function () {

        var $slogans = $("p.slogan").find("strong");
        var $holder = $("#holder");

        //set via JS so they're visible if JS disabled
        $slogans.parent().css({position: "absolute", top: "0px", left: "0px"});

        //settings
        var transitionTime = 1;
        var slogansDelayTime = 6;

        //internal
        var totalSlogans = $slogans.length;

        var oldSlogan = 0;
        var currentSlogan = -1;

        //initialize
        switchSlogan();

        function switchSlogan() {

            oldSlogan = currentSlogan;

            if (currentSlogan < totalSlogans - 1) {
                currentSlogan++
            } else {
                currentSlogan = 0;
            }

            TweenLite.to($slogans.eq(oldSlogan), transitionTime, {top: -20, alpha: 0, rotationX: 90});
            TweenLite.fromTo($slogans.eq(currentSlogan), transitionTime, {top: 20, alpha: 0, rotationX: -90}, {
                top: 0,
                alpha: 1,
                rotationX: 0
            });

            TweenLite.delayedCall(slogansDelayTime, switchSlogan);
        }

    });


///////////////////////////////////////////line animate//////////////////////////////////

//////////////////////////////////////////video backgr///////////////////////////
    $(document).on('input', ':input', function () {
        var input = $(this);
        input.toggleClass('filled', Boolean(input.val().length));
    });


});


$(document).ready(function () {
    if ($(window).width() > 768) {
        // var videobackground = new $.backgroundVideo($('.jquery-background-video'), {
        //     "align": "centerXY",
        //     "width": 1280,
        //     "height": 720,
        //     "path": "video/",
        //     "filename": "NYC-Traffic",
        //     "types": ["mp4", "ogv", "webm"],
        //     "preload": true,
        //     "autoplay": true,
        //     "loop": false
        //
        // });

    }


    $('.menu-button').on('click', function () {
        // $('body').css('overflow','hidden');

        $('.aside__right div').removeClass('aside__border1').addClass('aside__border');

        setTimeout(function () {
            $('.lineChoise').addClass('showLine');
        }, 1000);
    });
    $('.menu-close').on('click', function () {
        // $('body').css('overflow','visible');
        $('.aside__right div').addClass('aside__border1');

        $('.lineChoise').removeClass('showLine');


    });

    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > $('.nameBlock .popup-btn').offset().top - 30) {
                $('.headerScroll .buttonStock').addClass('buttonStockScroll');

            }
            else {
                $('.headerScroll .buttonStock').removeClass('buttonStockScroll');
            }
            if ($(window).width() < 480) {
                if ($(this).scrollTop() > 1000) {
                    $('.headerScroll .buttonStock').addClass('buttonStockScroll');

                    $('.logo').css('display', 'none');


                }
                else {
                    $('.headerScroll .buttonStock').removeClass('buttonStockScroll');

                    $('.logo').css('display', 'block');

                }
            }
            // if ($(window).width() < 768) {
            //     if ($(this).scrollTop() > 0) {
            //
            //         $('.showlogo img').css('display', 'none');
            //     }
            //
            //     else {
            //
            //         $('.showlogo img').css('display', 'block');
            //     }
            // }
            if ($(this).scrollTop() > 0) {
                $('.headerScrollNo').addClass('headerScroll');
                $('.headerScrollNo-portfolio').addClass('headerScroll-portfolio');

            }

            else {
                $('.headerScrollNo').removeClass('headerScroll');
                $('.headerScrollNo-portfolio').removeClass('headerScroll-portfolio');

            }
        });
    });


////////////////////////////////////////////////scroll-menu////////////////////////////////////////////////

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }


    function pageScroll() {

    }

    pageScroll();

    (function () {

        // Aside menu
        var Menu = function () {
            function Menu(options) {
                _classCallCheck(this, Menu);

                this.button = document.querySelector(options.button);
                this.elem = document.querySelector(options.elem);
                this.closeButton = document.querySelector(options.closeButton);
                this.toggleElem = document.querySelector(options.toggleElem);
                this.animateElems = document.querySelectorAll(options.animateElems);

                this.init();
            }

            _createClass(Menu, [{
                key: 'open',
                value: function open() {
                    this.button.classList.add('closed');
                    this.closeButton.classList.remove('closed');
                    this.elem.classList.add('opened');
                    // this.toggleElem.classList.add('hidden');
                    for (var i = 0; i < this.animateElems.length; ++i) {
                        this.animateElems[i].classList.add('animate');
                    }
                    window.addEventListener('wheel', this.scrollDestroy);
                }
            }, {
                key: 'close',
                value: function close() {
                    this.button.classList.remove('closed');
                    this.closeButton.classList.add('closed');
                    this.elem.classList.remove('opened');
                    // this.toggleElem.classList.remove('hidden');
                    for (var i = 0; i < this.animateElems.length; ++i) {
                        this.animateElems[i].classList.remove('animate');
                    }
                    window.removeEventListener('wheel', this.scrollDestroy);
                }
            }, {
                key: 'scrollDestroy',
                value: function scrollDestroy(e) {
                    e.preventDefault();
                }
            }, {
                key: 'init',
                value: function init() {
                    var _this = this;

                    this.button.addEventListener('click', function () {
                        _this.open();
                    });
                    this.closeButton.addEventListener('click', function () {
                        _this.close();
                    });
                    // escape keydown
                    document.documentElement.addEventListener('keydown', function (e) {
                        if (e.keyCode === 27) _this.close();
                    });
                }
            }]);

            return Menu;
        }();

        var aside = new Menu({
            button: '.menu-button',
            elem: '.aside',
            closeButton: '.menu-close',
            toggleElem: '#fp-nav', // show/hide
            animateElems: '.js-animated'
        });

        if (document.querySelector('.menu')) {
            var links = document.querySelectorAll('.menu li a');
            for (var i = 0; i < links.length; ++i) {
                links[i].addEventListener('click', function () {
                    aside.close();
                });
            }
        }
    })(document);
////////////////////////////////////////////////end scroll-menu////////////////////////////////////////////////
    var userInput = $('.userInput');

    userInput.on('focus', function () {


        $(this).parent().addClass('focus');
    });
    userInput.on('blur', function () {

        if ($(this).val() == '') {

            $(this).parent().removeClass('focus')
        }

    });


//////////////////////////////popup///////////////////////////////
    $(document).ready(function () {

        $(' .popup-btn').click(function (e) {
            $('.popup-wrap').fadeIn(250);
            $('.popup-box').removeClass('transform-out').addClass('transform-in');
            e.preventDefault();
        });

        $(' .popup-close-all').click(function (e) {
            $('.popup-wrap').fadeOut(500);
            $('.popup-box').removeClass('transform-in').addClass('transform-out');
            e.preventDefault();
        });
        $(' .popup-btn-agree').click(function (e) {
            var name = $('.form form #name').val();
            var phone = $('.form form #phone').val();
            var email = $('.form form #email').val();
            var regExp = email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
            if (name && phone && regExp) {
                e.preventDefault();

                $('.popup-wrap-agree').fadeIn(250);
                $('.popup-box-agree').removeClass('transform-out').addClass('transform-in');


            }
        });
        $(' .popup-btn-agree1').click(function (e) {
            var name = $('form #name1').val();
            var phone = $('form #phone1').val();
            var email = $('form #email1').val();
            var regExp = email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
            if (name && phone && regExp) {
                e.preventDefault();
                $(' .popup-close-all').click();
                $('.popup-wrap-agree').fadeIn(250);
                $('.popup-box-agree').removeClass('transform-out').addClass('transform-in');


            }
        });
        $(' .liave-click').click(function (e) {
            var name = $('.leave-form .name').val();
            var email = $('.leave-form .email').val();
            var regExp = email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
            if (name && regExp) {
                e.preventDefault();
                $(' .popup-close-agree').click();


            }
        });
        $(' .popup-btn-agree2').click(function (e) {
            var email = $('form #email-blog').val();
            var regExp = email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
            if (regExp) {
                e.preventDefault();
                $(' .popup-close-all').click();
                $('.popup-wrap-agree-blog').fadeIn(250);
                $('.popup-box-agree-blog').removeClass('transform-out').addClass('transform-in');


            }
        });
        $(' .popup-btn-agree3').click(function (e) {

            var name = $('form #article-name').val();
            var email = $('form #article-email').val();
            var regExp = email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
            if (name && regExp) {
                e.preventDefault();
                $('.popup-wrap-agree-blog-article').fadeIn(250);
                $('.popup-box-agree-blog-article').removeClass('transform-out').addClass('transform-in');


            }
        });

        $(' .popup-close-agree').click(function (e) {
            $('input[type="text"]').val('');
            $('input[type="number"]').val('');
            $('input[type="email"]').val('');
            $('.popup-wrap-agree').fadeOut(500);
            $('.popup-box-agree').removeClass('transform-in').addClass('transform-out');
            $('.popup-wrap-agree-blog-article').fadeOut(500);
            $('.popup-box-agree-blog-article').removeClass('transform-in').addClass('transform-out');
            $('.popup-wrap-agree-blog').fadeOut(500);
            $('.popup-box-agree-blog').removeClass('transform-in').addClass('transform-out');
            $('.popup-wrap-agree-leave').fadeOut(500);
            $('.popup-box-agree-leave').removeClass('transform-in').addClass('transform-out');



           return false;
        });
        $('.popup-close-all').click(function (e) {
            $('input[type="text"]').val('');
            $('input[type="number"]').val('');
            $('input[type="email"]').val('');

        });
        $('.popup-wrap-agree-blog, popup-wrap-agree, .popup-wrap-agree-blog-article').on('click',function () {
            $('.popup-close-agree').click();
        });

        var oneMoreShow=84;

        $(document).mousemove(function(e){
            var Y = e.pageY; // положения по оси Y
        if($(document).width()>993 && Y<10 ){
        $(document).mouseleave(function(){
            function fr() {
                return oneMoreShow++;
            }

            if(oneMoreShow==84){
            $('.popup-wrap-agree-leave').fadeIn(250);
            $('.popup-box-agree-leave').removeClass('transform-out').addClass('transform-in');
            fr();
            }
        });
        }
        });
    });


////////////////////////slider portf/////////////////////////////

    var slicPort = $('.slider-nav');


    // slicPort.slick({
    //     infinite: false,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     speed: 500,
    //     dots: true,
    //     responsive: [
    //         {
    //             breakpoint: 993,
    //             settings: {
    //                 slidesToShow: 3
    //             }
    //         },
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 2,
    //                 dots: false
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 dots: false
    //             }
    //         }
    //     ]
    //
    // });

    //////////////////////////slider video///////////////////////////////
    // $('.slider-for-two').slick({
    //     touchMove: false,
    //     swipe: true,
    //     slidesToShow: 1,
    //
    //     arrows: false,
    //     speed: 400,
    //     loop: false,
    //     // vertical:true,
    //     asNavFor: '.slider-nav-two'
    // });
    // $('.slider-nav-two').slick({
    //     touchMove: false,
    //     centerMode: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     speed: 400,
    //     asNavFor: '.slider-for-two',
    //     dots: true,
    //     focusOnSelect: true
    //
    // });
////////////////////////////////////////////slider servises////////////////////////
//     $('.slider-nav-six').slick({
//         loop: true,
//         slidesToShow: 5,
//         slidesToScroll: 1,
//         speed: 500,
//         responsive: [
//             {
//                 breakpoint: 1200,
//                 settings: {
//                     slidesToShow: 4
//                 }
//             },
//             {
//                 breakpoint: 993,
//                 settings: {
//                     slidesToShow: 3
//                 }
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 2
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 2
//                 }
//             }
//         ]
//
//     });
//     $('.slider-nav-five').slick({
//         loop: true,
//         slidesToShow: 5,
//         slidesToScroll: 1,
//         speed: 500,
//         responsive: [
//             {
//                 breakpoint: 1200,
//                 settings: {
//                     slidesToShow: 4
//                 }
//             },
//             {
//                 breakpoint: 993,
//                 settings: {
//                     slidesToShow: 3
//                 }
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 2
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1
//                 }
//             }
//         ]
//
//     });
//     $('.slider-project').slick({
//         loop: true,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         dots:true,
//         speed: 500,
//         appendArrows: $('.buttons-block-proj'),
//         prevArrow:'<div id="prev"><span class="rotat">➞</span><span>Назад </span></div>',
//         nextArrow:'<div id="next"><span>Вперед </span><span>➞</span></div>',
//         responsive: [
//             {
//                 breakpoint: 1200,
//                 settings: {
//                     slidesToShow:3
//                 }
//             },
//             {
//                 breakpoint: 993,
//                 settings: {
//                     slidesToShow: 3
//                 }
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 3
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 2
//                 }
//             }
//         ]
//
//     });
//     $('.slider-nav .slick-slide ').on('click', function (e) {
//         $('.slick-slide').removeClass('slick-current');
//
//         $(e.target).parent().parent().parent().addClass('slick-current');
//     });
//
//     $('a[data-slide]').click(function (e) {
//         e.preventDefault();
//         var slideno = $(this).data('slide');
//         $('.slider-nav').slick('slickGoTo', slideno - 1);
//     });
//
//     $('.slider-nav img ').on('click', function (e) {
//         var target = e.target;
//
//         $('.slider-nav img').parent().removeClass('focus');
//         $(target).parent().addClass('focus');
//         console.log(target);
//
//
//     });


/////////////////////////////////////////////////////////////

    // $('.lightbox').magnificPopup({
    //     type: 'iframe'});
    $(document).ready(function () {
        var tar = 'ghj';
        $(".scroll-box").niceScroll({
            cursorcolor: "#fff",
            cursorwidth: "7px",
            cursorborder: "0px solid #5e90be",
            cursorborderradius: 4,
            autohidemode: false


        });
          $('.tabs label').on('click',function () {
              $(".scroll-box").niceScroll({
                  cursorcolor: "#fff",
                  cursorwidth: "7px",
                  cursorborder: "0px solid #5e90be",
                  cursorborderradius: 4,
                  autohidemode: false


              });
          });

        if($(document).width()>993){
            $("html").niceScroll({
                cursorcolor: "grey",
                cursorwidth: "8px",
                cursorborder: "0px solid #5e90be",
                cursorborderradius: 4,
                autohidemode: false
            });
        }


        $(window).resize(function () {
            $(".scroll-box").getNiceScroll().resize();
        });
        $('.lightbox, .serv').click(function (e) {
            // $('body').css('overflow','hidden');
            // $('body,html').animate({scrollTop: 0}, 1000);
            var eframe = $('.youtube-video');
            var link = $(this).attr('data-youtube');
            if (tar != this) {
                eframe.attr('src', 'https://www.youtube.com/embed/' + link + '?enablejsapi=1&version=3&playerapiid=ytplayer');
            }
            else {

            }

            tar = this;

            $('.popup-wrap-video').fadeIn(250);
            $('.popup-box-video').removeClass('transform-out').addClass('transform-in');

            setTimeout(function () {
                eframe[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
            }, 1000);

            e.preventDefault();
        });

        $('.popup-close').click(function (e) {
            $('.popup-wrap-video').fadeOut(500);
            $('.popup-box-video').removeClass('transform-in').addClass('transform-out');
            $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
            e.preventDefault();
        });
    });

});

$(document).ready(function () {
    $('.main-video  ').click(function (e) {
        // $('body').css('overflow','hidden');
        // $('body,html').animate({scrollTop: 0}, 600);
        $('.popup-wrap-video-main').fadeIn(250);
        $('.popup-box-video-main').removeClass('transform-out').addClass('transform-in');
        $('.youtube-video-main')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');

        e.preventDefault();
    });

    $(' .popup-close-main').click(function (e) {
        // $('body').css('overflow','visible');
        $('.popup-wrap-video-main').fadeOut(500);
        $('.popup-box-video-main').removeClass('transform-in').addClass('transform-out');
        $('.youtube-video-main')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
        e.preventDefault();
    });
});
$(document).ready(function () {

});
$('.servise-servise .circle-image').on('click',function () {
    $(this).parent().parent()[0].click();

})

$('.tabs label').click(function () {
    $('.service-service-content1 .main-content-block').removeClass('show-grey-lines-right');
})
$(window).scroll(function() {
    if ($(document).width()> 993) {
        $('.main-content-block').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+600) {
                $(this).addClass('show-grey-lines-right');

            }
        });
        $('.main-content-block1').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+600) {
                $(this).addClass('show-grey-lines-left');

            }
        });
        $('.social-grey-text').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+600) {
                $(this).addClass('social-grey-text1');

            }
        });
        $('.redBlack').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+600) {
                $(this).addClass('redBlack1');

            }
        });
    }


    $('.show-Line-right').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 900) {
            $(this).addClass('redLine');
        }
    });
    $('.show-Line-left').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 900) {
            $(this).addClass('redLine1');
        }
    });
    $('.order').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 900) {
            $('.form').addClass('redLineVertical');
        }
    });

});

$(document).ready(function() {
    function slyDer(big, trumbs, nav) {
        var bigimage = $(big);
        var thumbs = $(trumbs);
        var totalslides = 10;
        var syncedSecondary = true;

        bigimage.owlCarousel({
            items : 1,
            slideSpeed : 2000,
            loop: true,
            dots: false,
            nav: false,
            animateOut: 'fadeOut',
            responsiveRefreshRate : 200,

        }).on('changed.owl.carousel', syncPosition);

        thumbs
            .on('initialized.owl.carousel', function () {
                thumbs.find(".owl-item").eq(0).addClass("current");
            })
            .owlCarousel({
                items : 4,
                dots: nav,
                nav: nav,
                navText: [' <div  class="prev" style=""><span>назаД </span><span class="rotat rotat1">➞</span></div>', '<div  class="next" ><span>Вперед </span> <span class="rotat" >➞</span></div>'],
                smartSpeed: 200,
                slideSpeed : 500,
                responsive:{
                    0:{
                        items:2,

                    },
                    768:{
                        items:3,

                    },
                    1000:{
                        items:4,

                    }
                }
            }).on('changed.owl.carousel', syncPosition2);

        function syncPosition(el) {
            //if loop is set to false, then you have to uncomment the next line
            //var current = el.item.index;

            //to disable loop, comment this block
            var count = el.item.count-1;
            var current = Math.round(el.item.index - (el.item.count/2) - .5);

            if(current < 0) {
                current = count;
            }
            if(current > count) {
                current = 0;
            }
            //to this
            thumbs
                .find(".owl-item")
                .removeClass("current")
                .eq(current)
                .addClass("current");
            var onscreen = thumbs.find('.owl-item.active').length - 1;
            var start = thumbs.find('.owl-item.active').first().index();
            var end = thumbs.find('.owl-item.active').last().index();

            if (current > end) {
                thumbs.data('owl.carousel').to(current, 100, true);
            }
            if (current < start) {
                thumbs.data('owl.carousel').to(current - onscreen, 100, true);
            }
        }

        function syncPosition2(el) {
            if(syncedSecondary) {
                var number = el.item.index;
                bigimage.data('owl.carousel').to(number, 100, true);
            }
        }

        thumbs.on("click", ".owl-item", function(e){
            e.preventDefault();
            var number = $(this).index();
            bigimage.data('owl.carousel').to(number, 300, true);
        });
    }

    slyDer('.big','.thumbs', true);
var tabIndex =  $('.main-slider-box .tabs label');
var tabInner =  $('.main-slider-box .outer');
    tabIndex.eq(0).addClass('activ-label');
    tabInner.eq(0).addClass('activ-inner');
    tabInner.eq(0).children().eq(0).addClass('big');
    tabInner.eq(0).children().eq(1).addClass('thumbs');
   tabIndex.click(function () {
       slyDer('.big1','.thumbs1',true);
       var index = tabIndex.index(this);
      tabIndex.removeClass('activ-label');
      tabInner.removeClass('activ-inner');
       tabInner.eq(index).children().eq(0).removeClass('big');
       tabInner.eq(index).children().eq(1).removeClass('thumbs');
      tabInner.eq(index).children().eq(0).addClass('big'+index);
      tabInner.eq(index).children().eq(1).addClass('thumbs'+index);
      $(this).addClass('activ-label');
      tabInner.eq(index).addClass('activ-inner');
       slyDer('.big'+index,'.thumbs'+index ,true);


    console.log(index);
 });
    $('.voises-owl').owlCarousel({
        center: true,
        items : 3,
        loop: true,
        nav: true,
        slideSpeed : 500,
        smartSpeed : 500,
        navText: [' <div  class="prev" style=""><span>назаД </span><span class="rotat rotat1">➞</span></div>', '<div  class="next" ><span>Вперед </span> <span class="rotat" >➞</span></div>'],
        responsive:{
            0:{
                items:1
            },
            993:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });
    $('.voises-owl-team').owlCarousel({
        center: true,
        items : 3,
        loop: true,
        nav: true,
        slideSpeed : 500,
        smartSpeed : 500,
        navText: [' <div  class="prev" style=""><span>назаД </span><span class="rotat rotat1">➞</span></div>', '<div  class="next" ><span>Вперед </span> <span class="rotat" >➞</span></div>'],
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            993:{
                items:3
            },
            1200:{
                items:3
            }
        }
    });
    $('.our-services').owlCarousel({
        center: true,
        items : 5,
        loop: true,
        nav: true,
        slideSpeed : 500,
        smartSpeed : 500,
        navText: [' <div  class="prev" style=""><span class="rotat rotat1">➞</span></div>', '<div  class="next" ><span class="rotat" >➞</span></div>'],
        responsive:{
            0:{
                items:2
            },
            480:{
                items:3
            },
            993:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });

    // $('.serviseOwl').owlCarousel({
    //     loop: true,
    //     center: true,
    //     items : 5,
    //     margin: 10,
    //     nav: true,
    //     navText: [' <div  class="prev" style=""><span> </span><span class="rotat rotat1">➞</span></div>', '<div  class="next" ><span></span> <span class="rotat" >➞</span></div>'],
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         600: {
    //             items: 3
    //         },
    //         1000: {
    //             items: 5
    //         }
    //     }
    // })
    function slyDerServ(big, trumbs, nav, items) {
        var bigimage = $(big);
        var thumbs = $(trumbs);
        var totalslides = 10;
        var syncedSecondary = true;

        bigimage.owlCarousel({
            items : 1,
            slideSpeed :2000,
            loop: true,
            dots: false,
            nav: false,
            animateOut: 'fadeOut',
            responsiveRefreshRate : 200,

        }).on('changed.owl.carousel', syncPosition);

        thumbs
            .on('initialized.owl.carousel', function () {
                thumbs.find(".owl-item").eq(0).addClass("current");
            })
            .owlCarousel({
                items :5,
                dots: nav,
                nav: nav,
                navText: [' <div  class="prev" style=""><span> </span><span class="rotat rotat1">➞</span></div>', '<div  class="next" ><span></span> <span class="rotat" >➞</span></div>'],
                smartSpeed: 200,
                slideSpeed : 500,
                responsive:{
                    0:{
                        items:2

                    },
                    768:{
                        items:3

                    },
                    993:{
                        items:5,

                    }
                }
            }).on('changed.owl.carousel', syncPosition2);

        function syncPosition(el) {
            //if loop is set to false, then you have to uncomment the next line
            //var current = el.item.index;

            //to disable loop, comment this block
            var count = el.item.count-1;
            var current = Math.round(el.item.index - (el.item.count/2) - .5);

            if(current < 0) {
                current = count;
            }
            if(current > count) {
                current = 0;
            }
            //to this
            thumbs
                .find(".owl-item")
                .removeClass("current")
                .eq(current)
                .addClass("current");
            var onscreen = thumbs.find('.owl-item.active').length - 1;
            var start = thumbs.find('.owl-item.active').first().index();
            var end = thumbs.find('.owl-item.active').last().index();

            if (current > end) {
                thumbs.data('owl.carousel').to(current, 100, true);
            }
            if (current < start) {
                thumbs.data('owl.carousel').to(current - onscreen, 100, true);
            }
        }

        function syncPosition2(el) {
            if(syncedSecondary) {
                var number = el.item.index;
                bigimage.data('owl.carousel').to(number, 100, true);
            }
        }

        thumbs.on("click", ".owl-item", function(e){
            e.preventDefault();
            var number = $(this).index();
            bigimage.data('owl.carousel').to(number, 300, true);
        });
    }
    slyDerServ('.serviseOwl-inner','.serviseOwl', true);
    $('.serviseOwl .owl-item').eq(2).addClass('center');
    $('.serviseOwl .owl-item').click(function () {
        $('.serviseOwl .owl-item').removeClass('center');
        $(this).addClass('center');
    })

});
