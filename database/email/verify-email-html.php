<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Test mail</title>
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&display=swap");
  </style>
</head>

<body>
  <!-- verify-email -->
  <div class="verify-email">
    <div class="ew-logo" style="
      width: 23.33vw;
      margin: auto;
      ">
      <img src="%{LUDI_API_PATH}/images/email-welcome/ludi-logo.png" style="
          width: 100%;
      " />
    </div>
   <div class="ew-title" style="
      font-family: Quicksand;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: #1890FF;">%{str_welcome}</div>
    <div class="ew-description" style=" 
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: rgba(0, 0, 0, 0.87);">%{str_verify_email1}</div>
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
      <a href="%{LUDI_API_PATH}?action=verify_email&token=%{token}" style="
          color: #FFFFFF;
      ">%{str_verify_email2}</a>
    </div>
    <div class="ew-splash" style="
        width: 88.89vw;
        margin: auto;
    ">
      <img src="%{LUDI_API_PATH}/images/email-welcome/ludi-banner.png" style="
          width: 100%;
      " />
    </div>
    <div class="ew-warning" style="
      font-family: Roboto;
      font-style: italic;
      font-weight: normal;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      color: #6E6E6E;">%{str_verify_email3}</div>
    <div class="ew-footer" style="
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 8px;
      line-height: 12px;
      text-align: center;
      color: #000000;">%{str_unsubscribe}</div>
  </div>
  <!-- verify-email end -->
</body>

</html>