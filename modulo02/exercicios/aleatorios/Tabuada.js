import PromptSync from "prompt-sync";
const teclado = PromptSync();

let tabuada = teclado("Tabuada Desejada: ");

for (let i = 1; i <= 100; i++) {
  let result = tabuada * i
  console.log(`${tabuada}x${i} = ${result}`);
}