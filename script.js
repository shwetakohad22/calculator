function clearDisplay() {
  document.getElementById("result").value = "";
}
function deleteLastEl() {
  let deleteEl = document.getElementById("result");
  document.getElementById("result").value = deleteEl.value.slice(0, -1);
}
function appendChar(char) {
  document.getElementById("result").value += char;
}

function calculate() {
  let expression = document.getElementById("result").value;
  let result = eval(expression);
  document.getElementById("result").value = result;
}
