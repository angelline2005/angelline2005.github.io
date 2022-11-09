<?php
include_once 'database/api/config/database_ludi.php';
//include_once 'database/api/database_function.php';
require_once "database/vendor/autoload.php";
use \Firebase\JWT\JWT;

function encodeUID($uid){
	$md5Uid = md5($uid);
	$md5Token = md5(CLAVE_TOKEN_JUEGOS);
	$final_md5 = md5(substr($md5Uid,5,3).substr($md5Token,5,3).substr($md5Uid,10,3));
	$token = substr($final_md5,12,8).substr($final_md5,2,8);
	return $token;
}

if (!isset($_GET["uiduser"]) || !isset($_GET["uiduser_encrypt"])) {
	http_response_code(404);
	// echo json_encode(
		// array(
			// "code" => USER_ID_REQUIRED
		// ));
	exit();
}
if(encodeUID($_GET["uiduser"]) != $_GET["uiduser_encrypt"]){
	http_response_code(404);
	// echo json_encode(
		// array(
			// "code" => USER_ID_REQUIRED
		// ));
	exit();
}

$third_party_id = $_GET["uiduser"];

			global $DatabaseLudi,$conn,$user_info;
			if($conn == null){
				$DatabaseLudi = new DatabaseLudi();
				$conn = $DatabaseLudi->getConnection();
			}
			
			$table_name = 'users';

			//$query = "SELECT u.user_id,u.third_party_id,i.user_name FROM users as u inner join inventory as i on u.user_id = i.user_id WHERE u.third_party_id = ? LIMIT 0,1";
			$query = "Delete from " . $table_name . " WHERE third_party_id = ?";
			
			$stmt = $conn->prepare( $query );
			$stmt->bindParam(1, $third_party_id);
			$stmt->execute();
			$num = $stmt->rowCount();

			if($num <= 0){
				http_response_code(404);
				// echo json_encode(
					// array(
						// "code" => USER_NOT_FOUND
					// ));
			}else{
				http_response_code(200);
				echo json_encode(
					array(
						"code" => SUCCESSFUL
					));
			}
?>