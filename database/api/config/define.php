<?php
if(PRODUCTION_ENV){
	define('LUDI_DATABASE_NAME' , "leaderboard");
	define('LUDI_SCREENSHOT_PATH' , "/opt/data/moosefs/h5_play_ludigames/leaderboard/screenshot/");
	define('LUDI_SCREENSHOT_URL' , "https://play.ludigames.com/h5_play_ludigames/leaderboard/screenshot/");
}else{
	define('LUDI_DATABASE_NAME' , "leaderboard_test");
	define('LUDI_SCREENSHOT_PATH' , "/opt/data/moosefs/h5_play_ludigames/leaderboard/screenshot_test/");
	define('LUDI_SCREENSHOT_URL' , "https://play.ludigames.com/h5_play_ludigames/leaderboard/screenshot_test/");
}
define('LUDI_PLAY_COUNT_MEMCACHE_KEY' , "ludi_play_count_memcache_key" . LUDI_DATABASE_NAME);

define('CLAVE_TOKEN_JUEGOS','_ludi*&ffkh57$');

define('LUDI_SECRET_KEY' , LUDI_DATABASE_NAME === "dia_games" ? "2{as.sBshark.uckks#c" : "2{as.sBshark.uckks#c.test");
define('LUDI_SECRET_KEY_REFRESH' , LUDI_DATABASE_NAME === "dia_games" ? "2{as.sBuck.sharkks#c" : "2{as.sBuck.sharkks#c.test");
define('LUDI_SECRET_KEY_COMMON' , LUDI_DATABASE_NAME === "dia_games" ? "2{as.sBdong.anks#c" : "2{as.sBdong.anks#c.test");
define('LUDI_TOKEN_EXPIRE' , 3600);// second
define('LUDI_REFRESH_TOKEN_EXPIRE' , 604800);//3600*24*7;
// define('LUDI_TOKEN_EXPIRE' , 60);// second
// define('LUDI_REFRESH_TOKEN_EXPIRE' , 600);//3600*24*7;
define('LUDI_COMMON_TOKEN_EXPIRE' , 31536000);//3600*24*365;
define('LUDI_API_PATH' , 'https://' . $_SERVER['HTTP_HOST'] . '/' . "huawei/sbt/trunk/");

define('LUDI_COOKIE_DOMAIN' , "ludigames.com");
define('LUDI_COOKIE_SECURE' , true);

/*if(strpos($_SERVER['HTTP_HOST'],"localhost") !== false){
	define('LUDI_COOKIE_DOMAIN' , "localhost");
	define('LUDI_COOKIE_SECURE' , false);
}*/


define('LUDI_GOOGLE_CLIENT_ID' , '706643553325-js4o5dtpu1c2flg08ilroqcpi5juq97k.apps.googleusercontent.com');

define('LUDI_REGISTER_BY_EMAIL', 0);
define('LUDI_REGISTER_BY_GOOGLE', 1);

define('LUDI_AUTH_NONE', 0);// not login
define('LUDI_AUTH_TOKEN_NOT_VERIFY', 1);// have token but not verify
define('LUDI_AUTH_EMAIL_NOT_VERIFY', 2);// not verify email
define('LUDI_AUTH_FULL_ACCESS', 3);// full access

////response code
$response_code_def = 1;
define('SUCCESSFUL', $response_code_def++);//1
define('EMAIL_REQUIRED', $response_code_def++);//2:Email is required
define('EMAIL_INVALID_FORMAT', $response_code_def++);//3:Invalid email format
define('DATA_BASE_ERROR', $response_code_def++);//4:make query error
define('USER_EXITS', $response_code_def++);//5
define('USER_NOT_FOUND', $response_code_def++);//6
define('PASS_INCORRECT', $response_code_def++);//7
define('TOKEN_REQUIRED', $response_code_def++);//8:token is required
define('TOKEN_INVALID', $response_code_def++);//9:token invalid
define('TOKEN_FAKE', $response_code_def++);//10:token
define('USER_ID_REQUIRED', $response_code_def++);//11
define('THIRD_PARTY_REGISTRATION', $response_code_def++);//12
define('LOGIN_REQUIRED', $response_code_def++);//13
define('GAME_ID_REQUIRED', $response_code_def++);//14
define('PARAM_TYPE_INCORRECT', $response_code_def++);//15
define('USER_NOT_RECOGNIZED', $response_code_def++);//16
define('MISSING_PARAM', $response_code_def++);//17
define('ITEM_NOT_AVAILABLE', $response_code_def++);//18
define('ITEM_ALREADY_PURCHASED', $response_code_def++);//19
define('NOT_ENOUGH_COIN', $response_code_def++);//20
define('PASS_REQUIRED', $response_code_def++);//21
define('PASS_INVALID_FORMAT', $response_code_def++);//22
define('YEAR_OF_BIRTH_REQUIRED', $response_code_def++);//23
define('AGE_RESTRICTION', $response_code_def++);//24
define('BAD_WORD', $response_code_def++);//25
define('ITEM_ALREADY_CLAIMED', $response_code_def++);//26
define('ITEM_INPROGRESS', $response_code_def++);//27

