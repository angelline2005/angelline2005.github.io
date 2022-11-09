<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: text/html; charset=utf-8');
// the Core config files with absolute path!

require_once 'includes/header.inc.php';
require_once '/var/www/shops/payment/includes/config.html5.php';
require_once DIR_WS_FUNCTIONS . 'common.php';
require_once DIR_WS_FUNCTIONS . 'database.php';
require_once 'includes/settings.inc.php';
//require_once 'includes/functions.inc.php';
// Instanciate a global db slave object
$GLOBALS['db_slave'] = new Database(false);
$GLOBALS['db_slave']->connect(DB_SLAVE_SERVER, DB_SLAVE_SERVER_USERNAME, DB_SLAVE_SERVER_PASSWORD);

// Open The Connection to the DB
if (!tep_db_connect()) {
    // Cannot open connection to the DB, probably the DB is down
    // display user friendly message about the situation
    // this function terminates the script execution
    displayNoDb();
}


$tempHeaders = apache_request_headers();

$availableLangs = array(2, 1, 3, 7, 15, 11, 76, 75, 68,
    4, 66, 16, 73, 5, 74, 69, 63, 9, 14, 8 ,
    70, 79, 64);

$euCountries = array (
    14, // AT - Austria
    21, // BE - Belgium
    33, // BG - Bulgaria
    53, // HR - Croatia
    55, // CY - Cyprus
    56, // CZ - Czech Republic
    57, // DK - Denmark
    67, // EE - Estonia
    70, // FO - Faroe Islands
    72, // FI - Finland
    73, // FR - France
    76, // PF - French Polynesia
    77, // TF - French Southern Territories
    81, // DE - Germany
    84, // GR - Greece
    87, // GP - Guadeloupe
    97, // HU - Hungary
    103, // IE - Ireland
    105, // IT - Italy
    117, // LV - Latvia
    123, // LT - Lithuania
    124, // LU - Luxembourg
    132, // MT - Malta
    134, // MQ - Martinique
    150, // NL - Netherlands
    152, // NC - New Caledonia
    170, // PL - Poland
    171, // PT - Portugal
    174, // RE - Reunion
    175, // RO - Romania
    189, // SK - Slovakia
    190, // SI - Slovenia
    195, // ES - Spain
    198, // PM - St. Pierre and Miquelon
    203, // SE - Sweden
    222, // GB - United Kingdom
    233, // WF - Wallis and Futuna Islands
    251, // IC - Canary Islands
    254, // BQ - Bonaire, Sint Eustatius and Saba
    255, // BL - Saint Barthelemy
    256, // MF - Saint Martin
    257, // SX - Sint Maarten
);


if(isset($_GET['vnz'])){
    $euCountries[] = 230; // add vietnam to help with testing in saigon
    mail('iulianionut.gavrila@gameloft.com', basename($_SERVER['SCRIPT_FILENAME']).' '.__LINE__, print_r([$euCountries, $_GET, $_SERVER],1));
}

$countryId = getCountryFromIP(getIPAddress());

if (in_array($countryId, $euCountries)) {

    $lang = getLanguage();
    if (isset($site) && is_object($site)) {
        $lang = $site->language;
    }
    // Get the first language
    $sigle = "";
    if (isset($_SERVER['HTTP_ACCEPT_LANGUAGE'])) {
        $sigle = 'en';

        $first_language_detected = preg_match(
            '/^[a-z]+/', 
            $_SERVER['HTTP_ACCEPT_LANGUAGE'], 
            $first_language_match
        );
        if ($first_language_detected) {
            $sigle = $first_language_match[0];
        }
        //Creating exception for BR
        $exception_languages = array('br' => 'pt-BR');
        foreach ($exception_languages as $currentLang => $exception_language) {
            $exception_language_match = preg_match(
                '/^' . $exception_language . '/i', 
                $_SERVER['HTTP_ACCEPT_LANGUAGE'], 
                $exception_language_match
            );
            if (!empty($exception_language_match)) {
                $sigle = $currentLang;
                break;
            }
        }
    }
    //Stop calling getLanguageISOCodes() as it introduces unnecessary heavy load on DB
    //$allLanguageArray = getLanguageISOCodes($availableLangs);
    $allLanguageArray = array(
        15 => 'bg',
        14 => 'cs',
        68 => 'da',
        3 => 'de',
        11 => 'el',
        2 => 'en',
        4 => 'es',
        66 => 'et',
        16 => 'fi',
        1 => 'fr',
        75 => 'hr',
        73 => 'hu',
        5 => 'it',
        69 => 'lt',
        74 => 'lv',
        7 => 'nl',
        63 => 'pl',
        9 => 'pt',
        8 => 'ro',
        70 => 'sk',
        79 => 'sl',
        64 => 'sv',
        76 => 'tr',
    );
    
    if (!empty($sigle)) {
        $key = array_search($sigle, $allLanguageArray);
        if ($key !== false) {
            $lang = $key;
        }
    }

    if (in_array($lang, $availableLangs)) {
        $notificationText = $settings['cookie_texts']["cookie_text_" . $lang];
        $notificationUrl = getUrl($settings['pages']['cookie_policy']);
        $return['text'] = str_replace('{link}', $notificationUrl, $notificationText);
        $return['ok'] = $settings['cookie_texts']["cookie_ok_" . $lang];
    } else {
        $notificationText = $settings['cookie_texts']["cookie_text_2"];
        $notificationUrl = getUrl($settings['pages']['cookie_policy']);
        $return['text'] = str_replace('{link}', $notificationUrl, $notificationText);
        $return['ok'] = $settings['cookie_texts']["cookie_ok_2"];
    }

    echo json_encode($return, JSON_UNESCAPED_UNICODE);
}
