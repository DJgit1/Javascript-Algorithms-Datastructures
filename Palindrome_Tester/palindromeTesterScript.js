const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

const palindromeTest = input => {
  const actualInput = input;

  if(input === "") {
    alert("Please input a value");
    return;
  }

  result.replaceChildren();

  const lowerCaseInput = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();

  let resultText = `<strong><em>${actualInput}</em></strong>
  ${
    lowerCaseInput === [...lowerCaseInput].reverse().join('') ? 'is' : 'is not'
    } a palindrome`;

  const pResult = document.createElement('p');
  pResult.className = "result-text";
  pResult.innerHTML = resultText;
  result.appendChild(pResult);
};

checkBtn.addEventListener("click", () => {
  palindromeTest(textInput.value);
  textInput.value = "";
});

checkBtn.addEventListener("keydown", e => {
  if(e.key === "Enter") {
    palindromeTest(textInput.value);
    textInput.value = "";
  }
});