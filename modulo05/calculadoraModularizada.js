import { somar, subtrair, multiplicar, dividir, porcentagem, menu } from "./funcoesCalculadora.js";
import PromptSync from "prompt-sync";

const teclado = PromptSync();
let opcao;
let resultado = 0;
let primeiraConta = true;

do {
  menu();
  opcao = parseInt(teclado(":"));

  if (isNaN(opcao)) {
    console.log("Erro: Informe uma opcao valida.");
    continue;
  }

  let num1;
  let num2;
  if (opcao >= 1 && opcao <= 5) {
    if (primeiraConta) {
      num1 = parseFloat(teclado("Informe o primeiro numero:"));
      primeiraConta = false;
    } else {
      num1 = resultado;
      console.log("Primeiro numero (acumulado): " + num1);

    }
    num2 = parseFloat(teclado("Informe o segundo numero:"));

    if (isNaN(num1) || isNaN(num2)) {
      console.log("Erro: Informe numeros validos.");
      continue;
    }
  }

  switch (opcao) {
    case 1:
      console.log("\n===ADICAO===");
      resultado = somar(num1, num2);

      break;

    case 2:
      console.log("\n===SUBTRACAO===");
      resultado = subtrair(num1, num2);

      break;

    case 3:
      console.log("\n===MULTIPLICACAO===");
      resultado = multiplicar(num1, num2);

      break;

    case 4:
      console.log("\n===DIVISAO===");
      if (num2 === 0) {
        console.log("Impossivel dividir por 0.");

      } else {
        resultado = dividir(num1, num2);

      }
      break;

    case 5:
      console.log("\n===PORCENTAGEM===");
      resultado = porcentagem(num1, num2);
      break;

    case 6:
      console.log("resultado = " + resultado);
      break;

    case 0:
      console.log("Saindo...");
      break;

    default:
      console.log("Opcao invalida, Informe novamente.");
      break;
  }

} while (opcao != 0);