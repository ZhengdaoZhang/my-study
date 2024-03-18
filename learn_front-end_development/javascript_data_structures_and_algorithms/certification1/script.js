const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultEl = document.getElementById("result");


checkBtn.addEventListener("click", checkBtnClick)


function checkBtnClick() {
  const val = textInput.value;
  if (!val) {
    return alert("Please input a value");
  }
  let resText = replaceText(val);
  resultEl.textContent=`${val} is ${checkPalindrome(resText)?"":"not"} a palindrome`;
}

function replaceText(str) {
  return str.replaceAll(/[^a-z^A-Z0-9]/g, "").toLowerCase();
}

function checkPalindrome(str){
  for (let i = 0; i <= Math.floor(str.length / 2) - 1; i++) {
    if (str[i] != str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}