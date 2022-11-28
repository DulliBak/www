 var position=0;  //최초위치
 var movesize=$('.slide_gallery ul li').width()+20;
 console.log();

 $('.slide_gallery ul').after($('.slide_gallery ul').clone());
 //after 뒤에 가따나랑

 $('.buttons').click(function(e){
  e.preventDefault();
  
  if($(this).is('.m1')){  //이전버튼 클릭
     if(position==-2040){
         $('.slide_gallery').css('left',-340);
         position=-340;
     }
      
       position-=movesize;  // 340씩 감소
           $('.slide_gallery').stop().animate({left:position},'fast',
             function(){							
                 if(position==-2040){
                     $('.slide_gallery').css('left',-340);
                     position=-340;
                 }
             }).clearQueue();

      }else if($(this).is('.m2')){  //다음버튼 클릭
        if(position>=0){
             $('.slide_gallery').css('left',-1700);
             position=-1700;
         }

         position+=movesize; // 340씩 증가
         $('.slide_gallery').stop().animate({left:position}, 'fast',
             function(){							
                 if(position==0){
                     $('.slide_gallery').css('left',-1700);
                     position=-1700;
                 }
             }).clearQueue();
         
         
   }
   console.log(position);
   console.log(movesize);
});


$(".slide_gallery li a:eq(0)").click(function(e) {
    e.preventDefault();
    $('.maincf iframe').attr('src','https://www.youtube.com/embed/HrLVBBrN4g0');
    $('.maincf .cfwrap .p1').text('도도한 나쵸');
    $('.maincf .cfwrap .p2').text('도도함이 묻어나야 진짜 나쵸다!');
  });
  
  $(".slide_gallery li a:eq(1)").click(function(e) {
    e.preventDefault();
    $('.maincf iframe').attr('src','https://www.youtube.com/embed/PdzlqnbWvwI');
    $('.maincf .cfwrap .p1').text('예감');
    $('.maincf .cfwrap .p2').text('튀기지 않은 감자칩');
  });
  
  $(".slide_gallery li a:eq(2)").click(function(e) {
    e.preventDefault();
    $('.maincf iframe').attr('src','https://www.youtube.com/embed/wDAMFAGFvhA');
    $('.maincf .cfwrap .p1').text('닥터유 용암수');
    $('.maincf .cfwrap .p2').text('경도가 높아 레벨이 다르다!');
  });
  
  $(".slide_gallery li a:eq(3)").click(function(e) {
    e.preventDefault();
    $('.maincf iframe').attr('src','https://www.youtube.com/embed/YnvxBvwdB_A');
    $('.maincf .cfwrap .p1').text('마켓오 네이처 오!그래놀라바');
    $('.maincf .cfwrap .p2').text('그래놀라와 원물로만 100% 채우다');
  });

  $(".slide_gallery li a:eq(4)").click(function(e) {
    e.preventDefault();
    $('.maincf iframe').attr('src','https://www.youtube.com/embed/cCslvOewDHE');
    $('.maincf .cfwrap .p1').text('오리온 초코파이情');
    $('.maincf .cfwrap .p2').text('"말하지 않아도 알아요, 눈빛만 보아도 알아요"');
  });
