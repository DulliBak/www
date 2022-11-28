var cnt = $('.tab2_menu li').size(); 
    $('#contlist2 .list:eq(0)').show(); // 첫번째 탭 내용만 열어라
    $('.tab1').addClass('now');
    // $('.tab1').addClass('move0'); //첫번째 탭메뉴 활성화
    //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***

    
    $('.tabs2 .tab').click(function(e){
      e.preventDefault();   // <a> href="#" 값을 강제로 막는다  
      
      var ind = $(this).index('.tabs2 .tab');  // 클릭시 해당 index를 뽑아준다
      //console.log(ind);
    
      $("#contlist2 .list").hide(); //모든 탭내용을 안보이게...
      $("#contlist2 .list:eq("+ind+")").show().addClass('now'); //클릭한 해당 탭내용만 보여라  
      $(".tabs2 .tab").removeClass('move0 move1 move2 move3');
      $(".tabs2 .tab:eq("+ind+")").addClass('move'+ind); 
      $('.tabs2 .tab').removeClass('now'); //모든 탭메뉴를 비활성화
      $(this).addClass('now'); // 클릭한 해당 탭메뉴만 활성화

    });