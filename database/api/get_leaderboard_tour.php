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


if(!isset($_POST["tour_id"])){
	http_response_code(200);
	echo json_encode(
		array(
			"code" => MISSING_PARAM
		));
	exit();
}
/*if(isset($_POST["user_id"]) && !filter_var($_POST["user_id"], FILTER_VALIDATE_INT)){
	http_response_code(200);
	echo json_encode(
		array(
			"code" => PARAM_TYPE_INCORRECT
		));
	exit();
}*/
if(isset($_POST["tour_id"]) && !filter_var($_POST["tour_id"], FILTER_VALIDATE_INT)){
	http_response_code(200);
	echo json_encode(
		array(
			"code" => PARAM_TYPE_INCORRECT
		));
	exit();
}
//$user_id = (int)$_POST["user_id"];
$tour_id = (int)$_POST["tour_id"];


http_response_code(200);
 
echo json_encode(getGameLeaderBoardByTour("",$tour_id));
	

?>