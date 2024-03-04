const readline = require("readline-sync");
const Contato = require("./modelo");

const contato = [];
function adicionarContato(nome, email, telefone) {
  const nome = readline.question("Digite seu nome: ");
  const email = readline.question("Digite seu Email: ");
  const telefone = readline.question("Digite seu telefone:");
  const novoContato = new Contato(nome, email, telefone);
  contato.push(novoContato);
}
function listarContatos() {
  return contato;
}
function buscarContato() {
  const nome = readline.question("Digite o nome que deseja buscar: ");
  const nomeEncontrado = contato.find((contato) => contato.nome === nome);
  if (nomeEncontrado){
    console.log(nomeEncontrado.toString())
  }else {
    console.log("Nome não localizado!")
  }
}
function atualizarContato(){
    const atualizarNome = readline.question("Digite o nome do contato que deseja atualizar: ")
    const buscar = contato.find((contato) => contato.nome === atualizarNome)
    if (buscar){
        console.log("O que deseja atualizar? email ou telefone?")
        if (email){
            const email = readline.question("Digite o novo email:")
            contato.email = email 
        }else {
            const telefone = readline.question("Digite o novo telefone: ")
            contato.telefone = telefone
        }
        
    }else {
        console.log("Nome não encontrado")
    }
}
function removerContato(){
    const removerNome = readline.question("Digite nome que deseja remover!")
    const posicao = contato.findIndex((contato) => contato.nome === removerNome)
    if (posicao >= 0){
        contato.splice(posicao, 1);
    }else {
        console.log("Nome não encontrado!")
    }
}

module.export = {adicionarContato, listarContatos, buscarContato, atualizarContato, removerContato}