//Escreva um algoritmo que recebe um número inteiro e diz se
//o número recebido é pair ou ímpar

const readLine = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readLine.question("Insert a number: ", (num) => {
  if (num % 2 == 0) {
    console.log(`${num} is a pair number`);
  } else {
    console.log(`${num} is an even number`);
  }
  readLine.close();
});
