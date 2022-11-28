<? 
	session_start(); 
	@extract($_POST);
    @extract($_GET);
    @extract($_SESSION);

	ini_set('display_errors', 0);
ini_set('display_startup_errors', 0);
error_reporting(E_ALL);
	include "../lib/dbconn.php";

	$sql = "select * from greet where num=$num";
	$result = mysql_query($sql, $connect);

	$row = mysql_fetch_array($result);       	
	$item_subject     = $row[subject];
	$item_content     = $row[content];
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head> 
<meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>고객센터-공지사항</title>

	<link rel="stylesheet" href="../common/css/common.css">
    <link rel="stylesheet" href="../sub6/common/css/sub6common.css">
	<link rel="stylesheet" href="../sub6/css/change.css">
</head>

<script
      src="https://kit.fontawesome.com/7225d34e82.js"
      crossorigin="anonymous"
    ></script>
    <script src="http://skyfaery.cafe24.com/common/js/prefixfree.min.js"></script>

<body>

<? include "../common/sub_header.html" ?>

<div class="main">
      <img src="../sub6/common/images/visual.jpg" alt="고객센터 이미지">
      <h3>고객센터</h3>
    </div>

    <div class="subNav">
      <ul>
        <li><a class="current" href="../greet/list.php">공지사항</a></li>
        <li><a href="../sub6/sub6_2.html">고객의 소리</a></li>
        <li><a href="../sub6/sub6_3.html">FAQ</a></li>
        <li><a href="../sub6/sub6_4.html">오시는 길</a></li>
      </ul>
    </div>

    <article id="content">
      <div class="titleArea">
        <div class="lineMap">
          <i class="fa-solid fa-house"></i
          ><span class="hidden">홈</span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;
          <span>고객센터&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span>
          <strong>공지사항</strong>
        </div>
        <h2>공지사항</h2>
      </div>
</head>

<body>
<div id="wrap">
  <div id="header">
    <? include "../lib/top_login2.php"; ?>
  </div>  <!-- end of header -->

  <div id="menu">
	<? include "../lib/top_menu2.php"; ?>
  </div>  <!-- end of menu --> 

  <div id="content">
	<div id="col1">
		<div id="left_menu">
<?
			include "../lib/left_menu.php";
?>
		</div>
	</div> <!-- end of col1 -->

	<div id="col2">        
		<!-- <div id="title">
			<img src="../img/title_greet.gif">
		</div>

		<div class="clear"></div>

		<div id="write_form_title">
			<img src="../img/write_form_title.gif">
		</div> -->

		<div class="clear"></div>
		<form  name="board_form" method="post" action="insert.php?mode=modify&num=<?=$num?>&page=<?=$page?>"> 
		<div id="write_form">
			<div class="write_line"></div>
			<div id="write_row1">
				<div class="col1"> 닉네임 </div>
				<div class="col2"><?=$usernick?></div>
			</div>
			<div class="write_line"></div>
			<div id="write_row2"><div class="col1"> 제목   </div>
			                     <div class="col2"><input type="text" name="subject" value="<?=$item_subject?>" ></div>
			</div>
			<div class="write_line"></div>
			<div id="write_row3">
				<div class="col1"> 내용   </div>
			    <div class="col2"><textarea rows="15" cols="79" name="content"><?=$item_content?></textarea></div>
			</div>
			<div class="write_line"></div>
		</div>

		<div id="write_button">
			<button type="submit">수정</button>&nbsp;
			<a href="list.php?page=<?=$page?>">목록</a>
		</div>
		</form>

	</div> <!-- end of col2 -->
  </div> <!-- end of content -->
</div> <!-- end of wrap -->
</article>
<? include "../common/sub_footer.html" ?>
</body>
</html>