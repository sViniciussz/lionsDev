function adicionarContato(contatos, novoContato) {
  let emailExiste = false;

  for (i = 0; i < contatos.legth; i++) {
    if (contatos[i].email === novoContato.email) {
      emailExiste = true;
      break;
    }
  }

  if (emailExiste) {
    console.log("ERRO: email ja existe no sistema");
    return false;
  }

  if (contatos.length > 0) {
    let ultimoContato = contatos[contatos.length - 1];
    novoContato.id = ultimoContato.id + 1;
  }

  contatos.push(novoContato);
  return true;
}

export default adicionarContato;
