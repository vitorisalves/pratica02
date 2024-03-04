const readline = require("readline-sync");
const contatoControlador = require("./controlador");

function menu() {
  console.log("1-Adicionar Contato!");
  console.log("2-Listar Contatos!");
  console.log("3-Buscar Contatos");
  console.log("4-Atualizar Contatos");
  console.log("5-Remover Contato");
  console.log("6-Sair");
}
function escolherOpcao(opcao) {
  switch (opcao) {
    case "1":
      contatoControlador.adicionarContato();
      break;
    case "2":
      contatoControlador.listarContato();
      break;
    case "3":
      contatoControlador.buscarContato();
      break;
    case "4":
      contatoControlador.atualizarContato();
      break;
    case "5":
      contatoControlador.removerContato();
      break;
    case "6":
      Process.exit(0);
      break;
    default:
      console.log("Opção Invalida!");
      readline.question("Precione ENTER para continuar...");
  }
}

function main() {
  while (true) {
    menu();
    const opcao = readline.question("Entre com uma opção: ");
    escolherOpcao(opcao);
  }
}
main();
