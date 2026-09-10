import PromptSync from "prompt-sync";
const teclado = PromptSync();

function bonusRh(nivelCargo, salarioAtual){
  let bonus;
  if(nivelCargo === "Estagiario"){
    bonus = salarioAtual * 0.10;
    
  } else if(nivelCargo === "Junior"){
    bonus = salarioAtual * 0.15;
    
  } else if(nivelCargo === "Pleno"){
    bonus = salarioAtual * 0.20;
    
  }

  return bonus;
}


let cargo = teclado("Informe seu cargo [Estagiario, Junior, Pleno]: ");
let salario = teclado("Informe seu salario: R$");

console.log(`\nSeu bonus foi de: R$${bonusRh(cargo,salario)}`);
