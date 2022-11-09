<?php

/**
 * Terms and conditions page for subscription
 */
require_once 'includes/header.inc.php';

// set the HTML Tag <title>
$htmlTagTitle = $site->text('cp_handle');

//////////////////////////////////////////////////////////////////////////////
// RENDERING THE PAGE
//////////////////////////////////////////////////////////////////////////////
// show header and menu elements
showHeader($htmlTagTitle);

// prepare the view options
$viewOptions = array(
    'cpTexts' => displayCPTexts(),
);

//show the homepage games
view('pages/cookie_policy', $viewOptions);

///////////////////////////////////////////////////////////////////////////////
// SECTION: Footer
///////////////////////////////////////////////////////////////////////////////

footer();