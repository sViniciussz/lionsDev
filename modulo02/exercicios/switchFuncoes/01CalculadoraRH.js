import PromptSync from "prompt-sync";
const teclado = PromptSync();

function bonusRh(nivelCargo, salarioAtual) {
  let bonus;

  switch (nivelCargo) {
    case "Estagiario":
      bonus = salarioAtual * 0.10;
      break;
    case "Junior":
      bonus = salarioAtual * 0.15;
      break;
    case "Pleno":
      bonus = salarioAtual * 0.20;
      break;
    default:
      bonus = 0;
  }

  return bonus;
}


let cargo = teclado("Informe seu cargo [Estagiario, Junior, Pleno]: ");
let salario = teclado("Informe seu salario: R$");

console.log(`\nSeu bonus foi de: R$${bonusRh(cargo,salario)}`);
