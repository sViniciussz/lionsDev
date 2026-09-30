import promptSync from "prompt-sync";
const teclado = promptSync();

let opcao;

// function adicionarConsulta(){

// }

// function listarConsultas(){

// }

// function atualizarConsulta(){

// }

// function cancelarConsulta(){

// }


function menu(){
  do{
    console.log("=======MENU========");
    console.log("1- ADICIONAR CONSULTA\n2- LISTAR CONSULTAS\n3- ATUALIZAR CONSULTA");
    console.log("4- CANCELAR CONSULTA\n0- SAIR!");
    opcao = Number(teclado(":"));
    console.log("===============");
  
    switch (opcao) {
      case 1:
        console.log("teste");
        
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

menu();