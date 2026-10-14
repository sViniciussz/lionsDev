import PromptSync from "prompt-sync";

export function somar(numA, numB) {
  return numA + numB
}

export function subtrair(numA, numB) {
  return numA - numB
}

export function multiplicar(numA, numB) {
  return numA * numB
}

export function dividir(numA, numB) {
  return numA / numB
}

export function porcentagem(numA, numB) {
  return (numA / 100) * numB;
}

export function menu(){
  console.log("========== MENU ==========");
  console.log("1- Adicao\n2- Subtracao\n3- Multiplicacao\n4- Divisao\n5- Porcentagem\n6- Exibir resultado atual\n0- Sair!");
}