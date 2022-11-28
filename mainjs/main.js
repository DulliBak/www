 //index about ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

 var article = $('.dlwrap .article');
 $('.button').next().show();

 $('.about .dlwrap dt').click(function(e){   //각각의 질문을 클릭하면
     e.preventDefault();

   var myArticle = $(this).parent('.article');  //클릭한 해당 메뉴에 li(리스트) 
   
   if(myArticle.hasClass('hide')){   //클릭한 해당 리스트가 닫혀있냐??
         
       article.find('dd').slideUp('fast').fadeOut(200); // 모든 리스트의 답변을 닫아라
       article.removeClass('show').addClass('hide'); //모든 리스트의 클래스 hide로 바꾼다

       myArticle.removeClass('hide').addClass('show');  // 클래스를 show로 바꾼다
       myArticle.find('dd').slideDown('fast').fadeIn(400);  //해당 리스트의 답변을 열어라~~~
    } else {  //클릭한 해당 리스트가 열려있냐?? (show)
         myArticle.removeClass('show').addClass('hide');  //클래스 hide로 바꾼다
         myArticle.find('dd').slideUp('fast').fadeOut(200);   //해당 리스트의 답변을 닫아라~~~
    }
 });   
 
 $('.about .dlwrap a').click(function(e){   //a태그 안올라가게막기
   e.preventDefault();  });

 //index about 클릭 시 이미지 변경

 $('.about .dlwrap .button').click(function(){ 
     $('.aboutimg img').last().fadeOut('slow');
     $('.aboutimg img').first().fadeIn('slow');
     
 });
 
 $('.about .dlwrap .button2').click(function(){
     $('.aboutimg img').last().fadeIn('slow');
     $('.aboutimg img').first().fadeOut('slow');  
 });

 //index newbest 뉴베스트ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

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

//brandsㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

if (document.images) {
     this.img = new Image();
     this.img.src = "./images/brands02.jpg";
}

$('.brands a').css('opacity','0.5');
$('.brands .marketo a').css('opacity','1');

$('.brands .marketo a').hover(
   function() { 
      $(this).css('opacity', '1');
      $('.brands .dryou a').css('opacity', '0.5');
      $('.brands').css('background-image','url(./images/brands01.jpg)');
     
   });  

$('.brands .dryou a').hover(
      function() { 
         $(this).css('opacity', '1');
         $('.brands .marketo a').css('opacity', '0.5');
         $('.brands').css('background-image','url(./images/brands02.jpg)');
         
      });   

//인스타그램 슬라이드 플러그인 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

$('.slicky').slick({
    centerMode: true,
    centerPadding: '70px',
    slidesToShow: 3,
    // responsive: [
    //   {
    //     breakpoint: 180,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '50px',
    //       slidesToShow: 3
    //     }
    //   },
    //   {
    //     breakpoint: 180,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '50px',
    //       slidesToShow: 1
    //     }
    //   }
    // ]
  });
        
   
        

