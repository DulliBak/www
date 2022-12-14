<? 
	session_start(); 
	@extract($_POST);
    @extract($_GET);
    @extract($_SESSION);
?>
<?
ini_set('display_errors', 0);
ini_set('display_startup_errors', 0);
error_reporting(E_ALL);
?>
<html>
<head> 
<!-- <link href="../css/common.css" rel="stylesheet" type="text/css" media="all">
<link href="../css/greet.css" rel="stylesheet" type="text/css" media="all"> -->
<meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>고객센터-공지사항</title>
   
    <link rel="stylesheet" href="../common/css/common.css">
    <link rel="stylesheet" href="../sub6/common/css/sub6common.css">
	<link rel="stylesheet" href="../sub6/css/sub6_content1.css">

	
</head>

<script
      src="https://kit.fontawesome.com/7225d34e82.js"
      crossorigin="anonymous"
    ></script>
    <script src="http://skyfaery.cafe24.com/common/js/prefixfree.min.js"></script>
<?
	include "../lib/dbconn.php";
	if(!$scale)
	$scale=10;			// 한 화면에 표시되는 글 수

	

    if ($mode=="search")
	{
		if(!$search)
		{
			echo("
				<script>
				 window.alert('검색할 단어를 입력해 주세요!');
			     history.go(-1);
				</script>
			");
			exit;
		}

		$sql = "select * from greet where $find like '%$search%' order by num desc";
	}
	else
	{
		$sql = "select * from greet order by num desc";
	}

	$result = mysql_query($sql, $connect);

	$total_record = mysql_num_rows($result); // 전체 글 수

	// 전체 페이지 수($total_page) 계산 
	if ($total_record % $scale == 0)     
		$total_page = floor($total_record/$scale);      
	else
		$total_page = floor($total_record/$scale) + 1; 
 
	if (!$page)                 // 페이지번호($page)가 0 일 때
		$page = 1;              // 페이지 번호를 1로 초기화
 
	// 표시할 페이지($page)에 따라 $start 계산  
	$start = ($page - 1) * $scale;      

	$number = $total_record - $start;
?>
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

      <div class="contentArea">
        <!-- 본문 컨텐츠 내용 -->
        <div class="intro">
          <div class="slogan">
            <span></span>
            <p></p>
          </div>

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

		<form name="board_form" method="post" action="list.php?mode=search"> 
		<div id="list_search">
			<div id="list_search1">총 <?= $total_record ?>개의 게시물이 있습니다.</div>
				<div id="list_search2"></div>
				<div id="list_search3">
					<select name="find">
						<option value='subject'>제목</option>
						<option value='content'>내용</option>
						<option value='nick'>닉네임</option>
						<option value='name'>이름</option>
					</select></div>
				<div id="list_search4"><input type="text" name="search" placeholder="검색어를 입력하세요"></div>
				<div id="list_search5"><button type="submit">검색</div>
		</div>
		</form>

		<div class="list_count">
		<label for=""></label>
	
		<select id="scale" name="scale" onchange="location.href='list.php?scale='+this.value">
                   
                    <option value='10'>10개씩</option>
                    <option value='5'>5개씩</option>
                    <option value='15'>15개씩</option>
                    <option value='20'>20개씩</option>
		</select>

		</div>

		<div class="clear"></div>

		<div id="list_top_title">
			<ul>
				<li id="list_title1">번호</li>
				<li id="list_title2">제목</li>
				<li id="list_title3">작성자</li>
				<li id="list_title4">날짜</li>
				<li id="list_title5">조회</li>
			</ul>		
		</div>

		<div id="list_content">
<?		
   for ($i=$start; $i<$start+$scale && $i < $total_record; $i++)                    
   {
      mysql_data_seek($result, $i);       
      // 가져올 레코드로 위치(포인터) 이동  
      $row = mysql_fetch_array($result);       
      // 하나의 레코드 가져오기
	
	  $item_num     = $row[num];
	  $item_id      = $row[id];
	  $item_name    = $row[name];
  	  $item_nick    = $row[nick];
	  $item_hit     = $row[hit];

      $item_date    = $row[regist_day];
	  $item_date = substr($item_date, 0, 10);  // 10자 뽑아내라

	  $item_subject = str_replace(" ", "&nbsp;", $row[subject]);

?>
			<div id="list_item">
				<div id="list_item1"><?= $number ?></div>
				<div id="list_item2"><a href="view.php?num=<?=$item_num?>&page=<?=$page?>"><?= $item_subject ?></a></div>
				<div id="list_item3"><?= $item_nick ?></div>
				<div id="list_item4"><?= $item_date ?></div>
				<div id="list_item5"><?= $item_hit ?></div>
			</div>
<?
   	   $number--;
   }
?>
			<div id="page_button">
<?
   // 게시판 목록 하단에 페이지 링크 번호 출력
   for ($i=1; $i<=$total_page; $i++)
   {
		if ($page == $i)     // 현재 페이지 번호 링크 안함
		{
			echo "<b> $i </b>";
		}
		else
		{ 
			echo "<a href='list.php?page=$i&scale=$scale'> $i </a>";
		}      
   }
?>			
		
				</div>
				<div id="button">
					<a href="list.php?table=<?=$table?>&page=<?$page?>">목록</a>&nbsp;
<? 
	if($userid)
	{
?>
		<a href="write_form.php?table=<?=$table?>&scale=<?=$scale?>">작성</a>
<?
	}
?>
				</div>
			</div> <!-- end of page_button -->
		
        </div> <!-- end of list content -->

		<div class="clear"></div>

		

	</div> <!-- end of col2 -->
  </div> <!-- end of content -->
</div> <!-- end of wrap -->
          
      </div>
    </article>
    <? include "../common/sub_footer.html" ?>

</body>
</html>
