import PromptSync from "prompt-sync";
const teclado = PromptSync();

let custoProducao = teclado("Informe o custo de producao: R$");
let valorVenda = teclado("Informe o valor de venda: R$");

let lucroBruto = valorVenda - custoProducao;

if (lucroBruto < 500) {
  console.log("Atencao: margem de lucro perigosamente baixa!");

} else {
  console.log(`Margem de lucro saudave: R$ ${lucroBruto}`);

}