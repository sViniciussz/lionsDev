import PromptSync from "prompt-sync";
const teclado = PromptSync();

let genero = teclado("Informe o genero do Filme: ").toLowerCase();
console.log("\n");

console.log(genero);

switch (genero) {
  case "acao":
    console.log("Sala 1");
    break;

  case "comedia":
    console.log("Sala 2");
    break;

  case "terror":
    console.log("Sala 3");
    break;

  case "animacao":
    console.log("Sala 4");
    break;

  default:
    console.log("Genero nao encontrado!");
    break;
}
