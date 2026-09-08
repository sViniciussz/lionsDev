import PromptSync from "prompt-sync";
const teclado = PromptSync();

let listTarefas = [];

for (let i = 0; i <= 2; i++) {
  let tarefa = teclado("Informe a tarefa: ");
  listTarefas.push(tarefa)
}

console.log("\n");

console.table(listTarefas)

for (let j = 0; j < 3; j++) {
  console.log(`Tarefa ${j + 1}: ${listTarefas[j]}`);
}