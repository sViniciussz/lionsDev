import PromptSync from "prompt-sync";
const teclado = PromptSync();

let pergunta = teclado("Gosta de Cafe [s/n]: ").toLocaleLowerCase;
let gostacafe;
if(pergunta === "s"){
  gostacafe = true;
} else if (pergunta === "n"){
  gostacafe = false;
} else{
  console.log("resposta invalida");
}

if(gostacafe){
  console.log("a pessoa tal gosta de cafe!");
} else {
  console.log("a pessoa tal NAO gosta de cafe!");
}

