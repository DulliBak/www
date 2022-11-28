    $.ajax({
        url: './data/sub2_1.json',
        dataType : 'json',
        success : function(data){
            var product = data.product;
            var ind = 0;  
            var txt ='';
            function popchange(i){
                txt='';
                txt+= '<div class= "top">';
                // for(var i = 0; i < product.length; i++){
                txt+= '<img src="./images/content1/pie'+(Number(i)+1)+'.png" alt="'+product[i].subtitle+'"></img>';
                txt+= '<dl>';
                    txt+= '<dt>'+product[i].subtitle+'</dt>';
                    txt+= '<dd>'+product[i].title+'</dd>';
                txt+= '</dl>';    
                        txt+= '<ul>';
                            txt+= '<li>';
                                txt+= '<strong>용량</strong>';
                                txt+= '<span>'+product[i].gram+'</span>';
                            txt+= '</li>';
                            txt+= '<li>';
                                txt+= '<strong>칼로리</strong>';
                                txt+= '<span>'+product[i].cal+'</span>';
                            txt+= '</li>';
                            txt+= '<li>';
                                txt+= '<strong>유통기한</strong>';
                                txt+= '<span>'+product[i].date+'</span>';
                            txt+= '</li>';
                            txt+= '<li>';
                                txt+= '<strong>알러지성분</strong>';
                                txt+= '<span>'+product[i].nutri+'</span>';
                            txt+= '</li>';
                
                        txt+= '</ul>';

                txt+= '</div>';    

                $('.product_int2').html(txt);
                
                
            }
           
        // popOpen
        $('.more_btn2').click(function(e){
        e.preventDefault();
        
        ind = $(this).index('.more_btn2');  // 0 1 2 3
  
        $('.product_int').fadeIn('slow');
        $('.modal_box2').fadeIn('fast');
        $('.close_btn2').fadeIn('fast');

        popchange(ind);
   
});

// popClose
$('.close_btn2, .modal_box2').click(function(e){
    e.preventDefault();
    $('.modal_box2').fadeOut('fast');
    $('.product_int').fadeOut('fast');
    $('.close_btn2').fadeOut('fast');
    });

    

}        
});

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

       
    
    

