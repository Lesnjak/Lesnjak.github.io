'use strict';
$(".change-language li").click(function () {
    var val=$(this).html();
    $(".select-button ").html(val);


});
$(".change-month li").click(function () {
    var val=$(this).html();
    $(".select-month ").html(val);
    $('#month-checked').click();


});
$(".change-year li").click(function () {
    var val=$(this).html();
    $(".select-year ").html(val);
    $('#year-checked').click();


});
// $('.links-choise ul').removeClass('heightUl');
$('.links-choise a').on('click', function () {
    $('.links-choise ul').toggleClass('heightUl');

});
// $('.change-language').on('mouseleave',function () {
//     $('#menu-open').click();
//     $('#menu-open-footer').click();
// });
// $('form').on('mouseleave',function () {
//     $('.close-form').click();
// });
var patternEmail =/^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
var patternPhone=/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,15}(\s*)?$/;
    $('form input').on('mouseover',function () {
    $(this).css('border','none');
});

$('.header-form-top ').submit(function (event) {
    var inputName=$('.header-form-top input[name="name"]').val();
    var inputPhone=$('.header-form-top input[name="phone"]').val();
    if(!patternPhone.test(inputPhone)){
        $('.header-form-top input[name="phone"]').css('border','1px solid red');
    }
    if(inputName ==""){
        $('.head-name').css('border','1px solid red');
    }
    // if(inputPhone ==""){
    //     $('.header-form-top input[name="phone"]').css('border','1px solid red');
    // }
    if(inputName && inputPhone && patternPhone.test(inputPhone)){

        // var http = new XMLHttpRequest(), f = this;
        // http.open("POST", "http://prototypes.agency/contacts.php", true);
        // http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        // http.send("name=" + f.name.value + "&phone=" + f.phone.value );
        $('form .callBack').parent()[0].click();

        setTimeout(function () {
            $('form .callBack').parent()[0].click();
            $('form input[type="text"]').val("");
            $('form input[type="number"]').val("");
        },5000)

    }
    event.preventDefault();
});
$('#services-page-form').submit(function (event) {
    var inputName=$('#services-page-form input[name="name"]').val();
    var inputPhone=$('#services-page-form input[name="phone"]').val();
    if(!patternPhone.test(inputPhone)){
        $('#services-page-form input[name="phone"]').css('border','1px solid red');
    }
    if(inputName ==""){

        $('#services-page-form input[name="name"]').css('border','1px solid red');
    }

    if(inputName && inputPhone && patternPhone.test(inputPhone)){
        // var http = new XMLHttpRequest(), f = this;
        // http.open("POST", "http://prototypes.agency/contacts.php", true);
        // http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        // http.send("name=" + f.name.value + "&phone=" + f.phone.value );
        $('.popup-window-services-page').css('display','block')
        $('html').addClass('blackH');

    }
    event.preventDefault();
});
$('.contacts-form').submit(function (event) {
    var inputName=$('.contacts-form input[name="name"]').val();
    var inputPhone=$('.contacts-form input[name="phone"]').val();
    var inputEmail=$('.contacts-form input[name="email"]').val();
    if(!patternPhone.test(inputPhone)){
        $('.contacts-form input[name="phone"]').css('border','1px solid red');
    }
    if(!patternEmail.test(inputEmail)){
        $('.contacts-form input[name="email"]').css('border','1px solid red');
    }
    if(inputName==""){
        $('.contacts-form input[name="name"]').css('border','1px solid red');
    }
    if(inputName && inputPhone && patternPhone.test(inputPhone) && patternEmail.test(inputEmail)){

     //    var http = new XMLHttpRequest(), f = this;
     //    http.open("POST", "http://prototypes.agency/contacts.php", true);
     //    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
     //    http.send("name=" + f.name.value + "&phone=" + f.phone.value + "&email=" + f.email.value + "&area=" + f.area.value );

     $('.popup-window').css('display','block');
        $('html').addClass('blackH');

    }
    event.preventDefault();
});

$(".krest-block img").on('click',function () {
    location.reload();
    // $('form input[type="text"]').val("");
    // $('form input[type="number"]').val("");
    // $('form input[type="email"]').val("");
    // $('.popup-window').css('display','none')
})


$('.close-menu').click(function () {
    $(' #input-open-menu').click();
    return false;
});
//////////////////////slider/////////////////////
$('.service-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,

    responsive: [

        {
            breakpoint: 993,
            settings: {
                slidesToShow: 1,

            }
        }

    ]
});
$(' .service-slider1').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,

    responsive: [

        {
            breakpoint: 993,
            settings: {
                slidesToShow: 2,

            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,

            }
        }

    ]
});


$(document).ready(function () {


$.when( $('.old-select select').hide('fast', function(){

    var select = $(this);
    var selected = select.find(":selected").text()
    var options = '';

    select.find('option').each( function(){
        options += '<li id="' + $(this).val() + '">' + $(this).text() + '</li>';
    });

    select.after('<div class="new-select"><span>' + selected + '</span><ul>' + options + '</ul></div>');

}) ).done( function(){

    $('.new-select span').on('click', function(){
        $(this).parent().find('ul').toggle('fast');
        $(this).toggleClass('rotate');
    });
    $('.new-select span').on('click', function(){



    });

    $('.new-select li').on('click', function(){
        $(this).closest('.old-select').find('select').val( $(this).attr('id') );
        $(this).closest('.new-select').find('span').text( $(this).text() );
        $(this).parent().slideUp('fast');
    });

    // $.on('click', function(){
    //     console.log(! $(this).is('.new-select *'));
    //     if ( ! $(this).is('.new-select *') ) {
    //         $('.new-select ul').slideUp('fast');
    //     }
    // });

})
});

$(function() {
    var res1="";
$('.button-block').on('click',function () {

    res1=$('#edit1').val();

    localStorage.setItem('todoData1', res1);
})

  // $('#edit').val(localStorage.getItem('todoData'));
    $('#edit1').val(localStorage.getItem('todoData1'));

});
$(function() {
    var res="";

    $('.button-block').on('click',function () {
        res=$('#edit').val();

        localStorage.setItem('todoData', res);

    })

    $('#edit').val(localStorage.getItem('todoData'));


});

// $(function() {
//     $('#edit1').change(function() {
//         localStorage.setItem('todoData', this.value);
//     });
//     if(localStorage.getItem('todoData')){
//         $('#edit1').val(localStorage.getItem('todoData'));
//     }
// });






