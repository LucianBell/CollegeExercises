// Uma empresa concederá um aumento de salário aos seus funcionários, variável de acordo com o
// cargo, conforme a tabela abaixo. Faça um algoritmo que leia o salário e o cargo de um funcionário e
// calcule o novo salário. Se o cargo do funcionário não estiver na tabela, ele deverá, então, receber
// 40% de aumento. Mostre o salário antigo, o novo salário e a diferença.
//
// Código Cargo Percentual
// 101 Gerente 10%
// 102 Engenheiro 20%
// 103 Técnico 30%

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
  const oldSalary = parseInt(await input("Insert your monthly salary: "));
  const positionCode = await input("Insert your position code: ");

  let newSalary = 0;

  if (positionCode == 101) {
    newSalary = oldSalary + oldSalary * 0.1;
    console.log(
      `You are a manager! Your current salary is R$${oldSalary}. Now it will be ${newSalary}! A R$`,
      newSalary - oldSalary,
      "raise!"
    );
  } else if (positionCode == 102) {
    newSalary = oldSalary + oldSalary * 0.2;
    console.log(
      `You are an engineer! Your current salary is R$${oldSalary}. Now it will be ${newSalary}! A R$`,
      newSalary - oldSalary,
      "raise!"
    );
  } else if (positionCode == 103) {
    newSalary = oldSalary + oldSalary * 0.3;
    console.log(
      `You are a technician! Your current salary is R$${oldSalary}. Now it will be ${newSalary}! A R$`,
      newSalary - oldSalary,
      "raise!"
    );
  } else {
    newSalary = oldSalary + oldSalary * 0.3;
    console.log(
      `You position is categorized as a great importance role! Your current salary is R$${oldSalary}. Now it will be ${newSalary}! A R$`,
      newSalary - oldSalary,
      "raise!"
    );
  }

  readLine.close();
};

main();
