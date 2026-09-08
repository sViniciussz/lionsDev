import PromptSync from "prompt-sync";
const teclado = PromptSync();

let nome = teclado("Informe seu nome: ");
let idade = teclado("Informe sua idade: ");

if (idade >= 18) {
  console.log("maior de idade");

} else if (idade < 18 && idade > 0) {
  console.log("menor de idade");
  let faltamQuantos = 18 - idade;
  console.log(`faltam ${faltamQuantos} anos para ser maior de idade`);


} else {
  console.log("Idade invalida!!!");

}