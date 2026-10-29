import PromptSync from "prompt-sync";

import adicionarContato from "./AdicionarContatos.js";
import atualizarContato from "./AtualizarContatos.js";
import removerContato from "./RemoverContato.js";
import listarContatos from "./ListarContatos.js";

const listaDeContatos = [];
const teclado = PromptSync();
let opcao;

do {
  console.log("========== MENU ==========");
  console.log("1- Adicionar Contato\n2- Atualizar Contato\n3- Remover Contato\n4- Listar Contato\n0- Sair!");
  opcao = parseInt(teclado(":"));

  if (isNaN(opcao)) {
    console.log("Erro: Informe uma opcao valida.");
    continue;
  }

  switch (opcao) {
    case 1:
      console.log(">>ADICIONAR CONTATO<<");
      const nome = teclado("Nome: ");
      const email = teclado("Email: ");
      const telefones = [];

      const qtdTelefones = parseInt(teclado("Quantos telefones deseja adicionar? "));

      if (!isNaN(qtdTelefones) && qtdTelefones > 0) {
        for (let i = 0; i < qtdTelefones; i++) {
          telefones.push(teclado(`Telefone ${i + 1}: `));
        }
      } else {
        console.log("Quantidade inválida. Solicitando apenas 1 telefone.");
        telefones.push(teclado("Telefone: "));
      }

      const novoContato = {
        nome: nome,
        email: email,
        telefones: telefones
      };

      adicionarContato(listaDeContatos, novoContato);
      console.log("Contato adicionado com sucesso\n");

      break;

    case 2:
      console.log(' >>ATUALIZAR CONTATO<< ');
      const idAtualizar = parseInt(teclado('ID do contato a atualizar: '));
      if (isNaN(idAtualizar)) {
        console.log('Erro: ID inválido.');
        break;
      }
      const novoNome = teclado('Novo Nome (aperte Enter para manter): ');
      const novoEmail = teclado('Novo Email (aperte Enter para manter): ');
      const novosDados = {};
      if (novoNome) novosDados.nome = novoNome;
      if (novoEmail) novosDados.email = novoEmail;

      const qtdNovosTel = parseInt(teclado('Quantos novos telefones deseja adicionar? (0 para manter): '));
      if (!isNaN(qtdNovosTel) && qtdNovosTel > 0) {
        novosDados.telefones = [];
        for (let i = 0; i < qtdNovosTel; i++) {
          novosDados.telefones.push(teclado(`Telefone ${i + 1}: `));
        }
      }

      const atualizou = atualizarContato(listaDeContatos, idAtualizar, novosDados);
      if (atualizou) {
        console.log('Contato atualizado com sucesso!\n');
      }
      break;

    case 3:
      console.log(">>REMOVER CONTATO<<");
      const id = (parseInt(teclado("ID: ")));
      removerContato(listaDeContatos, id);
      break;

    case 4:
      listarContatos(listaDeContatos);
      break;

    case 0:
      console.log("SAINDO...");
      break;

    default:
      console.log("Opcao invalida, Informe novamente.");
      break;
  }

} while (opcao != 0);