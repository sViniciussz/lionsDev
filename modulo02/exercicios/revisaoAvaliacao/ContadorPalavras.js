import PromptSync from "prompt-sync";
const teclado = PromptSync();

let frase = teclado("Informe uma frase: ");

let fraseArray = frase.split(" ");
let qntPalavras = fraseArray.length;

console.log("A frase '"+ frase + "' tem " + qntPalavras + " palavras");
