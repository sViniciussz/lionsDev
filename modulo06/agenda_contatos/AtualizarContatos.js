function atualizarContato(contatos, id, novosDados) {
  const INDICE = contatos.findIndex((contato) => contato.id === id);
  
  if (INDICE === -1) {
    console.log("Erro: Contato nao encontrado");
    return false;
  } 
  
  // Se o usuário estiver tentando mudar o e-mail, verifica se já existe em outro contato
  if (novosDados.email) {
    for (let i = 0; i < contatos.length; i++) {
      const atual = contatos[i]; // <--- Aqui definimos a variável 'atual' que estava faltando
      if (atual.email === novosDados.email && atual.id !== id) {
        console.log("Erro: Novo email ja em uso");
        return false;
      }
    }
  }
  
  contatos[INDICE].nome = novosDados.nome || contatos[INDICE].nome;
  contatos[INDICE].email = novosDados.email || contatos[INDICE].email;
  
  if (novosDados.telefones && novosDados.telefones.length > 0) {
    contatos[INDICE].telefones = novosDados.telefones;
  } 
  
  return true;
}

export default atualizarContato;