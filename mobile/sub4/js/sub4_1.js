// JavaScript Document

	var article = $('.qna li');
    $('.qna li:first-child p').show();

  	$('.qna .q a').click(function(e){   //각각의 질문을 클릭하면
      e.preventDefault();

	var myArticle = $(this).parents('.qna li');  //클릭한 해당 메뉴에 li(리스트) 
	
	if(myArticle.hasClass('hide')){ 
          //클릭한 해당 리스트가 닫혀있냐??
	    article.find('p').slideUp(100); // 모든 리스트의 답변을 닫아라
		// $('.plus::after').addClass(rotate);
        article.removeClass('show').addClass('hide');
         //모든 리스트의 클래스 hide로 바꾼다
		myArticle.removeClass('hide').addClass('show');  // 클래스를 show로 바꾼다
	    myArticle.find('p').slideDown('fast').fadeIn(400);  //해당 리스트의 답변을 열어라~~~
	 } else {  //클릭한 해당 리스트가 열려있냐?? (show)
	   myArticle.removeClass('show').addClass('hide');  //클래스 hide로 바꾼다
	   myArticle.find('p').slideUp('fast').fadeOut(200);   //해당 리스트의 답변을 닫아라~~~
	} 
});   

	// $('.all').text('모두열기');

	$('.all').toggle(function(e){
	    e.preventDefault(); 
		article.find('p').slideDown(100);
		article.removeClass('hide').addClass('show');
		$(this).addClass('now').text('모두닫기');
	
	},function(e){ 
		e.preventDefault();
		article.find('p').slideUp(100);
		article.removeClass('show').addClass('hide');
		$(this).removeClass('now').text('모두열기');
		
	});  

