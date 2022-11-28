<? 
	session_start(); 
    ini_set('display_errors', 0);
    ini_set('display_startup_errors', 0);
    error_reporting(E_ALL);
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>회원가입</title>
	<link rel="stylesheet" href="../common/css/common.css">
	<link rel="stylesheet" href="./css/member_form.css">
	
	
	<script src="./js/jquery-1.12.4.min.js"></script>
    <script src="./js/jquery-migrate-1.4.1.min.js"></script>
	
	<script>
	 $(document).ready(function() {
  
        function check_nick()
   {
     window.open("../member/check_nick.php?nick=" + document.member_form.nick.value,
         "NICKcheck",
          "left=200,top=200,width=250,height=100,scrollbars=no,resizable=yes");
   }

   
   
 
 //id 중복검사
 $("#id").keyup(function() {    // id입력 상자에 id값 입력시
    var id = $('#id').val(); //aaa

    $.ajax({
        type: "POST",
        url: "check_id.php",
        data: "id="+ id,  
        cache: false, 
        success: function(data)
        {
             $("#loadtext").html(data);
        }
    });
});
		 
//nick 중복검사		 
$("#nick").keyup(function() {    // id입력 상자에 id값 입력시
    var nick = $('#nick').val();

    $.ajax({
        type: "POST",
        url: "check_nick.php",
        data: "nick="+ nick,  
        cache: false, 
        success: function(data)
        {
             $("#loadtext2").html(data);
        }
    });
});		 

$('.pw_input').keyup(function(){
    let pass1 = $("#pass").val();
          let pass2 = $("#pass_confirm").val();

          if (pass1 != "" || pass2 != ""){
           if (pass1 == pass2){
               $("#checkPw").html('비밀번호가 일치합니다');
               $("#checkPw").css('color','green');
              } else {
               $("#checkPw").html('비밀번호가 일치하지 않습니다');
                  $("#checkPw").css('color','red');
              }
          }
   });

});
	
	
	
	</script>
<script>
   

  
   function check_input()
   {
      if (!document.member_form.id.value)
      {
          alert("아이디를 입력하세요");    
          document.member_form.id.focus();
          return;
      }

      if (!document.member_form.pass.value)
      {
          alert("비밀번호를 입력하세요");    
          document.member_form.pass.focus();
          return;
      }

      if (!document.member_form.pass_confirm.value)
      {
          alert("비밀번호를 다시 입력하세요");    
          document.member_form.pass_confirm.focus();
          return;
      }

      if (!document.member_form.name.value)
      {
          alert("이름을 입력하세요");    
          document.member_form.name.focus();
          return;
      }

      if (!document.member_form.nick.value)
      {
          alert("닉네임을 입력하세요");    
          document.member_form.nick.focus();
          return;
      }


      if (!document.member_form.hp2.value || !document.member_form.hp3.value )
      {
          alert("휴대폰 번호를 입력하세요");    
          document.member_form.nick.focus();
          return;
      }

      if (document.member_form.pass.value != 
            document.member_form.pass_confirm.value)
      {
          alert("비밀번호가 일치하지 않습니다.\n다시 입력해주세요.");    
          document.member_form.pass.focus();
          document.member_form.pass.select();
          return;
      }

      document.member_form.submit(); 
		   // insert.php 로 변수 전송
   }

   function reset_form()
   {
      document.member_form.id.value = "";
      document.member_form.pass.value = "";
      document.member_form.pass_confirm.value = "";
      document.member_form.name.value = "";
      document.member_form.nick.value = "";
      document.member_form.hp1.value = "010";
      document.member_form.hp2.value = "";
      document.member_form.hp3.value = "";
      document.member_form.email1.value = "";
      document.member_form.email2.value = "";
	  
      document.member_form.id.focus();

      return;
   }
</script>
</head>
<body>

<a class="logo" href="../index.html"><img src="../common/images/logo.png" alt="오리온 로고"></a> 	 
	<article id="content">  
	  
	  <h2 class="hidden">회원가입</h2>
      <span class="option"><span>&#42;</span> 는 필수입력사항입니다.</span>
	  <form name="member_form" method="post" action="insert.php"> 
		
     <table>
      <caption class="hidden">회원가입</caption>
     	<tr>
     		<th scope="col"><label for="id">아이디 <span>&#42;</span></label></th>
     		<td>
     			 <input type="text" name="id" id="id" required>
			     <span id="loadtext"></span>
     		</td>
     	</tr>
     	<tr>
     		<th scope="col"><label for="pass">비밀번호 <span>&#42;</span></label></th>
     		<td>
     			 <input type="password" name="pass" class="pw_input" id="pass" required>
     		</td>
     	</tr>
     	<tr>
     		<th scope="col"><label for="pass_confirm">비밀번호 확인 <span>&#42;</span></label></th>
     		<td>
     			<input type="password" name="pass_confirm" class="pw_input" id="pass_confirm"  required>
                <span id="checkPw"></span>
     		</td>
     	</tr>
     	<tr>
     		<th scope="col"><label for="name">이름 <span>&#42;</span></label></th>
     		<td>
     			<input type="text" name="name" id="name"  required> 
     		</td>
     	</tr>
     	<tr>
     		<th scope="col"><label for="nick">닉네임 <span>&#42;</span></label></th>
     		<td>
     			 <input type="text" name="nick" id="nick"  required>
			     <span id="loadtext2"></span>
     		</td>
     	</tr>
     	<tr class="number">
     		<th scope="col">연락처 <span>&#42;</span></th>
     		<td>
     			<label class="hidden" for="hp1">휴대폰번호 앞 3자리</label>
     			<select class="hp" name="hp1" id="hp1"> 
              <option value='010'>010</option>
              <option value='011'>011</option>
              <option value='016'>016</option>
              <option value='017'>017</option>
              <option value='018'>018</option>
              <option value='019'>019</option>
          </select> - 
          <label class="hidden" for="hp2">전화번호 중간 4자리</label><input type="text" class="hp" name="hp2" id="hp2"  required> - <label class="hidden" for="hp3">전화번호끝4자리</label><input type="text" class="hp" name="hp3" id="hp3"  required>
     			
     		</td>
     	</tr>
     	<tr>
     		<th scope="col">이메일 <span>&#42;</span></th>
     		<td>
     		  <label class="hidden" for="email1">이메일아이디</label>
     			<input type="text" id="email1" name="email1" required>  @  
     			<label class="hidden" for="email2">이메일주소</label>
     			<input type="text" name="email2" id="email2" required>
     		</td>
     	</tr>
     	<tr>
     		<td class="btn" colspan="2">
     			<a class="joinBtn" href="#" onclick="check_input()">가입하기</a>&nbsp;&nbsp;
				<a class="resetBtn" href="#" onclick="reset_form()">다시작성</a>
     		</td>
     	</tr>
     </table>

	 </form>
	  
	</article>
	 <? include "../common/subfoot.html" ?>
</body>
</html>


