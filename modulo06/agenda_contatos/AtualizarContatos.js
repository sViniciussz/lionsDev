function atualizarContato(contatos, id, novosDados) {
  const INDICE = contatos.findIndex((contato) => contato.id === id);

  if (INDICE === -1) {
    console.log("Erro: Contato nao encontrado");
    return false;
  } else if (novosDados.email) {
    for (let i = 0; i < contatos.length; i++) {
      if (atual.email === novosDados.email && atual.id !== id) {
        console.log("Erro: Novo email ja em uso");
        return false
      }
    }
  } else {
    contatos[INDICE].nome = novosDados.nome || contatos[INDICE].nome;
    contatos[INDICE].email = novosDados.email || contatos[indice].email;
    if (novosDados.telefones && novosDados.telefones.length > 0) {
      contatos[INDICE].telefones = novosDados.telefones;
    }
    return true;
  }
}


export default atualizarContato;