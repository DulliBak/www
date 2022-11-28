<? session_start(); ?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>로그인</title>
    <link rel="stylesheet" href="./css/login.css">
    <script src="https://kit.fontawesome.com/f8a0f5a24e.js" crossorigin="anonymous"></script>
</head>
<body>

<a class="logo" href="../index.html"><img src="../common/images/logo.png" alt="오리온 로고"></a> 

<form name="member_form" method="post" action="login.php"> 
<div class="wrap">
<div id="id_pw_input">
        <ul>
            <li><input type="text" name="id" class="login_input" placeholder="아이디" required></li>
            <li><input type="password" name="pass" class="login_input pass"  placeholder="비밀번호"  required></li>
        </ul>						
	</div>
    <div id="login_button">
		<button type="submit">로그인</button>
	</div>

    <ul class="go">
        <li><span>회원이 아니신가요?</span><a href="../member/join.html">회원가입</a></li>
        <li><span>아이디를 잊으셨나요?</span><a href="id_find.php">아이디 찾기</a></li>
        <li><span>비밀번호를 잊으셨나요?</span><a href="pw_find.php">비밀번호 찾기</a></li> 
	</ul>
</div>
</form>

</body>
</html>