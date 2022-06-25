const numb1 = parseFloat(prompt("Enter first number:"));
const operator = prompt("Enter operator(+, -, /, *)");
const numb2 = parseFloat(prompt("Enter second number:"));

let result;
if (operator === "+") {
  result = numb1 + numb2;
} else if (operator === "-") {
  result = numb1 - numb2;
} else if (operator === "*") {
  result = numb1 * numb2;
} else if (operator === "/") {
  result = numb1 / numb2;
}
alert(numb1 + operator + numb2 + "=" + result);
