<?php
require_once 'env.php';

$playLudigamesDomain = strpos($_SERVER['HTTP_REFERER'], "://play.ludigames.com"); 
$cdnLudigamesDomain = strpos($_SERVER['HTTP_REFERER'], "://cdn.ludigames.com");

// debug localhost
$apiDebugEnable = false;
if(!PRODUCTION_ENV){
	if (strpos($_SERVER['HTTP_REFERER'],"localhost") !== false /*&& ((isset($_POST["tp_id"]) && in_array($_POST["tp_id"],$white_list_test)) || (isset($_POST["user_id"]) && in_array($_POST["user_id"],$white_list_test)))*/) {
		$apiDebugEnable = !false; // must be remove in production
	}
}
/*if(
	$playLudigamesDomain === false 
	&& $cdnLudigamesDomain === false 
	&& $apiDebugEnable === false
	)
{
	http_response_code(404);
	exit();
}*/

if(isset($_GET["action"])){
	switch($_GET["action"]){
		case "register_user": //tp_id,uiduser_encrypt,game_id,partner_id,tour_id
			require 'database/api/register_user.php';
			break;
		case "submit_score": //tp_id,uiduser_encrypt,game_id,partner_id,tour_id,user_id,lb_id,key,score
			require 'database/api/submit_score.php';
			break;
		case "get_leaderboard": //lb_id
			require 'database/api/get_leaderboard.php';
			break;
		case "get_game_list":
			require 'database/api/get_game_list.php';
			break;
		case "get_leaderboard_tour": //tour_id
			require 'database/api/get_leaderboard_tour.php';
			break;
		case "token":
			// $_SESSION['POST'] = $_POST;
			// header("Location: https://oauth-login.cloud.huawei.com/oauth2/v3/token",true,307);
			// exit;
			// function microtime_float()
			// {
					// list($usec, $sec) = explode(" ", microtime());
					// return ((float)$usec + (float)$sec) * 1000;
			// }
			// $start = microtime_float();
			$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL, 'https://oauth-login.cloud.huawei.com/oauth2/v3/token');    
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);  
			curl_setopt($ch, CURLOPT_POST, 1);            
			curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($_POST));
			curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/x-www-form-urlencoded'));
			$resp = curl_exec($ch);
			curl_close($ch);
			// echo microtime_float() - $start;
			echo $resp;
			exit();
		case "revoke":
			// $_SESSION['POST'] = $_POST;
			// header("Location: https://oauth-login.cloud.huawei.com/oauth2/v3/revoke",true,307);
			// exit;
			
			$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL, 'https://oauth-login.cloud.huawei.com/oauth2/v3/revoke');    
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);  
			curl_setopt($ch, CURLOPT_POST, 1);            
			curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($_POST));
			curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/x-www-form-urlencoded'));
			$resp = curl_exec($ch);
			curl_close($ch);
			echo $resp;
			exit();
		default:
			http_response_code(404);
			//echo json_encode(array("error" => "invalid action"));
	}
}else{
	http_response_code(404);
}
?>