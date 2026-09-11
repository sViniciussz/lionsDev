import PromptSync from "prompt-sync";
const teclado = PromptSync();

const registro = {
  nome: "cesar"
};

let produto = parseInt(teclado("Informe o produto da compra [1-Fone 2-Teclado 3-Mouse]: "));

switch (produto) {
  case 1:
    console.log("Fone adicionado ao carrinho");
    registro.produto = "Fone";
    registro.valor = 50.00;
    break;

  case 2:
    console.log("Teclado adicionado ao carrinho");
    registro.produto = "teclado";
    registro.valor = 150.00;
    break;

  case 3:
    console.log("Mouse adicionado ao carrinho");
    registro.produto = "mouse";
    registro.valor = 100.00;
    break;

  default:
    console.log("Codigo Invalido");
    registro.produto = "desconhecido";
    registro.valor = 0.00;
    break;
}

console.log(registro);
