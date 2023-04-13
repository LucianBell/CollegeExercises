// Escreva um algoritmo que leia 3 números inteiros e mostre no final os valores lidos em ordem
// crescente.

const readLine = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function input(prompt) {
  return new Promise((callbackFn, errorFn) => {
    readLine.question(
      prompt,
      (uinput) => {
        callbackFn(uinput);
      },
      () => {
        errorFn();
      }
    );
  });
}

const main = async () => {
  let firstNum = await input("Enter the first number: ");
  let secondNum = await input("Enter the second number: ");
  let thirdNum = await input("Enter the third number: ");
  let aux = 0;

  if (secondNum < firstNum) {
    aux = firstNum;
    firstNum = secondNum;
    secondNum = aux;
  }

  if (thirdNum < firstNum) {
    aux = firstNum;
    firstNum = thirdNum;
    thirdNum = aux;
  }

  if (thirdNum < secondNum) {
    aux = secondNum;
    secondNum = thirdNum;
    thirdNum = aux;
  }

  if (thirdNum < secondNum) {
    aux = secondNum;
    secondNum = thirdNum;
    thirdNum = aux;
  }

  console.log(firstNum + secondNum + thirdNum);

  readLine.close();
};

main();
