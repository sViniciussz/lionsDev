import PromptSync from "prompt-sync";
const teclado = PromptSync();

let qntHorasEstimadas = Number(teclado("Informe a quantidade de horas estimadas para um novo sistema WEB: "));
let clienteOng = teclado("O cliente e uma ONG? [sim/nao]: ").toLowerCase();

let valorHora = 45.00

let valorProjeto = qntHorasEstimadas * valorHora;

if (clienteOng == "sim" && valorProjeto > 5000) {
  valorProjeto = valorProjeto - (valorProjeto * 0.10);
  console.log(`O valor final do projeto eh: ${valorProjeto}\n`);
} else {
  console.log(`O valor final do projeto eh: ${valorProjeto}\n`);

}