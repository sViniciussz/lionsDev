import PromptSync from "prompt-sync";
const teclado = PromptSync();

const carrinhoCompras = {
  nomeCliente: null,
  tipoAssinatura: "prime",
  listaPrecos: []
};


for (let i = 0; i <= 2; i++) {
  carrinhoCompras.listaPrecos.push(parseFloat(teclado("informe o preco do produto: R$ ")));
}

let valorTotal = 0;
for (let i = 0; i <= 2; i++) {
  valorTotal += carrinhoCompras.listaPrecos[i]
}

// console.table(carrinhoCompras.listaPrecos);
// console.log(valorTotal);

if (valorTotal > 200 || carrinhoCompras.tipoAssinatura === "prime") {
  console.log("Frete Gratis");
  console.log("seu carrinho:\n", carrinhoCompras.listaPrecos, "\nvalor total: ", valorTotal);


} else {
  carrinhoCompras.frete = 30;
  valorTotal += carrinhoCompras.frete;
  console.log("seu carrinho:\n", carrinhoCompras.listaPrecos, "\nvalor total: ", valorTotal);
}