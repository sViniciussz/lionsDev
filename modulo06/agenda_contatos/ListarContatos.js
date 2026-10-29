function listarContatos(contatos) {
    if (contatos.length === 0) {
        console.log("Nenhum contato cadastrado\n");
        return;
    } 
    
    contatos.forEach(contato => {
        console.log("================================");
        console.log("Id: " + contato.id);
        console.log("Nome: " + contato.nome);
        console.log("Email: " + contato.email);
        
        console.log(contato.telefones.map((tel, i) => `Telefone ${i + 1}: ${tel}`).join('\n'));

        console.log("================================\n");
    });
}

export default listarContatos;