function calculate() {
  var num1 = parseFloat(document.getElementById('num1').value);
  var num2 = parseFloat(document.getElementById('num2').value);
  var num3 = parseFloat(document.getElementById('num3').value);

  var result = num1 + num2 + num3;

  document.getElementById('result').textContent = 'Result: ' + result;
}