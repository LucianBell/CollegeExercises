// Elabore um algoritmo capaz de inverter um número inteiro (de três dígitos) informado. Ou seja, após
// a leitura do número o algoritmo deverá realizar processos para apresentar primeiro a unidade e,
// depois, a dezena e a centena.

const readLine = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readLine.question("Insert a three digit number: ", (num) => {
  const base = Math.floor(num / 10);

  const uni = num % 10;
  const cent = Math.floor(base / 10);
  const dec = base % 10;

  console.log(`Your inverted number is ${uni}${dec}${cent}`);
  readLine.close();
});
