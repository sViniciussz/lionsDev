const produtos = [
  { nome: "Teclado", preco: 150, estoque: 5 },
  { nome: "Mouse", preco: 110, estoque: 7 },
  { nome: "Fone", preco: 77, estoque: 2 },
  { nome: "Monitor", preco: 800, estoque: 3 }];

let valorTotalEstoque = 0;

for (let i = 0; i < produtos.length; i++) {
  console.log(produtos[i].nome + " -- R$ " + produtos[i].preco + " (" + produtos[i].estoque + " un.)");
  valorTotalEstoque += produtos[i].preco * produtos[i].estoque;

};
console.log("\nValor total em estoque: " + valorTotalEstoque);