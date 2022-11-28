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
                txt+= '<img src="./images/content1/new'+(Number(i)+1)+'.png" alt="'+product[i].subtitle+'"></img>';
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

                $('.product_int').html(txt);
                
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
}        
});

// popClose
    $('.close_btn2, .modal_box2').click(function(e){
    e.preventDefault();
    $('.modal_box2').fadeOut('fast');
    $('.product_int').fadeOut('fast');
    $('.close_btn2').fadeOut('fast');
    });

       
    
    

