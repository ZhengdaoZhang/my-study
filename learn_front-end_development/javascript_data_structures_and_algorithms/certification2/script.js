const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
convertBtn.addEventListener("click", convertBtnClick);
function convertBtnClick() {
  const val = parseInt(numberInput.value);
  if (!val || val === NaN) {
    return output.textContent = "Please enter a valid number";
  }
  if (val < 1) {
    return output.textContent = "Please enter a number greater than or equal to 1"
  }
  if (val >= 4000) {
    return output.textContent = "Please enter a number less than or equal to 3999";
  }
  output.textContent = convertFn(val);
}

function convertFn(val) {
  let str = "";
  if (val >= 1000) {
    for (let i = 0; i < Math.floor(val / 1000); i++) {
      str += "M"
    }
    return str + convertFn(val % 1000);
  } else if (val >= 500) {
    if (val >= 900) {
      str += "CM";
      return str + convertFn(val % 900);
    } else {
      str += "D";
      for (let i = 0; i < Math.floor((val - 500) / 100); i++) {
        str += "C";
      }
      return str + convertFn(val % 100);
    }
  } else if (val >= 100) {
    if (val >= 400) {
      str += "CD";
      return str + convertFn(val % 400);
    } else {
      for (let i = 0; i < Math.floor(val / 100); i++) {
        str += "C";
      }
      return str + convertFn(val % 100);
    }
  } else if (val >= 50) {
    if (val >= 90) {
      str += "XC";
      return str + convertFn(val % 90);
    } else {
      str += "L"
      for (let i = 0; i < Math.floor((val - 50) / 10); i++) {
        str += "X";
      }
      return str + convertFn(val % 10);
    }
  } else if (val >= 10) {
    if (val >= 40) {
      str += "XL";
      return str + convertFn(val % 40);
    } else {
      for (let i = 0; i < Math.floor(val / 10); i++) {
        str += "X";
      }
      return str + convertFn(val % 10);
    }
  } else if (val >= 5) {
    if (val >= 9) {
      str += "IX";
    } else {
      str += "V"
      for (let i = 0; i < Math.floor(val - 5); i++) {
        str += "I";
      }
    }
  } else {
    if (val >= 4) {
      str += "IV";
    } else {
      for (let i = 0; i < val; i++) {
        str += "I";
      }
    }
  }
  return str;
}
