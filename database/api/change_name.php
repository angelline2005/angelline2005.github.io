<?php
include_once 'database/api/config/database_ludi.php';
require_once "database/vendor/autoload.php";
use \Firebase\JWT\JWT;

// header("Access-Control-Allow-Origin: * ");
// header("Content-Type: application/json; charset=UTF-8");
// header("Access-Control-Allow-Methods: POST");
// header("Access-Control-Max-Age: 3600");
// header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once 'protected.php';
if($user_info['auth_level'] === LUDI_AUTH_NONE || $user_info['auth_level'] === LUDI_AUTH_TOKEN_NOT_VERIFY){
	http_response_code(200);
	echo json_encode(
		array(
			"code" => LOGIN_REQUIRED
		));
	exit();
}

if (!isset($_POST["user_id"])) {
	http_response_code(200);
	echo json_encode(
		array(
			"code" => USER_ID_REQUIRED
		));
	exit();
}
if ($_POST["user_id"] != $user_info['user_id']) {
	http_response_code(200);
	echo json_encode(
		array(
			"code" => USER_NOT_RECOGNIZED
		));
	exit();
}
if (!isset($_POST["user_name"])) {
	http_response_code(200);
	echo json_encode(
		array(
			"code" => MISSING_PARAM
		));
	exit();
}

$user_id = '';
$user_name = '';


$block_words = json_decode(file_get_contents("database/api/block_words.json"),true);
//echo $_POST["user_name"];
if(in_array(strtolower($_POST["user_name"]),$block_words)){
	http_response_code(200);
	echo json_encode(
		array(
			"code" => BAD_WORD
		));
	exit();
}

global $DatabaseLudi;// = new DatabaseLudi();
global $conn;// = $DatabaseLudi->getConnection();
if($conn == null){
	$DatabaseLudi = new DatabaseLudi();
	$conn = $DatabaseLudi->getConnection();
}

// $data = json_decode(file_get_contents("php://input"));
// $email = $data->email;
// $password = $data->password;
// $table_name = 'users';

$user_id = $user_info['user_id'];
$user_name = DatabaseLudi::prepare_input($_POST["user_name"]);
$table_name = 'inventory';

$query_reg = "UPDATE " . $table_name . " SET user_name = :user_name WHERE user_id = :user_id ";

$stmt_reg = $conn->prepare($query_reg);
$stmt_reg->bindParam(':user_id', $user_id);
$stmt_reg->bindParam(':user_name', $user_name);


if($stmt_reg->execute()){
	$issuer_claim = ISSUER_CLAIM;
	//$audience_claim = "THE_AUDIENCE";
	$issuedat_claim = time(); // issued at
	$notbefore_claim = $issuedat_claim;// + 10; //not before
	$token = array(
		"iss" => $issuer_claim,
		//"aud" => $audience_claim,
		"iat" => $issuedat_claim,
		"nbf" => $notbefore_claim,
		"exp" => $issuedat_claim + LUDI_TOKEN_EXPIRE,
		"data" => array(
			"user_id" => $user_id,
			"auth_level" => $user_info['auth_level'],
			//"user_name" => $user_name,
			"tp_id" => $user_info['tp_id']
	));

	

	$jwt = JWT::encode($token, LUDI_SECRET_KEY);
	$token["exp"] = $issuedat_claim + LUDI_REFRESH_TOKEN_EXPIRE;
	$jwt_refresh = JWT::encode($token, LUDI_SECRET_KEY_REFRESH);
	
	$query_reg = "UPDATE token SET refresh_token = :jwt_refresh WHERE user_id = :user_id";

	$stmt_reg = $conn->prepare($query_reg);
	$stmt_reg->bindParam(':jwt_refresh', $jwt_refresh);
	$stmt_reg->bindParam(':user_id',$user_id);

	$stmt_reg->execute();
	
	setcookie('token', $jwt, time() + LUDI_TOKEN_EXPIRE, "/",LUDI_COOKIE_DOMAIN,LUDI_COOKIE_SECURE,true);
	setcookie('isLogged', true, time() + LUDI_TOKEN_EXPIRE, "/",LUDI_COOKIE_DOMAIN,LUDI_COOKIE_SECURE,!true);
	setcookie('refresh_token', $jwt_refresh, time() + LUDI_REFRESH_TOKEN_EXPIRE, "/",LUDI_COOKIE_DOMAIN,LUDI_COOKIE_SECURE,true);
	setcookie('user_id', $user_id, time() + LUDI_REFRESH_TOKEN_EXPIRE, "/",LUDI_COOKIE_DOMAIN,LUDI_COOKIE_SECURE,!true);
		
	http_response_code(200);
	echo json_encode(
		array(
			"code" => SUCCESSFUL,
			//"token" => $jwt,
			//"refresh_token" => $jwt_refresh,
			//"email" => $user_info['email'],
			"user_id" => $user_id,
			"user_name" => $user_name,
			"expiresIn" => LUDI_TOKEN_EXPIRE
		));
}
else{
	http_response_code(200);
 
	echo json_encode(array("code" => DATA_BASE_ERROR));
	// echo json_encode(array("error" => "Unable to change pass.","code" => $stmt_reg->errorCode(),"info" => $stmt_reg->errorInfo()));
}

$DatabaseLudi->closeConnection();
?>