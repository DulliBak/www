window.onload = function(){
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        paginationClickable: true,
        spaceBetween: 0,
        freeMode: true,
        loop: true,
        loopedSlides: 4,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
            breakpoints: {
                767: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    slidesPerGroup: 1,
                },
                991: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                    slidesPerGroup: 1,
                },
                1199: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                    slidesPerGroup: 1,
                },
                1280: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                    slidesPerGroup: 1,
                },
            },
          

     });

    // quicktop click event
    $('.topMove').click(function(e){
        e.preventDefault();

        $("html,body").stop().animate({
            "scrollTop" : 0
        }, 300);
        //$('html, body').animate({scrollTop: '0'}, 300);
    });

    $('.item1').click(function(e){
        e.preventDefault();
        $('#product .popup').css('display','block');
        $('.img').css('background','url(./images/product01.jpg) 50% 50% no-repeat').css('background-size','contain');
        $('.text dt').text('Rosa Novella Scented Wax Tablets');
        $('.text .price').text('24,00 €');
        $('.text .intro').text('The box contains two hand-made scented wax tablets, inspired by the Acqua della Regina Cologne fragrance and its notes of citrus fruits, neroli and musk.');
       
    });
    $('.item2').click(function(e){
        e.preventDefault();
        $('#product .popup').css('display','block');
        $('.img').css('background','url(./images/product02.jpg) 50% 50% no-repeat').css('background-size','contain');
        $('.text dt').text('Acqua della Regina Scented Wax Tablets');
        $('.text .price').text('24,00 €');
        $('.text .intro').text('The box contains two hand-made scented wax tablets, inspired by the Acqua della Regina');
       
    });
    $('.item3').click(function(e){
        e.preventDefault();
        $('#product .popup').css('display','block');
        $('.img').css('background','url(./images/product03.jpg) 50% 50% no-repeat').css('background-size','contain');
        $('.text dt').text('Vespro Scented Candle');
        $('.text .price').text('65,00 €');
        $('.text .intro').text('The box contains two hand-made scented wax tablets, inspired by the Acqua della Regina');
       
    });
    $('.item4').click(function(e){
        e.preventDefault();
        $('#product .popup').css('display','block');
        $('.img').css('background','url(./images/product04.jpg) 50% 50% no-repeat').css('background-size','contain');
        $('.text dt').text('Rosa Gardenia Bath Gel');
        $('.text .price').text('50,00 €');
        $('.text .intro').text('The box contains two hand-made scented wax tablets, inspired by the Acqua della Regina');
       
    });
    $('.item5').click(function(e){
        e.preventDefault();
        $('#product .popup').css('display','block');
        $('.img').css('background','url(./images/product05.jpg) 50% 50% no-repeat').css('background-size','contain');
        $('.text dt').text('Acqua di Rose');
        $('.text .price').text('30,00 €');
        $('.text .intro').text('since 1381. The fruit of a tradition dating back many centuries, Acqua di Rose boasts a unique combination of astringent, refreshing and toning properties.');

    });
    $('.item6').click(function(e){
        e.preventDefault();
        $('#product .popup').css('display','block');
        $('.img').css('background','url(./images/product06.jpg) 50% 50% no-repeat').css('background-size','contain');
        $('.text dt').text('Colonia Russa');
        $('.text .price').text('43,00 €');
        $('.text .intro').text('since 1381. The fruit of a tradition dating back many centuries, Acqua di Rose boasts a unique combination of astringent, refreshing and toning properties.');
       
    });
    

    $('.popup_close').click(function(e){
        e.preventDefault();
        $('.popup').css('display','none');
    });



// var cnt = $('.tab_menu li').size(); 
// $('.contlist ul:eq(0)').show(); // 첫번째 탭 내용만 열어라
// $('.tab1').addClass('now'); //첫번째 탭메뉴 활성화
// //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***


// $('.tab').click(function(e){
//   e.preventDefault();   // <a> href="#" 값을 강제로 막는다  
  
//   var ind = $(this).index('.tab');  // 클릭시 해당 index를 뽑아준다
//   //console.log(ind);

//   $(".contlist p").hide(); //모든 탭내용을 안보이게...
//   $(".contlist p:eq("+ind+")").show().addClass('now'); //클릭한 해당 탭내용만 보여라 
//   $('.tab').removeClass('now'); //모든 탭메뉴를 비활성화
//   $(this).addClass('now'); // 클릭한 해당 탭메뉴만 활성화
           
// });

$('.contlist p').css('display','none');
$('.contlist #first').css('display','block');
$('.wax').css('filter','grayscale(100%) blur(2px)');

$('.tab1').click(function(e){
    e.preventDefault();
    $('.tabs ul li a').removeClass('on');
    $('.tabs ul li .tab1').addClass('on');

    $('.brush').css('filter','grayscale(0%)');
    $('.wax').css('filter','grayscale(100%) blur(2px)');
    $('.contlist p').css('display','none');
    $('.contlist #first').css('display','block');
});

$('.tab2').click(function(e){
    e.preventDefault();
    $('.tabs ul li a').removeClass('on');
    $('.tabs ul li .tab2').addClass('on');

    $('.wax').css('filter','grayscale(0%)');
    $('.brush').css('filter','grayscale(100%) blur(2px)');
    $('.contlist p').css('display','none');
    $('.contlist #second').css('display','block');
});

};