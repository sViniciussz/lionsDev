import promptSync from "prompt-sync";
const teclado = promptSync();

function adicionarConsulta() {
  console.log("\n=== ADICIONAR CONSULTA ===");
  const paciente = teclado("Nome do paciente: ");
  const medico = teclado("Nome do médico: ");
  const data = teclado("Data da consulta (DD/MM/AAAA): ");
  const horario = teclado("Horário (HH:MM): ");

  const consulta = {
    id: consultas.length + 1,
    paciente,
    medico,
    data,
    horario
  };

  consultas.push(consulta);
  console.log("Consulta adicionada!\n");

}

function listarConsultas() {
  console.log("=======LISTA CONSULTAS=======");
  if (consultas.length === 0) {
    console.log("Nenhuma consulta agendada.");

  } else {
    for (let i = 0; i < consultas.length; i++) {
      console.log("==================");
      console.log(consultas[i].id);
      console.log("PACIENTE: " + consultas[i].paciente);
      console.log("MEDICO: " + consultas[i].medico);
      console.log("DATA: " + consultas[i].data);
      console.log("HORA: " + consultas[i].horario);
      console.log("==================");
    }

  }
}

function atualizarConsulta() {
  console.log("=====ATUALIZAR CONSULTA=====");

  let num = Number(teclado("Informe Numero da Consulta:"));
  let posicao = num - 1;

  if (isNaN(num) || posicao < 0 || posicao >= consultas.length) {
    console.log("Consulta nao encontrada");
  } else {
    const paciente = teclado("Nome do paciente: ");
    const medico = teclado("Nome do médico: ");
    const data = teclado("Data da consulta (DD/MM/AAAA): ");
    const horario = teclado("Horário (HH:MM): ");

    consultas.splice(posicao, 1);
    console.log(consultas);


    const consultaAtualizada = {
      id: num,
      paciente,
      medico,
      data,
      horario
    };


    consultas[posicao] = consultaAtualizada
    console.log("Consulta atualizada!\n");
  }
}

function cancelarConsulta() {
  console.log("=======CANCELAMENTO=======");

  let num = Number(teclado("Informe Numero da Consulta:"));
  let posicao = num - 1;

  if (isNaN(num) || posicao < 0 || posicao >= consultas.length) {
    console.log("Consulta nao encontrada");

  } else {
    consultas.splice(posicao, 1);
    console.log("Consulta " + num + " cancelada!");

  }
}


function menu() {
  do {
    console.log("=======MENU========");
    console.log("1- ADICIONAR CONSULTA\n2- LISTAR CONSULTAS\n3- ATUALIZAR CONSULTA");
    console.log("4- CANCELAR CONSULTA\n0- SAIR!");
    console.log("===================");
    opcao = Number(teclado(":"));

    switch (opcao) {
      case 1:
        adicionarConsulta();
        break;

      case 2:
        listarConsultas();
        break;

      case 3:
        atualizarConsulta();
        break;

      case 4:
        cancelarConsulta();
        break;

      case 0:
        console.log("Saindo...");
        break;

      default:
        console.log("Opcao Invalida");
        break;
    }

  } while (opcao != 0);
}

let opcao;
let consultas = [];

menu();