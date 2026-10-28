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
        console.log("================================");
        
        // Loop para listar cada telefone individualmente com seu respectivo número de ordem
        for (let i = 0; i < contato.telefones.length; i++) {
            console.log(`Telefone ${i + 1}: ${contato.telefones[i]}`);
        }
    });
}

export default listarContatos;