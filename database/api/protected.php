<?php
include_once 'database/api/config/database_ludi.php';
require_once "database/vendor/autoload.php";
use \Firebase\JWT\JWT;

// header("Access-Control-Allow-Origin: *");
// header("Content-Type: application/json; charset=UTF-8");
// header("Access-Control-Allow-Methods: POST");
// header("Access-Control-Max-Age: 3600");
// header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// $isLocalhost = false;
// if(strpos($_SERVER['HTTP_HOST'],"localhost") !== false){
	// $isLocalhost = true;
// }

$user_info = array(
	'auth_level' => LUDI_AUTH_NONE, //0 not login,1 token not verify,2 account not verify,3 full access
    //'email' => '',
    'user_name' => '',
    'user_id' => '',
		'tp_id' => ''
);

// must rem in production
global $white_list_test;
if(!PRODUCTION_ENV){
	if (strpos($_SERVER['HTTP_REFERER'],"localhost") !== false /*&& ((isset($_POST["tp_id"]) && in_array($_POST["tp_id"],$white_list_test)) || (isset($_POST["user_id"]) && in_array($_POST["user_id"],$white_list_test)))*/) {	
			$user_info = array(
			'auth_level' => LUDI_AUTH_FULL_ACCESS, //0 not login,1 token not verify,2 account not verify,3 full access
				//'email' => '',
				'user_name' => '',
				'user_id' => $_POST["user_id"],
				'tp_id' => $_POST["tp_id"],
		);
		return;
	}
}
$jwt = null;
$DatabaseLudi = null;
$conn = null;

if(isset($_COOKIE['token'])){
	$jwt = $_COOKIE['token'];
}

if($jwt) {
	
    try {
 
        $decoded = (array)JWT::decode($jwt, LUDI_SECRET_KEY, array('HS256'));
		//echo json_encode($decoded);
		$user_info['auth_level'] =  $decoded['data']->auth_level;
		//$user_info['email'] = $decoded['data']->email;
		//$user_info['user_name'] = $decoded['data']->user_name;
		$user_info['user_id'] = $decoded['data']->user_id;
		if(isset($decoded['data']->tp_id)){
			$user_info['tp_id'] = $decoded['data']->tp_id;
		}
		//echo $auth_level;
 
    }catch (Exception $e){
		$user_info['auth_level'] = LUDI_AUTH_TOKEN_NOT_VERIFY;
		// echo json_encode(array(
			// "error" => $e->getMessage()
		// ));
	}
	
	$DatabaseLudi = new DatabaseLudi();
	$conn = $DatabaseLudi->getConnection();
}
if($user_info['auth_level'] <= LUDI_AUTH_TOKEN_NOT_VERIFY){
	if(isset($_COOKIE['refresh_token'])){
		$jwt = $_COOKIE['refresh_token'];
	}

	if($jwt) {
		
		try {
	 
			$decoded = (array)JWT::decode($jwt, LUDI_SECRET_KEY_REFRESH, array('HS256'));
			//echo json_encode($decoded);
			//$auth_level =  $decoded['data']->auth_level;
			//$user_info['email'] = $decoded['data']->email;
			//$user_info['user_name'] = $decoded['data']->user_name;
			$user_info['user_id'] = $decoded['data']->user_id;
			if(isset($decoded['data']->tp_id)){
				$user_info['tp_id'] = $decoded['data']->tp_id;
			}
			
			if($conn == null){
				$DatabaseLudi = new DatabaseLudi();
				$conn = $DatabaseLudi->getConnection();
			}
			$table_name = 'token';
			
			$query = "SELECT refresh_token FROM " . $table_name . " WHERE user_id = ? LIMIT 0,1";

			$stmt = $conn->prepare( $query );
			$stmt->bindParam(1, $user_info['user_id']);
			$stmt->execute();
			$num = $stmt->rowCount();
			//echo json_encode($user_info);
			if($num > 0){
				$row = $stmt->fetch(PDO::FETCH_ASSOC);
				//echo $jwt . "=" . $row['refresh_token'];
				if($jwt === $row['refresh_token']){
					$user_info['auth_level'] =  $decoded['data']->auth_level;
					
					$issuer_claim = ISSUER_CLAIM;
					//$audience_claim = "THE_AUDIENCE";
					$issuedat_claim = time(); // issued at
					$notbefore_claim = $issuedat_claim + 10; //not before
					$token = array();
					if(empty($user_info['tp_id'])){
						$token = array(
							"iss" => $issuer_claim,
							//"aud" => $audience_claim,
							"iat" => $issuedat_claim,
							"nbf" => $notbefore_claim,
							"exp" => LUDI_TOKEN_EXPIRE,
							"data" => array(
								"user_id" => $user_info['user_id'],
								"auth_level" => $user_info['auth_level'],
								//"user_name" => $user_info['user_name'],
								//"email" => $user_info['email']
							));
					}else{
						$token = array(
						"iss" => $issuer_claim,
						//"aud" => $audience_claim,
						"iat" => $issuedat_claim,
						"nbf" => $notbefore_claim,
						"exp" => LUDI_TOKEN_EXPIRE,
						"data" => array(
							"user_id" => $user_info['user_id'],
							"auth_level" => $user_info['auth_level'],
							//"user_name" => $user_info['user_name'],
							//"email" => $user_info['email'],
							"tp_id" => $user_info['tp_id']
						));
					}
					
			 
					$jwt = JWT::encode($token, LUDI_SECRET_KEY);
					setcookie('token', $jwt, time() + LUDI_TOKEN_EXPIRE, "/",LUDI_COOKIE_DOMAIN,LUDI_COOKIE_SECURE,true);
					setcookie('isLogged', true, time() + LUDI_TOKEN_EXPIRE, "/",LUDI_COOKIE_DOMAIN,LUDI_COOKIE_SECURE,!true);
				}
			}
		}catch (Exception $e){
			$user_info['auth_level'] = LUDI_AUTH_TOKEN_NOT_VERIFY;
			// echo json_encode(array(
				// "error" => $e->getMessage()
			// ));
		}
	}
}

//$DatabaseLudi->closeConnection();
?>
