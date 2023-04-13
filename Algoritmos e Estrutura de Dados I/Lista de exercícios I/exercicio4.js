// Elabore um algoritmo que receba a idade de um nadador e logo após classifique-o em uma das
// seguintes categorias. O algoritmo deverá mostrar no final a categoria do nadados.

// infantil A = 5 - 7 anos
// infantil B = 8-10 anos
// juvenil A = 11-13 anos
// juvenil B = 14-17 anos
// adulto = maiores de 18 anos

const readLine = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readLine.question("Insert the swimmer's age: ", (age) => {
  if (age < 5) {
    console.log(
      `The swimmer is ${age} years old, he/she is too young to be classified. Try again when he/she reaches 5 years old`
    );
  } else if (age <= 7) {
    console.log(
      `The swimmer is ${age} years old, he is in the "Infantil A" category`
    );
  } else if (age <= 10) {
    console.log(
      `The swimmer is ${age} years old, he is in the "Infantil B" category`
    );
  } else if (age <= 13) {
    console.log(
      `The swimmer is ${age} years old, he is in the "Juvenil A" category`
    );
  } else if (age <= 17) {
    console.log(
      `The swimmer is ${age} years old, he is in the "Juvenil B" category`
    );
  } else if (age > 18) {
    console.log(
      `The swimmer is ${age} years old, he is in the "Adulto" category`
    );
  }

  readLine.close();
});
