import PromptSync from "prompt-sync";
const teclado = PromptSync();

const registroCliente ={
  nome: "Pedroka Silveira",
  valorHamburguer: 30.00,
  lanchesComprados: 4,
  ingredientesExtras: []

};

let valorExtra = 0;

for(let i =0; i<2;i++){
  let ingredientesExtrasInformado = teclado(`Informe o adicional ${i+1}: [Bacon, Cheddar, Maionese]: `);
  if (ingredientesExtrasInformado === "Bacon"){
    registroCliente.ingredientesExtras.push(ingredientesExtrasInformado);
    valorExtra += 4;
  } else if (ingredientesExtrasInformado ===  "Cheddar"){
    registroCliente.ingredientesExtras.push(ingredientesExtrasInformado);
    valorExtra += 3;
  } else if (ingredientesExtrasInformado === "Maionese"){
    registroCliente.ingredientesExtras.push(ingredientesExtrasInformado);
    valorExtra += 1.50;
  } else {
    console.log("Extra informado incorreto");
    
  }

}


registroCliente.totalConta = (registroCliente.valorHamburguer + valorExtra) * registroCliente.lanchesComprados;
let desconto =0;
if(registroCliente.ingredientesExtras.length == 2 && registroCliente.lanchesComprados > 2){
  desconto = registroCliente.totalConta * 0.20;
  registroCliente.totalConta -= desconto;
}
console.log("     ---------");
console.log(`Cliente: ${registroCliente.nome}\nValor Hamburguer Un.: R$${registroCliente.valorHamburguer}\nQuantidade de Hamburguers: ${registroCliente.lanchesComprados}\nIngredientes Extras: ${registroCliente.ingredientesExtras}\nValor desconto: ${desconto}\nValor total: ${registroCliente.totalConta}`);
console.log("     ---------");





