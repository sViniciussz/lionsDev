import PromptSync from "prompt-sync";
const teclado = PromptSync();

const validacao = (nome, codigo) => {

  switch (true) {
    case (nome.length > 5 && codigo > 1000):
      return true;
      break;
  }

  return false;

}

let nome = teclado("Informe seu nome: ");
let codigo = teclado("Informe seu codigo do cracha: ");

//console.log(validacao(nome, codigo));

if (validacao(nome, codigo)) {
  console.log("Acesso concedido.");

} else {
  console.log("Acesso negado.");

}
