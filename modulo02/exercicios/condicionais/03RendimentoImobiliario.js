import PromptSync from "prompt-sync";
const teclado = PromptSync();

let qntCotas = Number(teclado("Informe a quantidade de cotas: "));

let valorDividendoPago = parseFloat(teclado("Informe o valor do dividendo: R$"));

let rendimentoTotal = qntCotas * valorDividendoPago;

if (rendimentoTotal >= 100) {
  console.log("Voce tem saldo suficiente para comprar uma nova cota e reinvestir!");

} else {
  console.log(`rendimento recebido: R$ ${rendimentoTotal}. Acumule mais para reinvestir.`);

}