// leaderboard
$response_code_def_lb = 1001;
define('TOUR_NOT_EXITS', $response_code_def_lb++);//1001
define('TOUR_NOT_ACTIVE', $response_code_def_lb++);//1002
define('TOUR_ENDED', $response_code_def_lb++);//1003
define('KEY_NOT_MATCH', $response_code_def_lb++);//1004
define('EVENT_NOT_START', $response_code_def_lb++);//1005
define('EVENT_ENDED_NO_NEW_EVENT', $response_code_def_lb++);//1006
define('EVENT_ENDED_HAVE_NEW_EVENT', $response_code_def_lb++);//1007
define('NOT_HIGH_SCORE', $response_code_def_lb++);//1008
define('SUBMIT_SCREENSHOT_ERR', $response_code_def_lb++);//1009
define('IMAGE_SIZE_OVER_LIMIT', $response_code_def_lb++);//1010
define('SCORE_NOT_VALID', $response_code_def_lb++);//1011

$leaderboard_max_player = 100;
define('MIN_SCORE_TO_VERIFY', 0);
$avatar_list = array(1,2,3,4,5,6,7,8);

////gdpr
define('GDPR_MAX_AGE', 100);
define('GDPR_MIN_AGE', 3);
define('GDPR_EU_COUNTRIES', array(
	14,//Austria
	21, //Belgium
	33, //Bulgaria
	53, //Croatia
	55, //Cyprus
	56, //Czech Republic
	57, //Denmark
	67, //Estonia
	72, //Finland
	252, //Aland Islands *
	73, //France
	258, //Clipperton Island *
	75, //French Guyana *
	76, //French Polynesia *
	77, //French Southern and Antarctic Territories *
	87, //Guadeloupe *
	134, //Martinique *
	137, //Mayotte *
	152, //New Caledonia *
	174, //Reunion *
	255, //St. Barthelemy *
	256, //St. Martin *
	198, //St. Pierre&Miquelo *
	233, //Wallis & Futuna *
	81, //Germany
	84, //Greece
	97, //Hungary
	98, //Iceland 
	103, //Ireland 
	105, //Italy 
	117, //Latvia 
	122, //Liechtenstein 
	123, //Lithuania 
	124, //Luxembourg 
	132, //Malta 
	150, //Netherlands 
	12, //Aruba * 
	254, //Caribbean Netherlands * 
	247, //Curacao * 
	257, //Sint Maarten * 
	160, //Norway 
	201, //Svalbard and Jan Mayen * 
	170, //Poland
	171, //Portugal
	175, //Romania
	189, //Slovakia
	190, //Slovenia
	195, //Spain
	259, //Balearic Islands *
	251, //Canary Islands *
	260, //Ceuta and Melilla *
	203, //Sweden
	222, //United Kingdom
	//xx, //Akrotiri and Dhekelia * 55
	7, //Anguila *
	24, //Bermuda *
	8, //British Antarctic Territory *
	31, //British Indian Ocean Territory *
	231, //British Virgin Islands *
	40, //Cayman Islands *
	//xx, //Diego Garcia * 31
	69, //Falkland Island *
	83, //Gibraltar *
	253, //Guernsey *
	248, //Isle of Man *
	249, //Jersey *
	143, //Montserrat *
	169, //Pitcairn Island *
	197, //Saint Helena *
	194, //South Georgia and the South Sandwich Islands *
	217, //Turks and Caicos Islands *
	/*13, //Australia
	45, //Christmas Island *
	46, //Cocos (Keeling) Islands *
	158, //Norfolk Island *
	153, //New Zealand
	50, //Cook Islands *
	157, //Niue *
	211 //Tokelau **/
	));



?>