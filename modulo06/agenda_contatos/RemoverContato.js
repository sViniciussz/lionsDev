function removerContato(contatos, id) {
  const INDICE = contatos.findIndex(contato => contato.id === id);

  if (INDICE === -1) {
    console.log("Erro: Cadastro nao encontrado");
    return false;
  } else {
    contatos.splice(INDICE, 1);
    console.log("Contato removido com sucesso!");
    return true;
  }
}
export default removerContato;