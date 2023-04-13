//Dada uma determinada data de aniversário (dia, mês e ano separadamente), elabore um algoritmo
//que solicite também a data atual (dia, mês e ano separadamente) e logo após calcule (e mostre) a
//idade de uma pessoa em anos, em meses e em dias.

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
  const birthDay = await input("Insert the day you were born: ");
  const birthMonth = await input("Insert the month you were born: ");
  const birthYear = await input("Insert the year you were born: ");

  const presentDay = await input("Insert present day: ");
  const presentMonth = await input("Insert present month: ");
  const presentYear = await input("Insert present year: ");

  const ageYears = presentYear - birthYear;
  const ageMonths = presentMonth - birthMonth;
  const ageDays = presentDay - birthDay;

  console.log(
    `You are ${ageYears} years, ${ageMonths} months and ${ageDays} days old!`
  );

  readLine.close();
};

main();
