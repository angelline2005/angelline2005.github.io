<?php
function microtime_float()
{
    list($usec, $sec) = explode(" ", microtime());
    return ((float)$usec + (float)$sec) * 1000;
}
$start = microtime_float();
require_once 'includes/header.inc.php';
$cal1 = microtime_float();
//echo "cal1=" . ($cal1 - $start);
$gamesList = array();

$customList = [];
$hideGames = [];
$gameTotal = 1000;
$category = $settings['html5_categories']['all'];
$projFolder = '';
$isCustomProj = false;
if (isset($_GET['num'])){
	$gameTotal = $_GET['num'];
}

if (isset($_GET['cat'])){
	$category = $_GET['cat'];
}
if (isset($_GET['hide'])){
	$hideGames = explode(',',$_GET['hide']);
}

//$category = $settings['html5_categories']['all'];
$userIP = getIPAddress();
$countryId = getCountryFromIP($userIP);

$options = array(
	'offset' => 0,
	'length' => 1000,
	'countryId' => $countryId,
);

if (isset($_GET['p'])){
	switch($_GET['p']){
		case 'PI74':
			if ($category == "recommended"){
				$category = $settings['html5_categories']['featured'];
			}
			break;
		default:
			$customList = [];
			break;
	}
}else{
	if(isset($settings['html5_categories'][$category])){
		$category = $settings['html5_categories'][$category];
	}
}

$playcount = memcacheLoad("ludi_play_count_memcache_keyludi_games");
$play_count_json = array();
if($playcount != false){
	//echo "memcache: load";
	$play_count_json = json_decode($playcount,true);
	
	//print_r($play_count_json['data'][4640]['countStr']);
	//print_r($play_count_json['data']);
}
function getPlayCount($pid){
	global $play_count_json;
	if(!empty($play_count_json['data'][$pid]['countStr'])){
		return $play_count_json['data'][$pid]['countStr'];
	}
	return "10M";
}
function getGameList($cat,$name){
	global $gamesList,$options,$title_en,$hideGames;
	$allGames = processGameList($cat, $options);
	//print_r($title_en);
	$gamesList[$name] = array();
	foreach ($allGames['products'] as $key => $productInfo) {
		//print_r($productInfo);
		if(in_array($productInfo['pID'],$hideGames)){
			continue;
		}
		if($cat == "html5_ads_as_all" || $cat == "html5_ads_all"){
			//echo $title_en[$productInfo['pID']];
			$gamesList[$name][] = ['name' => isset($title_en[$productInfo['pID']]) ? $title_en[$productInfo['pID']] : $productInfo['title'],
																'link' => explode("?",str_replace("https://cdn.ludigames.com/","",$productInfo['url']))[0],
																'image' => $productInfo['icon512'],
																'pID' => $productInfo['pID'],
																'categories' => $productInfo['categories'],
																'description' => $productInfo['desc'],
																'playCount' => getPlayCount($productInfo['pID'])
																];
			
		}else{
			//echo $productInfo['pID'];
			$gamesList[$name][] = $productInfo['pID'];
		}
	}
	//print_r($name);
	//print_r($gamesList[$name]);
	//print_r($gamesList);
}

$title_en = json_decode(file_get_contents('https://play.ludigames.com/as-d/trunk/products_en.php?lan=en'),true);
//print_r($title_en);
getGameList("html5_ads_all","products");
getGameList("html5_ads_new_games","New-Games");
getGameList("html5_ads_featured","Featured");
getGameList("html5_ads_special","Most-Popular");

$cal2 = microtime_float();
//echo "cal1=" . ($cal2 - $cal1);
//echo "cal_all=" . ($cal2 - $start);
echo json_encode($gamesList);
