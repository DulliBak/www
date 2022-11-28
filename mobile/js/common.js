var op = false;  //네비가 열려있으면(true) , 닫혀있으면(false)
      
    $(".open_menu").click(function(e) { //메뉴버튼 클릭시
        e.preventDefault();
        
        // var documentHeight =  $(document).height();
        // $("#gnb").css('height',documentHeight); 
 
       if(op==false){
         $(".main_menu").animate({right:0,opacity:1}, 'fast');
         $('#headerArea').addClass('mn_open');
         op=true;
       }else{
         $(".main_menu").animate({right:'-100%',opacity:0}, 'fast');
         $('#headerArea').removeClass('mn_open');
         op=false;
       }
 
    });

     //2depth 메뉴 교대로 열기 처리 
     var onoff=[false,false,false,false];
     var arrcount=onoff.length;
     
    //  console.log(arrcount);
     
     $('#gnb .depth1 h3 a').click(function(){
         var ind=$(this).parents('.depth1').index();
         
        //  console.log(ind);
         
        if(onoff[ind]==false){
         //$('#gnb .depth1 ul').hide();
         $(this).parents('.depth1').find('ul').slideDown('fast');
         $(this).parents('.depth1').siblings('li').find('ul').slideUp('fast');
          for(var i=0; i<arrcount; i++) onoff[i]=false; 
          onoff[ind]=true;
            
          $('.depth1 span').text('+');   
          $(this).find('span').text('-').css('color','#999');   
             
        }else{
          $(this).parents('.depth1').find('ul').slideUp('fast');
          $('.depth1 span').css('color','#d70c19'); 
          onoff[ind]=false;   
            
          $(this).find('span').text('+').css('color','#d70c19');     
        }
     });

//스크롤 네비 픽스     
var smh=$('.main').height(); 

$(window).on('scroll',function(){//스크롤의 거리가 발생하면
    var scroll = $(window).scrollTop();  //스크롤의 거리를 리턴하는 함수
    //console.log(scroll);

    if(scroll>smh-400){//스크롤 내리면
        $('#headerArea').css('background','#fff').css('box-shadow','0 5px 10px 0 rgba(0, 0, 0, 0.1)');
    }else{//스크롤 내리기 전
        $('#headerArea').css('background','none').css('box-shadow','0 5px 10px 0 rgba(0, 0, 0, 0)');
       }
    
 });

 //패밀리사이트ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

 $('.family .arrow').toggle(function(e){
    e.preventDefault();

        $('.family').css('background','#999');
        $(this).css('color','#333');
        $('.family .aList').fadeIn('slow');	
    
    },function(){
        $('.family').css('background','#333');
        $('.family .aList').fadeOut('fast');
        $(this).css('color','#999');
       
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