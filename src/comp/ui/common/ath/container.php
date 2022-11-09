<?php
if (!defined('ALLOW_INCLUDE') || ALLOW_INCLUDE !== true) {
  exit('No direct script access allowed');
}
?>

<div class="ath-container">
  <div class="athsb-img"></div>
  <div class="athsb-scroll-container df-jcc-aic">
    <div class="athsb-text <?= ($site->language == 2) ? '' : 'text-scroll-left-template'; ?>"><?php echo $site->text('STR_ADD_TO_HOME_PART02'); ?></div>
  </div>
  <div class="athsb-btn df-jcc-aic" onclick="ath_showThePrompt();">
    <div class="ellipsis-nh">
      <?php echo $site->text('STR_ADD_TO_HOME_BUTTON'); ?>
    </div>
  </div>
</div>