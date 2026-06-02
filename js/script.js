const display = document.getElementById("display");
function appendValue(input) {
  display.value += input;
}
function clearDisplay() {
  display.value = "";
}
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
function delChar() {
  display.value = display.value.slice(0, -1);
}
