//Escrever um algoritmo que lê a hora de início de um jogo e a hora do final do jogo (considerando
//apenas horas inteiras) e calcula a duração do jogo em horas, sabendo-se que o tempo máximo
//de duração do jogo é de 24 horas e que o jogo pode iniciar em um dia e terminar no dia
//seguinte.

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
  const beggingTime = await input("Enter the beginning hour of the game: ");
  const endingTime = await input("Enter the ending hour of the game: ");
  let duration = 0;

  if (endingTime > beggingTime) {
    duration = endingTime - beggingTime;
  } else {
    duration = 24 + (endingTime - beggingTime);
  }

  console.log(`The game will take ${duration} hours`);

  readLine.close();
};

main();
