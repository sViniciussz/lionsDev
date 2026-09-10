import PromptSync from "prompt-sync";
const teclado = PromptSync();

const validacao = (nome, codigo) => {
  const letras = nome.split("");
  if (letras.length > 4 && codigo > 1000) {
    return true;

  } else {
    return false;
  }

}

let nome = teclado("Informe seu nome: ");
let codigo = teclado("Informe seu codigo do cracha: ");

//console.log(validacao(nome, codigo));

if (validacao(nome, codigo)) {
  console.log("Acesso concedido.");

} else {
  console.log("Acesso negado.");

}
