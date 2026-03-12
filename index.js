const readline = require("readline");

const rl = readline.createInterface({ /* Rl utilizado para receber input do usuário nas funções. */
    input: process.stdin,
    output: process.stdout
});

const fs = require("fs"); /* Módulo criado para manipular arquivos em JSON. */

const atualizar = require("./services/atualizar"); /* Aqui é feito a importção de todas as funções para o index. */
const buscar = require("./services/buscar");
const cadastrar = require("./services/cadastrar");
const listar = require("./services/listar");
const relatorio = require("./services/relatorio");
const remover = require("./services/remover");
const valorEstoque = require("./services/valorEstoque");
const verificarEstoque = require("./services/verificarEstoque");
const sair = require("./services/sair");


function salvarDados() { /* Função criada para salvar os dados em JSON. */
    
    const dados = JSON.stringify(cadastros, null, 2);
    fs.writeFileSync("produtos.json", dados); 

}

function carregarDados() { /* Função criada para carregar os dados salvos em JSON. */

    const dados = fs.readFileSync("produtos.json", "utf8");

    cadastros = JSON.parse(dados);

}

let cadastros = []; /* Variável declarada para contar os cadastros feitos.*/

function mostrarMenu(){

        console.log("\nSeja bem vindo(a) ao menu principal."); 
        console.log("1 - Cadastrar produto.");
        console.log("2 - Listar produtos.");
        console.log("3 - Buscar produto.");
        console.log("4 - Atualizar quantidade.");
        console.log("5 - Remover produto.");
        console.log("6 - Valor total do estoque.");
        console.log("7 - Produtos com estoque baixo.");
        console.log("8 - Relatório total.");
        console.log("0 - Sair.\n");
        rl.question("Escolha uma opção: ", (opcao) =>{

        opcao = Number(opcao); /*Feito a conversão de string para número inteiro para que fosse compatível no case.*/

            switch (opcao){

            case 1:
                cadastrar(cadastros, rl, salvarDados, mostrarMenu); /* Passado os parâmetros que a função irá utilizar no switch. */
                break;
            
            case 2:
                listar(cadastros, mostrarMenu);
                break;

            case 3:
                buscar(cadastros, rl, mostrarMenu);
                break;
            
            case 4:
                atualizar(cadastros, rl, salvarDados, mostrarMenu);
                break;

            case 5:
                remover(cadastros, rl, salvarDados, mostrarMenu);
                break;

            case 6:
                valorEstoque(cadastros, mostrarMenu);
                break;

            case 7:
                verificarEstoque(cadastros, mostrarMenu);
                break;

            case 8:
                relatorio(cadastros, mostrarMenu);
                break;
            
            case 0:
                sair(rl);
                break;
            
            default:
                console.log("Opção inválida!\n");
                mostrarMenu();
            }
        });
}

carregarDados(); /* Função foi chamada antes de mostrar o menu para já carregar os dados salvos. */
mostrarMenu();
