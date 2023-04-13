// Faça um algoritmo que leia um no inteiro e mostre uma mensagem indicando se este número é par
// ou ímpar, e se é positivo ou negativo.

const readLine = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readLine.question("Insert the number you want to analyze: ", (num) => {
  if (num % 2 == 0 && num > 0) {
    console.log(
      "Your analysis is ready!! The number is a positive pair number"
    );
  } else if (num % 2 == 0 && num < 0) {
    console.log(
      "Your analysis is ready!! The number is a negative pair number"
    );
  } else if (num % 2 != 0 && num > 0) {
    console.log(
      "Your analysis is ready!! The number is a positive even number"
    );
  } else if (num % 2 != 0 && num < 0) {
    console.log(
      "Your analysis is ready!! The number is a negative even number"
    );
  } else {
    console.log("Your analysis is ready!! Your number is zero");
  }

  readLine.close();
});
