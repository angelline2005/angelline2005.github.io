<?php
//require_once 'protected.php';

function updateGameLeaderBoard($user_id,$lb_id,$score,$event_id/*,$snapshot*/){
	global $snapshotbaseLudi,$conn,$leaderboard_max_player;
	if($conn == null){
		$snapshotbaseLudi = new snapshotbaseLudi();
		$conn = $snapshotbaseLudi->getConnection();
	}
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	try{
		$conn->beginTransaction();
		$query = "SELECT snapshot FROM event WHERE event_id = :event_id FOR UPDATE";
				
		$stmt = $conn->prepare( $query );
		$stmt->bindParam(':event_id', $event_id);
		$stmt->execute();
		$num = $stmt->rowCount();

		//if($num > 0){
			$row = $stmt->fetch(PDO::FETCH_ASSOC);
			$snapshot = json_decode($row['snapshot'],true);
			if(isset($snapshot["list"])){
				if(count($snapshot['list']) < $leaderboard_max_player || $score > $snapshot['min']){
					$snapshot['list'][$lb_id] = $score;
					arsort($snapshot['list']);
					if(count($snapshot['list']) > $leaderboard_max_player){
						array_pop($snapshot['list']);
					}
					if($score > $snapshot['max']){
						$snapshot['max'] = $score;
					}
					$snapshot['min'] = end($snapshot['list']);
					
					$snapshot_json = json_encode($snapshot);
					$query_reg = "UPDATE event SET snapshot = :snapshot WHERE event_id = :event_id ";
					
					$stmt_reg = $conn->prepare($query_reg);
					$stmt_reg->bindParam(':snapshot', $snapshot_json);
					$stmt_reg->bindParam(':event_id', $event_id);
					
					$stmt_reg->execute();
					// if(isset($_POST["test"])){
					// $query_reg = "SELECT SLEEP(49)";
					// $stmt_reg = $conn->prepare($query_reg);
					// $stmt_reg->execute();
				// }
					$conn->commit();
					//if($stmt_reg->execute()){
							$rank = 0;
							$count = 0;
							foreach($snapshot['list'] as $key => $val){
								$count += 1;
								if($key == $lb_id){
									$rank = $count;
									break;
								}
							}
							return array(
								"code" => SUCCESSFUL,
								// "leaderboard" => $snapshot,
								// "coin" => $score,
								"rank" => $rank
							);
					// }
					// else{
						// return array("code" => DATA_BASE_ERROR,"rank" => -1);
					// }
				}else{
					$conn->commit();
					return array(
								"code" => SUCCESSFUL,
								// "leaderboard" => $snapshot,
								// "coin" => $score,
								"rank" => -1
							);
				}
			}else{
				$snapshot["list"] = array();
				$snapshot["list"][$lb_id] = $score;
				$snapshot["max"] = $score;
				$snapshot["min"] = $score;
				
				$snapshot_json = json_encode($snapshot);
				$query_reg = "UPDATE event SET snapshot = :snapshot WHERE event_id = :event_id ";
				
				$stmt_reg = $conn->prepare($query_reg);
				$stmt_reg->bindParam(':snapshot', $snapshot_json);
				$stmt_reg->bindParam(':event_id', $event_id);
				
				$stmt_reg->execute();
				$conn->commit();
				return array(
								"code" => SUCCESSFUL,
								// "leaderboard" => $snapshot,
								// "coin" => $score,
								"rank" => 1
							);
			}
		//}
		
	}catch ( PDOException $e ) { 
			// Failed to insert
			$conn->rollback();
			
			echo json_encode(array("code" => DATA_BASE_ERROR,"code" => $stmt_reg->errorCode(),"info" => $stmt_reg->errorInfo()));
			return array("code" => DATA_BASE_ERROR);
			//throw $e;
			//$DatabaseLudi->closeConnection();
			//exit();
		}
}

