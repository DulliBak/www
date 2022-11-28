<?
   //header("Content-Type:application/json");
   @extract($_POST);

    if(!$id) 
   {
      echo("아이디를 입력하세요.");
   }
   else
   {
      include "../lib/dbconn.php";
 
      $sql = "select * from member where id='$id' ";
      //$sql = "select * from member";

      $result = mysql_query($sql, $connect);
      //$num_record = mysql_num_rows($result);

      $row= mysql_fetch_array($result);
      //while ( $row = mysql_fetch_array($result)) {
      //   echo "$row[id],$row[name],$row[nick],$row[hp],$row[email]";
      //}
  
      //echo  $row[name];
      echo json_encode($row);

      mysql_close();
   }

?>

