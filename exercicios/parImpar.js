import PromptSync from "prompt-sync";
const teclado = PromptSync();

let num = Number(teclado("Informe um numero: "));
if (num === 0){
  console.log("\nnumero 0");
} else if(num % 2 ===0){
  console.log("\nnumero par");
} else{
  console.log("\nnumero impar");
}