function getGameLeaderBoard($lb_id = -1,$event_id = -1){
	global $DatabaseLudi,$conn,$leaderboard_max_player;
	if($conn == null){
		$DatabaseLudi = new DatabaseLudi();
		$conn = $DatabaseLudi->getConnection();
	}
	$query = "SELECT event_id,tour_id,snapshot,UNIX_TIMESTAMP(start_time)*1000 as start_time,UNIX_TIMESTAMP(end_time)*1000 as end_time FROM event WHERE event_id = ?";
	if($event_id == -1){
		$query = "SELECT event.event_id,event.tour_id,event.snapshot,UNIX_TIMESTAMP(event.start_time)*1000 as start_time,UNIX_TIMESTAMP(event.end_time)*1000 as end_time FROM event,leaderboard WHERE leaderboard.id = ? AND event.event_id = leaderboard.event_id";
	}

	$stmt = $conn->prepare( $query );
	if($event_id != -1){
		$stmt->bindParam(1, $event_id);
	}else{
		$stmt->bindParam(1, $lb_id);
	}
	$stmt->execute();
	$num = $stmt->rowCount();

	if($num > 0){
		$ld = $stmt->fetch(PDO::FETCH_ASSOC);
		$snapshot = json_decode($ld['snapshot'],true);
		$event_id = $ld['event_id'];
		$leaderBoard = array();
		$usersIDStr = implode(',',array_keys($snapshot['list']));
		$query = "SELECT lb.id,lb.score,u.user_name,u.third_party_id,u.avatar FROM leaderboard as lb INNER JOIN users as u on lb.user_id = u.user_id WHERE lb.id IN (" . $usersIDStr .") ORDER BY FIELD (lb.id," . $usersIDStr .")";

		$stmt = $conn->prepare( $query );
		$stmt->execute();
		$num = $stmt->rowCount();
		$leaderBoard['code'] = SUCCESSFUL;
		$leaderBoard['rank'] = -1;
		$leaderBoard['screen_shoot'] = LUDI_SCREENSHOT_URL . $event_id . "/" . $lb_id . ".jpg";
		$leaderBoard['start_time'] = $ld['start_time'];
		$leaderBoard['end_time'] = $ld['end_time'];
		$leaderBoard['list'] = array();
		if($num > 0){
			
			$rank = 1;
			while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
				
				$leaderBoard['list'][] = array('lb_id' => $row['id'],'tp_id' => $row['third_party_id'], 'user_name' => $row['user_name'], 'avatar' => $row['avatar'], 'score' => (int)$row['score']);
				if($lb_id == $row['id']){
					$leaderBoard['rank'] = $rank;
				}
				$rank += 1;
			}
			
			//$rows = $stmt->fetchAll();
		
			//foreach($rows as $row){
				//$leaderBoard['list'][] = array('user_id' => $row['user_id'], 'user_name' => $row['user_name'], 'score' => (int)$row['two_week_coin'], 'avatar' => json_decode($row['avatar'],true)['curr']);
				//$snapshot['list'][$row['user_id']] = array('user_name' => $row['user_name'], 'score' => (int)$row['two_week_coin'], 'avatar' => json_decode($row['avatar'],true)['curr']);
			//}
		}
		return $leaderBoard;
	}else{ // create leaderboard snapshot
		return array("code" => EVENT_NOT_START);
	}
}

