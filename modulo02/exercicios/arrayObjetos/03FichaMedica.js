import PromptSync from "prompt-sync";
const teclado = PromptSync();

let nomeCachorro = teclado("Informe nome cachorro: ");
let racaCachorro = teclado("Informe raca cachorro: ");
let idadeCachorro = teclado("Idade cachorro: ");

const paciente ={
  nome: nomeCachorro,
  raca: racaCachorro,
  idade: idadeCachorro

};

if(paciente.idade >= 8){
  console.log("O paciente ", paciente.nome, " ja eh senior e precisa exame rotina\n");
  
} else{
  console.log("Paciente na faixa de idade regular\n");
  
}

console.log(paciente);
