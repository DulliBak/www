//아래로가깅
 $('.down').click(function(){
     screenHeight = $(window).height();
     $('html,body').animate({'scrollTop':screenHeight}, 1000);
 });


//맨위로가기
$('.up').click(function(e){
    e.preventDefault();
    $('html,body').stop().animate({'scrollTop':0}, 500);
});

//스크롤 네비 픽스     

$(window).on('scroll',function(){
    var scroll = $(window).scrollTop();

    if(scroll>200){
        $('#headerArea').addClass('on');
    }else{
        $('#headerArea').removeClass('on');
    }
});

 //햄버거메뉴

 var op = false;  //네비가 열려있으면(true) , 닫혀있으면(false)
      
    $(".menuOpen").click(function(e) { //메뉴버튼 클릭시
        e.preventDefault();
 
       if(op==false){
        $(".mainMenu").slideDown('fast');

         op=true;
       }else{
        $(".mainMenu").slideUp('fast');
         
        op=false;
       }
 
    });

    var current = 0;
    $(window).resize(function () {
        var screenSize = $(window).width();
        if (screenSize > 1024) {
          $(".mainMenu").css('display','block')
            current = 1;
        }
        if (current == 1 && screenSize <= 1024) {
            $(".mainMenu").css('display','none')
            current = 0;
        }
    });

if (matchMedia('screen and (min-width:641px)').matches) {
    // 640이상
    $(".about01 img").attr('src','./images/about01.jpg');
    } else {
    $(".about01 img").attr('src','./images/about640.jpg');
    };

window.addEventListener('resize', ()=> {
    if (matchMedia('screen and (max-width:640px)').matches) {
        // 640이상
        $(".about01 img").attr('src','./images/about640.jpg');
     
        } else if(matchMedia('screen and (min-width:641px)').matches) {
        // 640미만

        $(".about01 img").attr('src','./images/about01.jpg');
        }
});