function getGameLeaderBoardByTour($user_id = -1,$tour_id = -1){
	global $DatabaseLudi,$conn,$leaderboard_max_player;
	if($conn == null){
		$DatabaseLudi = new DatabaseLudi();
		$conn = $DatabaseLudi->getConnection();
	}
	$leaderBoard = array();
	$leaderBoard['code'] = SUCCESSFUL;
	$leaderBoard['next_time'] = 0;
	$leaderBoard['list'] = array();
	$leaderBoard['pre-list'] = array();
	
	$query = "SELECT UNIX_TIMESTAMP(start_time)*1000 as start_time FROM event WHERE tour_id = :tour_id and UNIX_TIMESTAMP(start_time)*1000 > :currTime order by event_id ASC LIMIT 1";
	$currTime = getdate()[0] * 1000;
	$stmt = $conn->prepare( $query );
	$stmt->bindParam(':tour_id', $tour_id);
	$stmt->bindParam(':currTime', $currTime);
	$stmt->execute();
	$num = $stmt->rowCount();
	if($num > 0){
		$nextEvent = $stmt->fetch(PDO::FETCH_ASSOC);
		$leaderBoard['next_time'] = $nextEvent['start_time'];
	}
	
	
	$query = "SELECT event_id,tour_id,snapshot,UNIX_TIMESTAMP(start_time)*1000 as start_time,UNIX_TIMESTAMP(end_time)*1000 as end_time FROM event WHERE tour_id = :tour_id and UNIX_TIMESTAMP(start_time)*1000 <= :currTime order by event_id desc LIMIT 2";
	$currTime = getdate()[0] * 1000;
	$stmt = $conn->prepare( $query );
	$stmt->bindParam(':tour_id', $tour_id);
	$stmt->bindParam(':currTime', $currTime);
	$stmt->execute();
	$num = $stmt->rowCount();
	$index = 0;
	
	if($num > 0){
		while($ld = $stmt->fetch(PDO::FETCH_ASSOC)){
			//$ld = $stmt->fetch(PDO::FETCH_ASSOC);
			$snapshot = json_decode($ld['snapshot'],true);
			
			if(!isset($snapshot['list'])){
				continue;
			}
			$usersIDStr = implode(',',$index == 0 ? array_keys($snapshot['list']) : array_slice(array_keys($snapshot['list']),0,3));
			
			$query = "SELECT lb.id,lb.user_id,lb.score,u.user_name,u.third_party_id,u.avatar FROM leaderboard as lb INNER JOIN users as u on lb.user_id = u.user_id WHERE lb.id IN (" . $usersIDStr .") ORDER BY FIELD (lb.id," . $usersIDStr .")";

			$stmt1 = $conn->prepare( $query );
			$stmt1->execute();
			$num1 = $stmt1->rowCount();
			if($index == 0){
				$leaderBoard['start_time'] = $ld['start_time'];
				$leaderBoard['end_time'] = $ld['end_time'];
			}
			
			if($num1 > 0){
				
				while($row = $stmt1->fetch(PDO::FETCH_ASSOC)){
					if($index == 0){
						$leaderBoard['list'][] = array('lb_id' => $row['id'],'tp_id' => $row['third_party_id'], 'user_name' => $row['user_name'], 'avatar' => $row['avatar'], 'score' => (int)$row['score']);
						// if($user_id == $row['user_id']){
							// $leaderBoard['rank'] = $rank;
						// }
						// $rank += 1;
					}else{
						$leaderBoard['pre-list'][] = array('lb_id' => $row['id'],'tp_id' => $row['third_party_id'], 'user_name' => $row['user_name'], 'avatar' => $row['avatar'], 'score' => (int)$row['score']);
					}
				}
				
				
			}
			$index ++;
		}
		return $leaderBoard;
	}else{ // create leaderboard snapshot
		return array("code" => EVENT_NOT_START);
	}
}


function encodeUID($uid){
	$md5Uid = md5($uid);
	$md5Token = md5(CLAVE_TOKEN_JUEGOS);
	$final_md5 = md5(substr($md5Uid,8,3).substr($md5Token,15,3).substr($md5Uid,10,3));
	$token = substr($final_md5,15,8).substr($final_md5,5,8);
	return $token;
}

function genKey($user_id,$lb_id,$partner_id,$tp_id,$game_id,$tour_id){
	$uid = $user_id.$lb_id.$partner_id.$tp_id.$game_id.$tour_id;
	return encodeUID($uid);
}

function verifyScore($val = 0,$key){
	if(strlen($key) < 16)
    	return "";
    $key = substr($key,3,8) . substr($key,7,8);
	$k = "";
	for($i = 5; $i <= 12; $i++){
		$k .= substr($key,$val%$i,1);
	}
	return $k;
}

?>
