<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Test mail</title>
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&display=swap");

    /* root font size */
    html {
      font-family: Roboto, sans-serif;
      font-style: normal;
      font-weight: normal;
    }
    .ew-footer span {
      text-decoration-line: underline;
      color: #1890FF;
    }
  </style>
</head>

<body>
  <!-- email-reset-pass -->
  <div class="email-reset-pass">
    <div class="ew-logo" style="
      width: 84px;
      height: 24px;
      margin: auto;
      background-image: url(%{LUDI_API_PATH}/images/email-welcome/ludi-logo.png); background-repeat: no-repeat; background-size: contain;"></div>
    <div class="ew-title" style="
      font-family: Quicksand;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: #1890FF;">%{str_reset_pass}</div>
    <div class="ew-description" style=" 
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: rgba(0, 0, 0, 0.87);">%{str_check_mail}</div>
    <div class="ew-verify-btn" style="
        background: #1890FF;
        box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        font-family: Quicksand;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 32px;
        text-align: center;
        color: #FFFFFF;
        margin: 20px auto 44px;
        width: max-content;
        padding: 2px;
    ">
      <a href="%{LUDI_API_PATH}?action=reset_pass&token=%{token}" style="
          color: #FFFFFF;
      ">%{btn_reset_pass}</a>
    </div>
    <div class="ew-warning" style="
      font-family: Roboto;
      font-style: italic;
      font-weight: normal;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      color: #6E6E6E;">%{str_check_mail1}</div>
    <div class="ew-footer" style="
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 8px;
      line-height: 12px;
      text-align: center;
      color: #000000;">%{str_unsubscribe}</div>
  </div>
  <!-- email-reset-pass end -->
</body>

</html>