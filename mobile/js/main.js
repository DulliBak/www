
//메인 비쥬얼 슬라이드

var startX, endX;
var imgCount;   //이미지 개수
// var imgSize;   //이미지 너비
var imgIndex= 0;  //이미지 순서
var spanBtn='';
 
 imgCount=$('.visual ul li').length;  //li의 개수를 담는다
//  imgSize=$(window).width();  // 페이지 로드시 윈도우의 너비값을 li의 너비값으로 반환한다
//  $('.visual ul li').width(imgSize);  

//  $('.visual').append("<div class='pageNum'></div>");  //이미지 개수만큼 똥긂뱅이 만들기
//  for(var i=1; i<=imgCount;i++){
//      spanBtn+='<span></span>';
//  }
//  $('.visual .pageNum').html(spanBtn);      
//  $('.visual .pageNum span:eq(0)').css('background','#d70c19');  

$('.visual ul li:eq(0)').addClass('curr');

$('.visual').on('touchstart mousedown',function(e){ 
e.preventDefault();      
startX=e.pageX || e.originalEvent.touches[0].pageX;      
});
   
$('.visual').on('touchend mouseup',function(e){   
e.preventDefault();      
endX=e.pageX || e.originalEvent.changedTouches[0].pageX;  

if(startX>endX) {  
    //$('body').append(' 오른쪽으로 터치드래그' + '<br>');
    imgIndex++;
    if(imgIndex==3)imgIndex=0;

    $('.visual ul li').hide().removeClass('curr');
    $('.visual ul li:eq('+imgIndex+')').stop().fadeIn('500').addClass('curr');
    
    
}else{      
    //$('body').append(' 왼쪽로 터치드래그' + '<br>');
    imgIndex--;
    if(imgIndex<0)imgIndex=2;

    $('.visual ul li').hide().removeClass('curr');
    $('.visual ul li:eq('+imgIndex+')').stop().fadeIn('500').addClass('curr');
}
     
 //$('.visual .pageNum span').css({'background':'#fff'});
 //$('.visual .pageNum span:eq('+imgIndex+')').css({'background':'#red'});
   
   
});

// $(window).resize(function(){    //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
//      imgSize = $(window).width();   //너비를 li의 크기로 반환한다
//       $('.visual li').width(imgSize); 
//       $('.visual ul').css('left',-imgSize*imgIndex); //left값을 li의 너비 값에 대응하게 처리
// });  
 
//about 터치이벤트

var start2X, end2X;
    
$('.aboutbox img').on('touchstart mousedown',function(e){
  e.preventDefault();
       
  start2X=e.pageX || e.originalEvent.touches[0].pageX;
 
});
    
$('.aboutbox img').on('touchend mouseup',function(e){   
 e.preventDefault();
       
 end2X=e.pageX || e.originalEvent.changedTouches[0].pageX;

 if(start2X>end2X) {
    $('.about .box1').css('display','none');
    $('.about .box2').css('display','block');
}else{      
   
   $('.about .box2').css('display','none');
   $('.about .box1').css('display','block');
} 
 });


 //index newbest 뉴베스트ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ


    /* ========
    Debugger plugin, simple demo plugin to console.log some of callbacks
    ======== */
    var myPlugin = {
      name: 'debugger',
      params: {
        debugger: false,
      },
      on: {
        init: function () {
          if (!this.params.debugger) return;
          console.log('init');
        },
        click: function (e) {
          if (!this.params.debugger) return;
          console.log('click');
        },
        tap: function (e) {
          if (!this.params.debugger) return;
          console.log('tap');
        },
        doubleTap: function (e) {
          if (!this.params.debugger) return;
          console.log('doubleTap');
        },
        sliderMove: function (e) {
          if (!this.params.debugger) return;
          console.log('sliderMove');
        },
        slideChange: function () {
          if (!this.params.debugger) return;
          console.log('slideChange', this.previousIndex, '->', this.activeIndex);
        },
        slideChangeTransitionStart: function () {
          if (!this.params.debugger) return;
          console.log('slideChangeTransitionStart');
        },
        slideChangeTransitionEnd: function () {
          if (!this.params.debugger) return;
          console.log('slideChangeTransitionEnd');
        },
        transitionStart: function () {
          if (!this.params.debugger) return;
          console.log('transitionStart');
        },
        transitionEnd: function () {
          if (!this.params.debugger) return;
          console.log('transitionEnd');
        },
        fromEdge: function () {
          if (!this.params.debugger) return;
          console.log('fromEdge');
        },
        reachBeginning: function () {
          if (!this.params.debugger) return;
          console.log('reachBeginning');
        },
        reachEnd: function () {
          if (!this.params.debugger) return;
          console.log('reachEnd');
        },
      },
    };

    // Install Plugin To Swiper
    Swiper.use(myPlugin);

    // Init Swiper
    var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-next',
      },
      // Enable debugger
      debugger: true,
    });