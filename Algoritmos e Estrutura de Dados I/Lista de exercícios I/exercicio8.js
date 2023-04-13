//Faça um algoritmo que leia o tempo de duração de um evento em uma fábrica expressa em
//segundos e mostre-o expresso em horas, minutos e segundos.

const readLine = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readLine.question("Insert, in seconds, the event time span: ", (timeSpan) => {
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  for (i = 0; timeSpan >= 3600; i++) {
    timeSpan -= 3600;
    hours = i + 1;
  }
  for (j = 0; timeSpan >= 60 && timeSpan <= 3600; j++) {
    timeSpan -= 60;
    minutes = j + 1;
  }

  seconds = timeSpan;

  console.log(
    `Your event will last ${hours} hours, ${minutes} minutes and ${seconds} seconds`
  );

  readLine.close();
});
