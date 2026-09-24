import PromptSync from "prompt-sync";
const teclado = PromptSync();

let num = teclado("Informe um numero: ");
let novoNum = num
while (novoNum >= 2) {
  novoNum -= 2
}

//console.log(num);
//console.log(novoNum);

if (novoNum === 1) {
  console.log("numero " + num + " impar");

} else {
  console.log("numero " + num + " par");

}
