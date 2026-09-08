import PromptSync from "prompt-sync";
const teclado = PromptSync();

let listaAlunos = ["Pedro", "Maria"];

let novoAluno = teclado("Informe novo aluno: ");
listaAlunos.push(novoAluno);

if(listaAlunos.length === 3){
  console.log("turma formada\nAlunos: ", listaAlunos);
  
}