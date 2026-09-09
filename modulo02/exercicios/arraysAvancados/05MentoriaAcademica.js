import PromptSync from "prompt-sync";
const teclado = PromptSync();


const fichaProjeto = {

  nomeCoordenador: "maikon",
  limMaxVagas: 10,
  areaEstudo: "Tecnologia",
  mentoresConfirmados: [
    {
      nome: "marcao",
      areaAtuacao: "Tecnologia"
    },
    {
      nome: "Jurandir",
      areaAtuacao: "Tecnologia"
    }
  ]
};

let novoUsuarioNome = teclado("Informe o nome: ");
let novoUsuarioArea = teclado("Informe a area de Atuacao: ");

console.table(fichaProjeto.mentoresConfirmados);

if (fichaProjeto.mentoresConfirmados.length < fichaProjeto.limMaxVagas && fichaProjeto.areaEstudo === novoUsuarioArea) {
  //cadastro permitido
  fichaProjeto.mentoresConfirmados.push({
    nome: novoUsuarioNome,
    areaAtuacao: novoUsuarioArea
  });
  console.log(fichaProjeto);

} else {
  fichaProjeto.status = "Bloqueado para Inscricoes";
  console.log(fichaProjeto);

}

