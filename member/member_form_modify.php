<?
    session_start();

    ini_set('display_errors', 0);
    ini_set('display_startup_errors', 0);
    error_reporting(E_ALL);

    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta charset="utf-8">
<link rel="stylesheet" href="../common/css/common.css">
<link rel="stylesheet" href="./css/member.css">

<script src="./js/jquery-1.12.4.min.js"></script>
<script src="./js/jquery-migrate-1.4.1.min.js"></script>
<script>
    $(document).ready(function(){
        //nick 중복검사		 
    $("#nick").keyup(function() {    // id입력 상자에 id값 입력시
    var nick = $('#nick').val();
        console.log("a")
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
    })
   function check_id()
   {
     window.open("./check_id.php?id=" + document.member_form.id.value,
         "IDcheck",
         "left=200,top=200,width=250,height=100,scrollbars=no,resizable=yes");
   }

   function check_nick()
   {
     window.open("./check_nick.php?nick=" + document.member_form.nick.value,
         "NICKcheck",
          "left=200,top=200,width=250,height=100,scrollbars=no,resizable=yes");
   }

   

   function check_input()
   {
      if (!document.member_form.pass.value)
      {
          alert("비밀번호를 입력하세요");
          document.member_form.pass.focus();
          return;
      }

      if (!document.member_form.pass_confirm.value)
      {
          alert("비밀번호확인을 입력하세요");
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
<?
    include "../lib/dbconn.php";

    $sql = "select * from member where id='$userid'";
    $result = mysql_query($sql, $connect);

    $row = mysql_fetch_array($result);

    $hp = explode("-", $row[hp]);
    $hp1 = $hp[0];
    $hp2 = $hp[1];
    $hp3 = $hp[2];

    $email = explode("@", $row[email]);
    $email1 = $email[0];
    $email2 = $email[1];

    mysql_close();
?>
<body>

<a class="logo" href="../index.html"><img src="../common/images/logo.png" alt="오리온 로고"></a> 

<article id="content">  
	  
	  <h2 class="hidden">회원정보수정</h2>
     
	  <form name="member_form" method="post" action="modify.php"> 
      <span class="option"><span>&#42;</span> 는 필수입력사항입니다.</span>
    
    <table>
      <caption class="hidden">정보수정</caption>
     	<tr>
     		<th scope="col"><label for="id">아이디 <span>&#42;</span></label></th>
     		<td>
                 <?= $row[id] ?>
     		</td>
     	</tr>
     	<tr>
     		<th scope="col"><label for="pass">비밀번호 <span>&#42;</span></label></th>
     		<td>
                <input type="password" name="pass" value="">
     		</td>
     	</tr>
     	<tr>
     		<th scope="col"><label for="pass_confirm">비밀번호 확인 <span>&#42;</span></label></th>
     		<td>
                <input type="password" name="pass_confirm" value="">
     		</td>
     	</tr>
     	<tr>
     		<th scope="col"><label for="name">이름 <span>&#42;</span></label></th>
     		<td>
              <input type="text" name="name" value="<?= $row[name] ?>">
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
              <option value='010' <? if($hp1=='010'){echo 'selected';} ?>>010</option>
              <option value='011' <? if($hp1=='011'){echo 'selected';} ?>>011</option>
              <option value='016' <? if($hp1=='016'){echo 'selected';} ?>>016</option>
              <option value='017' <? if($hp1=='017'){echo 'selected';} ?>>017</option>
              <option value='018' <? if($hp1=='018'){echo 'selected';} ?>>018</option>
              <option value='019' <? if($hp1=='019'){echo 'selected';} ?>>019</option>
          </select> - <input type="text" class="hp" name="hp2" value="<?= $hp2 ?>"> - <input type="text" class="hp" name="hp3" value="<?= $hp3 ?>">
     			
     		</td>
     	</tr>
     	<tr>
     		<th scope="col">이메일 <span>&#42;</span></th>
     		<td>
                 <input type="text" id="email1" name="email1" value="<?= $email1 ?>"> @ <input type="text" name="email2"
			           value="<?= $email2 ?>">
     		</td>
     	</tr>

        <tr>
     		<td class="btn" colspan="2">
     			<a class="joinBtn" href="#" onclick="check_input()">정보수정</a>&nbsp;&nbsp;
				<a class="resetBtn" href="#" onclick="reset_form()">다시작성</a>
     		</td>
     	</tr>
     </table>
    </form>
  </article>
	 <? include "../common/subfoot.html" ?>
</body>
</html>
