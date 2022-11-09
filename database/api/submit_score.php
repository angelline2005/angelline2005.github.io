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

if (!isset($_POST["key"]) || !isset($_POST["user_id"]) || !isset($_POST["lb_id"]) || !isset($_POST["tp_id"]) || !isset($_POST["uiduser_encrypt"]) || !isset($_POST["game_id"]) || !isset($_POST["partner_id"]) || !isset($_POST["tour_id"])) {
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

if(genKey($_POST["user_id"],$_POST["lb_id"],$_POST["partner_id"],$_POST["tp_id"],$_POST["game_id"],$_POST["tour_id"]) != $_POST["key"]){
	http_response_code(200);
	echo json_encode(
		array(
			"code" => KEY_NOT_MATCH
		));
	exit();
}

if(!isset($_POST["score"])){
	http_response_code(200);
	echo json_encode(
		array(
			"code" => MISSING_PARAM
		));
	exit();
}else if(!filter_var($_POST["score"], FILTER_VALIDATE_INT)){
	http_response_code(200);
	echo json_encode(
		array(
			"code" => PARAM_TYPE_INCORRECT
		));
	exit();
}

$third_party_id = $_POST["tp_id"];
$game_id = $_POST["game_id"];
$partner_id = $_POST["partner_id"];
$tour_id = $_POST["tour_id"];
$lb_id = $_POST["lb_id"];
$user_id = $_POST["user_id"];
$new_score = (int)DatabaseLudi::prepare_input($_POST["score"]);

$score_key = $_COOKIE['hwtk'];
$score_encrypt = $_COOKIE['hwttag'];
if($new_score >= MIN_SCORE_TO_VERIFY && verifyScore($new_score,$score_key) != $score_encrypt){
	http_response_code(200);
	echo json_encode(
		array(
			"code" => SCORE_NOT_VALID
		));
	exit();
}


			global $DatabaseLudi,$conn,$user_info;
			if($conn == null){
				$DatabaseLudi = new DatabaseLudi();
				$conn = $DatabaseLudi->getConnection();
			}
			

			//$query = "SELECT u.user_id,u.third_party_id,i.user_name FROM users as u inner join inventory as i on u.user_id = i.user_id WHERE u.third_party_id = ? LIMIT 0,1";
			$query = "SELECT lb.score,e.snapshot,UNIX_TIMESTAMP(e.start_time)*1000 as start_time,UNIX_TIMESTAMP(e.end_time)*1000 as end_time,e.event_id,e.tour_id,t.active,t.num_event FROM leaderboard as lb,event as e,tour as t WHERE lb.id = :lb_id and lb.event_id = e.event_id and e.tour_id = t.tour_id";
			
			$stmt = $conn->prepare( $query );
			$stmt->bindParam(':lb_id', $lb_id);
			$stmt->execute();
			$num = $stmt->rowCount();

			if($num > 0){
				
				$row = $stmt->fetch(PDO::FETCH_ASSOC);
				$active = $row['active'];
				$score = $row['score'];
				$num_event = $row['num_event'];
				//$curr_event = $row['curr_event'];
				$snapshot = json_decode($row['snapshot'],true);
				$event_id = $row['event_id'];
				$tour_id = $row['tour_id'];
				if($active == 0){
					$DatabaseLudi->closeConnection();
					http_response_code(200);

					echo json_encode(array("code" => TOUR_NOT_ACTIVE));
					exit();
				}
				if(getdate()[0] * 1000 > $row['end_time'] && $num >= $num_event){
					$DatabaseLudi->closeConnection();
					http_response_code(200);

					echo json_encode(array("code" => TOUR_ENDED));
					exit();
				}
				if(getdate()[0] * 1000 < $row['start_time']){
					$DatabaseLudi->closeConnection();
					http_response_code(200);

					echo json_encode(array("code" => EVENT_NOT_START));
					exit();
				}
				if(getdate()[0] * 1000 > $row['end_time']){// check if have new event
					$query = "SELECT event_id,UNIX_TIMESTAMP(start_time)*1000 as start_time,UNIX_TIMESTAMP(end_time)*1000 as end_time FROM event WHERE tour_id = :tour_id order by event_id desc";
					$stmt = $conn->prepare( $query );
					$stmt->bindParam(':tour_id', $tour_id);
					$stmt->execute();
					$num = $stmt->rowCount();
					
					$active_event = -1;
					if($num > 0){
						$row = $stmt->fetch(PDO::FETCH_ASSOC);
						
						$active_event = $row['event_id'];
						if(getdate()[0] * 1000 > $row['end_time']){
							$active_event = -1;
							$DatabaseLudi->closeConnection();
							http_response_code(200);

							echo json_encode(array("code" => EVENT_ENDED_NO_NEW_EVENT));
							exit();
						}else{// front end get new info for new event and ask user submit score to new event
							$DatabaseLudi->closeConnection();
							http_response_code(200);

							echo json_encode(array("code" => EVENT_ENDED_HAVE_NEW_EVENT));
							exit();
						}
					}else{
						$DatabaseLudi->closeConnection();
						http_response_code(200);

						echo json_encode(array("code" => TOUR_NOT_ACTIVE));
						exit();
					}
				}
				if($new_score <= $score){
					$DatabaseLudi->closeConnection();
					http_response_code(200);

					echo json_encode(array("code" => NOT_HIGH_SCORE));
					exit();
				}
				// submit score
				$query = "UPDATE leaderboard SET score = :score WHERE id = :id ";
			
				$stmt = $conn->prepare($query);
				$stmt->bindParam(':score', $new_score);
				$stmt->bindParam(':id', $lb_id);
				//echo "0";
				if($stmt->execute()){
					//echo "1=" . $snapshot['min'];
					$code = 200;
					$result = array(
								"code" => SUCCESSFUL,
								"screen_shot" => "",
								"rank" => -1
							);
					if(!isset($snapshot['list']) || count($snapshot['list']) < $leaderboard_max_player || $new_score > $snapshot['min'])
					{
						//echo "2";
						$rs = updateGameLeaderBoard($user_id,$lb_id,$new_score,$event_id/*,$snapshot*/);
						$DatabaseLudi->closeConnection();
						$result = $rs;
						if(isset($rs["code"]))
							$code = 200; 
						else
							$code = 500;
						if(isset($rs["rank"]) && $rs["rank"] <= $leaderboard_max_player){
							if(isset($_POST['screenshot'])){
								$imageSize = strlen($_POST['screenshot']);
								if($imageSize > 1000 && $imageSize < 2000000){
									$img = urldecode($_POST['screenshot']);
									$filteredData = explode(',', $img);
									$data = base64_decode(str_replace(' ','+',$filteredData[1]));
									
								$path = LUDI_SCREENSHOT_PATH . $event_id;
									//echo $path;
									if (!file_exists($path)) {
										mkdir($path);
									}
									

									if(file_put_contents($path . "/" . $lb_id . '.jpg', $data) == FALSE){
										$result["screen_shot"] = "";
									}else{
										$result["screen_shot"] = LUDI_SCREENSHOT_URL . $event_id . "/" . $lb_id . ".jpg";
									}
								}else{
									$result["screen_shot"] = IMAGE_SIZE_OVER_LIMIT;
								}
							}
						}
					}
					else
					{
						$DatabaseLudi->closeConnection();
						$code = 200;
					}
					
					
					http_response_code($code);
					echo json_encode($result);
					exit();
				}else{
					//echo "3";
					$DatabaseLudi->closeConnection();
					http_response_code(200);

					echo json_encode(array("code" => DATA_BASE_ERROR));
					exit();
				}
				
			}else{
				$DatabaseLudi->closeConnection();
				http_response_code(200);

				echo json_encode(array("code" => TOUR_NOT_EXITS));
				exit();
			}

?>