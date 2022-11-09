<?php
    $img = urldecode($_POST['screenshot']);
		$filteredData = explode(',', $img);
		$data = base64_decode(str_replace(' ','+',$filteredData[1]));
		
		$path = "/opt/data/moosefs/h5_play_ludigames/leaderboard/screenshot/0";
		echo $path;
		if (!file_exists($path)) {
			mkdir($path);
		}
    

    file_put_contents($path . "/".$_POST['name'].'.jpg', $data);
    http_response_code(200);

		echo json_encode(array("code" => 1));
		exit();
?>