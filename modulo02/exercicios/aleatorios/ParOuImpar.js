import PromptSync from "prompt-sync";
const teclado = PromptSync();

let num = teclado("Informe um numero: ");

if (num % 2 === 0) {
  console.log("par");
} else {
  console.log("impar");
}
