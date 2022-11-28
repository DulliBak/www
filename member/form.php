<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>회원가입</title>

<script src="https://code.jquery.com/jquery-1.12.4.js"></script>	
<script>
 $(document).ready(function() {
 
  $(".btn").click(function() {    // id입력 상자에 id값 입력시
    var id = $('#id').val(); 
   
    $.ajax({
        type: "POST",
        dataType: 'json',
        url: "check_id2.php",
        data: "id="+ id,  
        cache: false, 
        success: function(data)
        {
            let text='<p>아이디:' +data.id+'</p>';
                text+='<p>이름:' +data.name+'</p>';
                text+='<p>닉네임:'+data.nick+'</p>';
                text+='<p>핸드폰:'+data.hp+'</p>';
                text+='<p>이메일:'+data.email+'</p>';

            $("#loadtext").html(text);   
        }
      });

    });
});
</script>

</head>
<body>
	
	 

	  <form  name="member_form" method="post" action=""> 
	             <label for="id">아이디</label>
     			 <input type="text" name="id" id="id" required>
			     <div id="loadtext" style="display:block"></div>
     
            <input type="button" class="btn" value="처리">
	 </form>
	  

	
</body>
</html>


