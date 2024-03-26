const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

const phoneNumberRegex = /^(1|1\s)?(\([0-9]{3}\)|[0-9]{3})(-|\s)?([0-9]{3})(-|\s)?([0-9]{4})$/

const checkBtnClick = () => {
  const inputVal = userInput.value;
  if (!inputVal) {
    alert("Please provide a phone number")
    return
  }
  resultsDiv.textContent = phoneNumberRegex.test(inputVal) ? `Valid US number: ${inputVal}` : `Invalid US number: ${inputVal}`;
}

checkBtn.addEventListener("click", checkBtnClick)

clearBtn.addEventListener("click", () => {
  resultsDiv.textContent = "";
})

