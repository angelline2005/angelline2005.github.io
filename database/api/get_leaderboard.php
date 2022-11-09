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


if(!isset($_POST["lb_id"]) && !isset($_POST["event_id"])){
	http_response_code(200);
	echo json_encode(
		array(
			"code" => MISSING_PARAM
		));
	exit();
}
if(isset($_POST["lb_id"]) && !filter_var($_POST["lb_id"], FILTER_VALIDATE_INT)){
	http_response_code(200);
	echo json_encode(
		array(
			"code" => PARAM_TYPE_INCORRECT
		));
	exit();
}
if(isset($_POST["event_id"]) && !filter_var($_POST["event_id"], FILTER_VALIDATE_INT)){
	http_response_code(200);
	echo json_encode(
		array(
			"code" => PARAM_TYPE_INCORRECT
		));
	exit();
}
$lb_id = isset($_POST["lb_id"]) ? (int)$_POST["lb_id"] : -1;
$event_id = isset($_POST["event_id"]) ? (int)$_POST["event_id"] : -1;


http_response_code(200);
 
echo json_encode(getGameLeaderBoard($lb_id,$event_id));
	

?>