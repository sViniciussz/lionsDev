import PromptSync from "prompt-sync";
const teclado = PromptSync();

function cadastrarProduto(nome, preco, quantidade) {
  return {
    nome: nome,
    preco: preco,
    quantidade: quantidade
  };
}

let arrayObjetos = []

arrayObjetos.push(cadastrarProduto(valesco, 10, 5))
arrayObjetos.push(cadastrarProduto(marcelo, 2, 10));
arrayObjetos.push(cadastrarProduto(pedro, 8, 2));

function totalEstoque(lista){
  return lista.reduce((total, produto) => {
      return total + (produto.preco * produto.quantidade);
  }, 0);
}

let totalEstoque = somarTotalEstoque(arrayObjetos);
console.log("Valor total do estoque: R$ " + totalEstoque);