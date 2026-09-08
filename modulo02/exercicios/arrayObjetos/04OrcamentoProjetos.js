import PromptSync from "prompt-sync";
const teclado = PromptSync();

let filaProjetos = [];
let nomeEmpresaCliente = teclado("Informe o nome de uma empresa cliente: ")
let valorEstimado = parseFloat(teclado("Informe o valor estimado do projeto: R$ "));

const objeto ={
  cliente: nomeEmpresaCliente, 
  valor: valorEstimado
}

filaProjetos.unshift(objeto.cliente, objeto.valor);

let prazo = teclado("prazo de entrega urgente ? [sim/nao]");

if(prazo === "sim" && objeto.valor > 3000){
  
  objeto.valor += (objeto.valor* 0.15); 
  console.log("O valor do projeto foi para ", objeto.valor);
  
} else{
  console.log("o valor do projeot eh ", filaProjetos[filaProjetos.length -1]);
  
}