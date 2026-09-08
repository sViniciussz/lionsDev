import PromptSync from "prompt-sync";
const teclado = PromptSync();

let estoqueTamanhos = [10, 15, 8];

let tamanhoCamisa = teclado("Quantas p foram vendidas? ");

estoqueTamanhos[0] -= tamanhoCamisa;

if(estoqueTamanhos[0]<5){
  console.log("estoque luvas tamanho p critico");
  
} else{
  console.log("Estoque atualizado, quantidade restante tam. P: ", estoqueTamanhos[0]);
  
}