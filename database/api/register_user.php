<?php
include_once 'database/api/config/database_ludi.php';
include_once 'database/api/database_function.php';
//require_once "database/vendor/autoload.php";
//use \Firebase\JWT\JWT;

// header("Access-Control-Allow-Origin: * ");
// header("Content-Type: application/json; charset=UTF-8");
// header("Access-Control-Allow-Methods: POST");
// header("Access-Control-Max-Age: 3600");
// header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

//require_once 'protected.php';

if (!isset($_POST["tp_id"]) || !isset($_POST["uiduser_encrypt"]) || !isset($_POST["game_id"]) || !isset($_POST["partner_id"]) || !isset($_POST["tour_id"])) {
	http_response_code(200);
	echo json_encode(
		array(
			"code" => USER_ID_REQUIRED
		));
	exit();
}
if($_POST["uiduser_encrypt"] != "ludilbtest" && encodeUID($_POST["tp_id"]) != $_POST["uiduser_encrypt"]){
	http_response_code(200);
	echo json_encode(
		array(
			"code" => USER_ID_REQUIRED
		));
	exit();
}
$third_party_id = $_POST["tp_id"];
$game_id = $_POST["game_id"];
$partner_id = $_POST["partner_id"];
$tour_id = $_POST["tour_id"];
$user_name = $_POST["displayName"];


			global $DatabaseLudi,$conn,$user_info,$avatar_list;
			if($conn == null){
				$DatabaseLudi = new DatabaseLudi();
				$conn = $DatabaseLudi->getConnection();
			}
			

			//$query = "SELECT u.user_id,u.third_party_id,i.user_name FROM users as u inner join inventory as i on u.user_id = i.user_id WHERE u.third_party_id = ? LIMIT 0,1";
			$query = "SELECT * FROM tour WHERE tour_id = :tour_id and game_id = :game_id and partner_id = :partner_id LIMIT 0,1";
			
			$stmt = $conn->prepare( $query );
			$stmt->bindParam(':tour_id', $tour_id);
			$stmt->bindParam(':game_id', $game_id);
			$stmt->bindParam(':partner_id', $partner_id);
			$stmt->execute();
			$num = $stmt->rowCount();

			if($num > 0){
				
				$row = $stmt->fetch(PDO::FETCH_ASSOC);
				$active = $row['active'];
				$num_event = $row['num_event'];
				$curr_event = $row['curr_event'];
				if($active == 0){
					$DatabaseLudi->closeConnection();
					http_response_code(200);

					echo json_encode(array("code" => TOUR_NOT_ACTIVE));
					exit();
				}
				$currTime = getdate()[0] * 1000;
				$query = "SELECT event_id,UNIX_TIMESTAMP(start_time)*1000 as start_time,UNIX_TIMESTAMP(end_time)*1000 as end_time FROM event WHERE tour_id = :tour_id and UNIX_TIMESTAMP(end_time)*1000 > :currTime order by event_id ASC";
				$stmt = $conn->prepare( $query );
				$stmt->bindParam(':tour_id', $tour_id);
				$stmt->bindParam(':currTime', $currTime);
				$stmt->execute();
				$num = $stmt->rowCount();
				
				$active_event = -1;
				if($num > 0){
					$row = $stmt->fetch(PDO::FETCH_ASSOC);
					//echo $row['end_time'];
					/*if(getdate()[0] * 1000 > $row['end_time'] && $num >= $num_event){
						$DatabaseLudi->closeConnection();
						http_response_code(200);

						echo json_encode(array("code" => TOUR_ENDED));
						exit();
					}*/
					
					$active_event = $row['event_id'];
					if(getdate()[0] * 1000 > $row['end_time']){
						$active_event = -1;
					}
				}else{
					$DatabaseLudi->closeConnection();
					http_response_code(200);

					echo json_encode(array("code" => TOUR_ENDED));
					exit();
				}
				$query = "SELECT * FROM users WHERE third_party_id = :third_party_id and partner_id = :partner_id LIMIT 0,1";
				$stmt = $conn->prepare( $query );
				$stmt->bindParam(':third_party_id', $third_party_id);
				$stmt->bindParam(':partner_id', $partner_id);
				$stmt->execute();
				$num = $stmt->rowCount();
				
				$lb_id = -1;
				if($num <= 0){
					$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
					try{
						$conn->beginTransaction();
						$query_reg = "INSERT INTO users
										SET 
											third_party_id = :third_party_id,
											partner_id = :partner_id,
											user_name = :user_name,
											avatar = :avatar
											";
						$avatar = $avatar_list[round(rand(0,count($avatar_list)-1))];
						$stmt_reg = $conn->prepare($query_reg);
						$stmt_reg->bindParam(':third_party_id', $third_party_id);
						$stmt_reg->bindParam(':partner_id', $partner_id);
						$stmt_reg->bindParam(':user_name', $user_name);
						$stmt_reg->bindParam(':avatar', $avatar);
					
						$stmt_reg->execute();
							
						$user_id = $conn->lastInsertId();
						
						
						if($active_event >=0 ){
							$query_reg = "INSERT INTO leaderboard
										SET user_id = :user_id,
											event_id = :event_id";

							$stmt_reg = $conn->prepare($query_reg);
							$stmt_reg->bindParam(':user_id',$user_id);
							$stmt_reg->bindParam(':event_id', $active_event);
							
							$stmt_reg->execute();
							$lb_id = $conn->lastInsertId();
						}
						
						$conn->commit();
						
						$key = "";
						if($lb_id > -1){
							$key = genKey($user_id,$lb_id,$partner_id,$third_party_id,$game_id,$tour_id);
							setcookie('hwtk', genKey($user_id,0,$partner_id,$third_party_id,$game_id,$tour_id), time() + LUDI_COMMON_TOKEN_EXPIRE, "/",LUDI_COOKIE_DOMAIN,LUDI_COOKIE_SECURE,!true);
							if(!isset($_COOKIE['hwttag'])){
								setcookie('hwttag', substr(genKey($lb_id,$user_id,$partner_id,"",$game_id,$tour_id),3,8), time() + LUDI_COMMON_TOKEN_EXPIRE, "/",LUDI_COOKIE_DOMAIN,LUDI_COOKIE_SECURE,!true);
							}
						}
						
						$DatabaseLudi->closeConnection();
						http_response_code(200);

						echo json_encode(array("code" => SUCCESSFUL,"user_id" => $user_id, "lb_id" => $lb_id, "score" => 0,"key" => $key,"avatar" => $avatar));
						exit();
						
					}catch ( PDOException $e ) { 
						// Failed to insert
						$conn->rollback();
						http_response_code(200);
						// echo json_encode(array("code" => DATA_BASE_ERROR));
						echo json_encode(array("code" => DATA_BASE_ERROR,"code" => $stmt_reg->errorCode(),"info" => $stmt_reg->errorInfo()));
						//throw $e;
						$DatabaseLudi->closeConnection();
						exit();
					}
			
				}else{// get lb_id
					$row = $stmt->fetch(PDO::FETCH_ASSOC);
					$user_id = $row['user_id'];
					$avatar = $row['avatar'];
					$score = 0;
					if($active_event >=0 ){
						$query = "SELECT * FROM leaderboard WHERE user_id = :user_id and event_id = :event_id LIMIT 0,1";
						$stmt = $conn->prepare( $query );
						$stmt->bindParam(':user_id', $user_id);
						$stmt->bindParam(':event_id', $active_event);
						$stmt->execute();
						$num = $stmt->rowCount();
						
						if($num > 0){
							$row = $stmt->fetch(PDO::FETCH_ASSOC);
							$lb_id = $row['id'];
							$score = (int)$row['score'];
						}else{
						
							$query_reg = "INSERT INTO leaderboard
										SET user_id = :user_id,
											event_id = :event_id";

							$stmt_reg = $conn->prepare($query_reg);
							$stmt_reg->bindParam(':user_id',$user_id);
							$stmt_reg->bindParam(':event_id', $active_event);
							
							$stmt_reg->execute();
							$lb_id = $conn->lastInsertId();
						}
						
					}
					$key = "";
					if($lb_id > -1){
						$key = genKey($user_id,$lb_id,$partner_id,$third_party_id,$game_id,$tour_id);
						setcookie('hwtk', genKey($user_id,0,$partner_id,$third_party_id,$game_id,$tour_id), time() + LUDI_COMMON_TOKEN_EXPIRE, "/",LUDI_COOKIE_DOMAIN,LUDI_COOKIE_SECURE,!true);
						if(!isset($_COOKIE['hwttag'])){
							setcookie('hwttag', substr(genKey($lb_id,$user_id,$partner_id,"",$game_id,$tour_id),3,8), time() + LUDI_COMMON_TOKEN_EXPIRE, "/",LUDI_COOKIE_DOMAIN,LUDI_COOKIE_SECURE,!true);
						}
					}
					$DatabaseLudi->closeConnection();
					http_response_code(200);

					echo json_encode(array("code" => SUCCESSFUL,"user_id" => $user_id, "lb_id" => $lb_id, "score" => $score,"key" => $key,"avatar" => $avatar));
					exit();
				}
			}else{
				$DatabaseLudi->closeConnection();
				http_response_code(200);

				echo json_encode(array("code" => TOUR_NOT_EXITS));
				exit();
			}

?>