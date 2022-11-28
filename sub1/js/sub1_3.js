
var smh = $('.main').height();
var h1= $('#year1 div:eq(0)').offset().top-150;
var h2= $('#year1 div:eq(1)').offset().top-150;
var h3= $('#year1 div:eq(2)').offset().top+650;
var h4= $('#year1 div:eq(3)').offset().top+1200;

//스크롤의 좌표가 변하면.. 스크롤 이벤트
$(window).on('scroll',function(){
    var scroll = $(window).scrollTop();
  
  //sticky menu 처리
  if(scroll>smh+400){
    $('.history .tabs').addClass('navOn');
    $('.history .tabs li').css('margin-right','0').css('border-radius','0');
    $('.history .histab_menu li:first-child').css('border-radius','0 0 0 30px');
    $('.history .histab_menu li:last-child').css('border-radius','0 0 30px 0');
    $('.history .tabs a').css('border-radius','0');
    $('.history .histab_menu li:first-child a').css('border-radius','0 0 0 30px');
    $('.history .histab_menu li:last-child a').css('border-radius','0 0 30px 0');
    $('.histab_menu li:last-child').css('margin-right','0')
    $('.history .histab_menu').css('width','640');
    $('.history .histab_menu').addClass('navOn');
    $('#headerArea').hide();
  }else {
    $('.history .tabs').removeClass('navOn');
    $('.history .histab_menu').css('width','770');
    $('.history .tabs li').css('margin-right','6%').css('border-radius','30px');
    $('.history .tabs a').css('border-radius','30px');
    $('.histab_menu li:last-child').css('margin-right','0')
    $('.history .histab_menu').removeClass('navOn');
    $('#headerArea').show();
  }
      
  $('.histab_menu li').find('a').removeClass('now');
  var cnt= 0;

       //스크롤의 거리의 범위를 처리
      if(scroll>=h1-300 && scroll<h2-400){
        cnt=0;
        $('.historyMain li:eq(0)').addClass('navOn2');
        $('.historyMain li:eq(1)').removeClass('navOn2');
        $('.historyMain li:eq(2)').removeClass('navOn2');
        $('.historyMain li:eq(3)').removeClass('navOn2');
      }else if(scroll>=h2-300 && scroll<h3-300){
        cnt=1;
        $('.historyMain li:eq(0)').removeClass('navOn2');
        $('.historyMain li:eq(1)').addClass('navOn2');
        $('.historyMain li:eq(2)').removeClass('navOn2');
        $('.historyMain li:eq(3)').removeClass('navOn2');
      }else if(scroll>=h3-1200 && scroll<h4-1000){
        cnt=2; 
        $('.historyMain li:eq(0)').removeClass('navOn2');
        $('.historyMain li:eq(1)').removeClass('navOn2');
        $('.historyMain li:eq(2)').addClass('navOn2');
        $('.historyMain li:eq(3)').removeClass('navOn2');
      }else if(scroll>=h4-900 && scroll<h4+1700){
        cnt=3;
        $('.historyMain li:eq(0)').removeClass('navOn2');
        $('.historyMain li:eq(1)').removeClass('navOn2');
        $('.historyMain li:eq(2)').removeClass('navOn2');
        $('.historyMain li:eq(3)').addClass('navOn2');
      }else if(scroll>=h4+500 && scroll<h4+2200){
        cnt=4;
        $('.historyMain li:eq(0)').removeClass('navOn2');
        $('.historyMain li:eq(1)').removeClass('navOn2');
        $('.historyMain li:eq(2)').removeClass('navOn2');
        $('.historyMain li:eq(3)').addClass('navOn2');
      }else if(scroll>h4+2200){
        $('.histab_menu li a').removeClass('now');
      }
      else
      {$('.historyMain li').removeClass('navOn2');}

      $('.histab_menu li:eq('+cnt+')').find('a').addClass('now');
      
});

  //탭메뉴 호버시 옅은회색으로 변경
  // $('.histab_menu li').hover(
  // function() { 
  //    $(this).css('background','#e5e5e5');
  // },function() {
  //    $(this).css('background','#f8f8f8');
  // });

  //슬라이드 메뉴 클릭 시 해당 콘텐츠로 스스륵~~~ 이동
  $('.histab_menu li a').click(function(e){
    e.preventDefault(); //href="#" 속성을 막아주는..메소드
   
     var value=0; //이동할 스크롤의 거리

     if($(this).hasClass('tab1')){   //첫번째 메뉴를 클릭했냐? 
        value= $('#year1 div:eq(0)').offset().top-150;// 해당 콘테츠의 상단의 거리~~
      
     }else if($(this).hasClass('tab2')){
        value= $('#year1 div:eq(1)').offset().top-150; //오프셋:알아서 거리 계산해줌. 
       
     }else if($(this).hasClass('tab3')){
        value= $('#year1 div:eq(2)').offset().top+650; 
      
     }else if($(this).hasClass('tab4')){
        value= $('#year1 div:eq(3)').offset().top+1500; 
       
     }
     
   $("html,body").stop().animate({"scrollTop":value},500); //스무스한움직임
 });
