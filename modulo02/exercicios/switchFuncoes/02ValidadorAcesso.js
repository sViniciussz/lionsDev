import PromptSync from "prompt-sync";
const teclado = PromptSync();


let nome = teclado("Informe seu nome: ");
let codigo = teclado("Informe seu codigo do cracha: ");

const validacao = (nome, codigo) => {

  switch (true) {
    case (nome.length > 5 && codigo > 1000):
      return true;
      break;
  }

  return false;

}
if (validacao(nome, codigo)) {
  console.log("Acesso concedido.");

} else {
  console.log("Acesso negado.");

}

