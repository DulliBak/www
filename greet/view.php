<? 
	session_start(); 
	/*
	   $num=1 > 게시글번호
	   $page / $scale 
	*/
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
      // 하나의 레코드 가져오기
	
	$item_num     = $row[num];
	$item_id      = $row[id];
	$item_name    = $row[name];
  	$item_nick    = $row[nick];
	$item_hit     = $row[hit];

    $item_date    = $row[regist_day];

	$item_subject = str_replace(" ", "&nbsp;", $row[subject]);

	$item_content = $row[content];
	$is_html      = $row[is_html];

	if ($is_html!="y")
	{
		$item_content = str_replace(" ", "&nbsp;", $item_content);
		$item_content = str_replace("\n", "<br>", $item_content);
	}	

	$new_hit = $item_hit + 1;

	$sql = "update greet set hit=$new_hit where num=$num";   // 글 조회수 증가시킴
	mysql_query($sql, $connect);
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
	<link rel="stylesheet" href="../sub6/css/view.css">
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

<script>
    function del(href) 
    {
        if(confirm("삭제하면 복구할 수 없습니다.\n\n정말 삭제하시겠습니까?")) {
                document.location.href = href;
        }
    }
</script>
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
	</div>

	<div id="col2">
        
		<div id="title">
		</div>

		<div id="view_comment"> &nbsp;</div>

		<div id="view_title">
			<div id="view_title1"><?= $item_subject ?></div><div id="view_title2"><?= $item_nick ?> | 조회 : <?= $item_hit ?>  
			                      | <?= $item_date ?> </div>	
		</div>

		<div id="view_content">
			<?= $item_content ?>
		</div>

		<div id="view_button">
				<a href="list.php?page=<?=$page?>">목록</a>&nbsp;
<? 
	if($userid==$item_id || $userlevel==1 || $userid=="admin")
	{
?>
				<a href="modify_form.php?num=<?=$num?>&page=<?=$page?>">수정</a>&nbsp;
				<a href="javascript:del('delete.php?num=<?=$num?>')">삭제</a>&nbsp;
<?
	}
?>
<? 
	if($userid )
	{
?>
				<a href="write_form.php">작성</a>
<?
	}
?>
		</div>

		<div class="clear"></div>

	</div> <!-- end of col2 -->
  </div> <!-- end of content -->
</div> <!-- end of wrap -->
</article>
<? include "../common/sub_footer.html" ?>
</body>
</html>
