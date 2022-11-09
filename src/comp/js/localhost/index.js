
const name = "js-localhost"
let is = () => {
  let result = false
  if (window.location.hostname == 'localhost') {
    result = true
  }
  return result;
}

export let localhost = {
  is: is(),
  apiUrl: "https://play.ludigames.com/huawei/sbt/trunk/action.php"
}

