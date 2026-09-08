import PromptSync from "prompt-sync";
const teclado = PromptSync();

let listaCompras = ["Arroz", "Feijao", "Macarrao", "Carne"];

for (let i = 0; i <= listaCompras.length - 1; i++) {
  console.log(`Item ${i + 1}: ${listaCompras[i]}\n`);
}

