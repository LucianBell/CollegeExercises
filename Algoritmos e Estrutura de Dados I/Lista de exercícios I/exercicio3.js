//Um dado comerciante maluco cobra 10% de acréscimo para cada prestação em atraso e depois dá um
// desconto de 10% sobre esse valor. Faça um algoritmo que solicite o valor da prestação em atraso e
// apresente o valor final a pagar, assim como o prejuízo do comerciante na operação.

const readLine = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readLine.question("Insert the value: ", (num) => {
  const value10Perc = Math.round(num * 0.9);

  const value10Min = Math.round(value10Perc * 0.9);

  const deficit = value10Perc - value10Min;

  console.log(
    `The total you owe me is ${value10Min} coins (the seller lost ${deficit} coins)`
  );

  readLine.close();
});
