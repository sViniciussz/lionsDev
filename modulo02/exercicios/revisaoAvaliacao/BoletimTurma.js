import PromptSync from "prompt-sync";
const teclado = PromptSync();

let notas = [2.6776958, 2.4654656, 3.7, 7, 8];

let i = 0;
let soma = 0
while (i < notas.length) {
  soma += notas[i];

  i++;
}

let media = soma / notas.length;

console.log("nota " + soma.toFixed(2));

if (media >= 7) {
  console.log("aprovado");

} else if (media > 5 && media < 7) {
  console.log("recuperacao");

} else {
  console.log("reprovado");

}
