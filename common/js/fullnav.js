
$(document).ready(function() {

   var smh=$('.main').height();  //비주얼 이미지의 높이를 리턴한다
   var on_off=false;  //false(안오버)  true(오버)
   
       $('#headerArea').mouseenter(function(){
          // var scroll = $(window).scrollTop();
           $(this).css('background','#fff');
           $('.topmenu li a').css('color','#333');
           $('.dropdownmenu li a').css('color','#333');
           $('#headerArea').css('box-shadow','5px 5px 10px 0 rgba(0, 0, 0, 0.1)'); 
          
           on_off=true;
       });
   
      $('#headerArea').mouseleave(function(){
        $('#headerArea').css('box-shadow','5px 5px 10px 0 rgba(0, 0, 0, 0)'); 
           var scroll = $(window).scrollTop();  //스크롤의 거리
           
           if(scroll<smh-50 ){
               $(this).css('background','none').css('border-bottom','none'); 
               $('.dropdownmenu li a').css('color','#fff');
               $('.topmenu li a').css('color','#fff');
           }else{
               $(this).css('background','#fff'); 
               $('.dropdownmenu li a').css('color','#333');
           }
          on_off=false;    
      });
   
      $(window).on('scroll',function(){//스크롤의 거리가 발생하면
           var scroll = $(window).scrollTop();  //스크롤의 거리를 리턴하는 함수
           //console.log(scroll);

           if(scroll>smh-40){//스크롤300까지 내리면
               $('#headerArea').css('background','#fff').css('border-bottom','1px solid #ccc').css('box-shadow','5px 5px 10px 0 rgba(0, 0, 0, 0.1)');
               $('.dropdownmenu li a').css('color','#333');
               $('.topmenu li a').css('color','#333');
           }else{//스크롤 내리기 전 디폴트(마우스올리지않음)
              if(on_off==false){
                   $('#headerArea').css('background','none').css('border-bottom','none').css('box-shadow','5px 5px 10px 0 rgba(0, 0, 0, 0)');
                   $('.dropdownmenu li a').css('color','#fff');
                   $('.topmenu li a').css('color','#fff');
              }
           };  
        });

  
    //상단 2depth 열기/닫기 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
    $('ul.dropdownmenu').hover(
       function() { 
          $('ul.dropdownmenu li.menu ul').fadeIn('slow',function(){$(this).stop();}); //모든 서브를 다 열어라
          $('#headerArea').animate({height:440},'fast').css('box-shadow','5px 5px 10px 0 rgba(0, 0, 0, 0.1)').clearQueue();

       },function() {
          $('ul.dropdownmenu li.menu ul').hide(); //모든 서브를 다 닫아라
          $('#headerArea').animate({height:190},'100').css('box-shadow','5px 5px 10px 0 rgba(0, 0, 0, 0)').clearQueue();
     });

     $('ul.dropdownmenu li.menu ul li').hover(
       function() { 
           $('a',this).css('color','#d70c19').css('font-weight','700');
       },function() {
          $('a',this).css('color','#666').css('font-weight','200');
      });
     

     //tab 처리
     $('ul.dropdownmenu li.menu .depth1').on('focus', function () {        
        $('ul.dropdownmenu li.menu ul').slideDown('fast');
        $('#headerArea').animate({height:440},'fast').clearQueue();

    });

    $('ul.dropdownmenu li.m6 li:last').find('a').on('blur', function () {        
        $('ul.dropdownmenu li.menu ul').slideUp('fast');
        $('#headerArea').animate({height:190},'normal').clearQueue();
    });

  //공통탭메뉴ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

    var cnt = $('.tab_menu li').size(); 
    $('.contlist ul:eq(0)').show(); // 첫번째 탭 내용만 열어라
    $('.tab1').addClass('now'); //첫번째 탭메뉴 활성화
    //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***

    $('.tab_menu li').hover(
        function() { 
           $(this).css('background','#e5e5e5');
        },function() {
           $(this).css('background','#f8f8f8');
        });
    
  
    $('.tab').click(function(e){
      e.preventDefault();   // <a> href="#" 값을 강제로 막는다  
      
      var ind = $(this).index('.tab');  // 클릭시 해당 index를 뽑아준다
      //console.log(ind);
    
      $(".contlist ul").hide(); //모든 탭내용을 안보이게...
      $(".contlist ul:eq("+ind+")").show().addClass('now'); //클릭한 해당 탭내용만 보여라 
      $('.tab').removeClass('now'); //모든 탭메뉴를 비활성화
      $(this).addClass('now'); // 클릭한 해당 탭메뉴만 활성화

    });

    //패밀리사이트ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

    $('.family .arrow').toggle(function(e){
        e.preventDefault();

        $('.family').css('background','#999');
        $(this).css('color','#333');
        $('.family .aList').fadeIn('slow');	
        // $(this).find('.arrow .i').html('<i class="fa-solid fa-angle-down"></i>');	
        },function(){
            $('.family').css('background','#333');
            $('.family .aList').fadeOut('fast');
            $(this).css('color','#999');
            // $(this).find('.arrow .i').html('<i class="fa-solid fa-angle-up"></i>');	
        });

        //tab키 처리
        $('.family .arrow').on('focus', function () {        
                $('.family .aList').fadeIn('slow');	
        });
        $('.family .aList li:last a').on('blur', function () {        
                $('.family .aList').fadeIn('slow')
        });

   
   //맨위로가기 topmove

   $('.topMove').hide();

    $(window).on('scroll', function(){
    var scroll_2 = $(window).scrollTop();

    if(scroll_2 > 300) {
        $('.topMove').fadeIn('fast');
    } else {
        $('.topMove').fadeOut('fast');
    }
    })

    $('.topMove').click(function(e){
        e.preventDefault();
        $('html,body').stop().animate({'scrollTop':0}, 300);
    })

    //메인 스크롤 효과ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

    $(document).ready(function(){
        $('.numb').css('opacity','0');
        $(window).on('scroll',function(){
            var sub_scroll = $(window).scrollTop();
            var numb = [];
            var half= window.innerHeight;
            var numb_cnt = Number($('#content').find('.numb').length) - 1; // 0부터 index값 뽑기
            for (var i=0; i<=numb_cnt; i++){
                numb[i] = $('.numb:eq('+i+')').offset().top;
                if(sub_scroll > numb[i]-(half/2+250)){
                    $('.numb:eq('+i+')').addClass('boxMove');
                } else if(sub_scroll < numb[i]-half){
                    $('.numb:eq('+i+')').removeClass('boxMove');
                }
            }
        })
    })
    
});
