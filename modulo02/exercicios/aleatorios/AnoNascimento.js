import PromptSync from "prompt-sync";
const teclado = PromptSync();

let nome = teclado("Informe seu nome: ");
let idade = Number(teclado("Informe sua idade: "));

const anoAtual = 2026;
let anoNasc = anoAtual-idade;

console.log(`${nome} nasceu no ano ${anoNasc}`);