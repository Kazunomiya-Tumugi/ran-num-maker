const generateBtn = document.getElementById("generate-btn");
const toggleBtn = document.getElementById("generate-trans");
const result = document.getElementById("result");
const excludeSameInput = document.getElementById("exclude-same");

const toggleButton = document.getElementById('toggle-button');
toggleButton.addEventListener('click', () => {
  if (toggleButton.innerText === '設定') {
    toggleButton.innerText = '閉じる';
  } else {
    toggleButton.innerText = '設定';
  }
});


generateBtn.addEventListener("click", function () {
  const minInput = document.getElementById("min");
  const maxInput = document.getElementById("max");
  const numInput = document.getElementById("num");
  const result = document.getElementById("result");

  const min = parseInt(minInput.value);
  const max = parseInt(maxInput.value);
  const num = parseInt(numInput.value);
  const excludeSame = excludeSameInput.checked;

  if (isNaN(min) || isNaN(max) || isNaN(num)) {
    result.textContent = "最小値、最大値、表示数を入力してください";
    return;
  }

  if (min >= max) {
    result.textContent = "最小値は最大値よりも小さい必要があります";
    return;
  }

  if (num <= 0) {
    result.textContent = "表示数は1以上で指定してください";
    return;
  }

  if (excludeSame && num > max - min + 1) {
    result.textContent = "最大値が表示回数と同じになるか上回っている必要があります。";
    return;
  }

  let randomNums = [];

  while (randomNums.length < num) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    if (excludeSame && randomNums.includes(randomNum)) {
      continue; 
    }
    randomNums.push(randomNum);
  }

  result.textContent = randomNums.join(", ");
});

toggleBtn.addEventListener("click", function () {
  if (result.classList.contains("hide")) {
    result.classList.remove("hide");
    toggleBtn.textContent = "乱数を隠す";
    result.classList.remove("invisible");
    toggleBtn.classList.add("hide-btn");
    toggleBtn.classList.remove("show-btn");
  } else {
    result.classList.add("hide");
    result.classList.add("invisible"); 
    toggleBtn.textContent = "乱数を表示する";
    toggleBtn.classList.add("show-btn");
    toggleBtn.classList.remove("hide-btn");
  }
});
