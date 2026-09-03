import PromptSync from "prompt-sync";
const teclado = PromptSync();

let nome = (teclado("informe seu nome: "));
let idade = Number(teclado("informe sua idade: "));

if (idade <=0){
  console.log(`${nome} tem idade invalida`);
  
} else if(idade < 18){
  console.log(`${nome} eh menor de idade`);
  
} else{
  console.log(`${nome} eh maior de idade`);
  
}
