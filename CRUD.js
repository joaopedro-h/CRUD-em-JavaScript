const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Produto {   /* Foi criado a classe e as propiedades do produto. */
  constructor(codigo,nome,preco,quantidade) {
      this.codigo = codigo;
      this.nome = nome;     
      this.preco = preco;
      this.quantidade = quantidade;
  }
}  

const cadastros = []; /* Variável declarada para contar os cadastros feitos.*/

function cadastrar(){

            console.clear();
            console.log("\n< Informe os dados do produto >");
                
        rl.question("Código do produto: ", (codigo) => { /* rl.question utilizado para perguntar ao usuário e guardar o valor em memória, ex : codigo, e assim por diante. */

            rl.question("Nome do produto: ", (nome) => {

                    for (let i = 0; i < cadastros.length; i++) { /* for usado para buscar se já existe produto cadastrado com o mesmo nome. */
                            
                        if ( nome  === cadastros[i].nome ) {
                            console.log("\nProduto já cadastrado!");
                            mostrarMenu();
                            return;          
                        }  
                    }

                rl.question("Preço do produto: ", (preco) => {

                    rl.question("Quantidade do produto: ", (quantidade) =>{
                        
                        const produto = new Produto ( /* Aqui foi criado uma váriavel produto, aonde irá armazenar o novo objeto criado, 'produto' irá receber as propiedades de 'new Produto' */
                            Number(codigo),
                            nome,
                            Number(preco),
                            Number(quantidade)
                        );

                        cadastros.push(produto); /* Aqui foi adicionado o 'produto' aos cadastros via push (semelhente ao total++;) */
                        console.clear();
                        console.log("Cadastrado com sucesso!\n\n");
                        mostrarMenu(); /* mostrarMenu(); é utilizado para poder voltar ao menu inicial, semelhante ao return; */
                        
                    });

                });

            });

        });
}

function listar(){

    console.clear();
    console.log("\n<======================================== | Produtos cadastrados. | ========================================>");

        if (cadastros.length === 0) {  /* If utilizado para verificar se existe algum cadastro. */
            console.log("Nenhum produto encontrado!\n");
            mostrarMenu();
            return; /* Return foi utilizado para encerrar a função aqui e não dar sequência ao for. */
        }
   
        for (let i = 0; i < cadastros.length ; i++) { /* Usado length para fazer a contagem de cadastros, pois conta quantos elementos existem no array. */
            
            console.log(`Código: ${cadastros[i].codigo}`);
            console.log(`Nome: ${cadastros[i].nome}`);
            console.log(`Preço: ${cadastros[i].preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}`); /* Feito a conversão do preço para BRL. */
            console.log(`Quantidade: ${cadastros[i].quantidade}\n`);
        }
            mostrarMenu();  /* mostrarMenu(); é utilizado para poder voltar ao menu inicial, semelhante ao return; */
}

function buscar(){
    
        console.clear();
        console.log("\nComo deseja fazer a busca?");
        console.log("1 - Código.");
        console.log("2 - Nome.");
        rl.question(`Escolha uma opção: `, (opcaoBusca) => {
        opcaoBusca = Number(opcaoBusca);

    if (opcaoBusca == 1) {
        
            rl.question("\nInsira o código do produto: ", (codigoBusca) => {
        
            codigoBusca = Number(codigoBusca); /*Feito a conversão de string para número inteiro, pois no rl.question é salvo como string onde iria dar erro na comparação do if.*/
                let encontrado = false;

                    for (let i = 0; i < cadastros.length; i++) {
                    
                        if (codigoBusca == cadastros[i].codigo) { 
                            console.log("\nProduto encontrado com sucesso!");
                            console.log(`Código: ${cadastros[i].codigo}`);
                            console.log(`Nome: ${cadastros[i].nome}`);
                            console.log(`Preço: ${cadastros[i].preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}`);
                            console.log(`Quantidade: ${cadastros[i].quantidade}\n`);
                            
                            encontrado = true;  /* Variável usada para definir que o produto foi encontrado. */
                            break; /*Break usado para encerrar a busca assim que o produto for encontrado. */
                        }
                    }

                    if (!encontrado) { /* Usado ! para verificar se o produto foi encontrado, significa a mesma coisa que "encontrado === false" */
                        console.log("Produto não encontrado!\n\n");
                        mostrarMenu();
                    }

                    mostrarMenu();
            });
            
    }else if (opcaoBusca == 2) {
        
            rl.question("\nInsira o nome do produto: ", (nomeBusca) => {
                
                let encontrado = false;

                    for (let i = 0; i < cadastros.length; i++) {
                    
                        if (nomeBusca == cadastros[i].nome) { 
                            console.log("\nProduto encontrado com sucesso!");
                            console.log(`Código: ${cadastros[i].codigo}`);
                            console.log(`Nome: ${cadastros[i].nome}`);
                            console.log(`Preço: ${cadastros[i].preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}`);
                            console.log(`Quantidade: ${cadastros[i].quantidade}\n`);
                            
                            encontrado = true; /* Variável usada para definir que o produto foi encontrado. */
                            break;
                        }
                    }
                    
                    if (!encontrado) {  /* Usado ! para verificar se o produto foi encontrado, significa a mesma coisa que "encontrado === false" */
                        console.log("Produto não encontrado!\n\n");
                        mostrarMenu();
                    }

                    mostrarMenu();
            });

        }else{
                console.log("Opção inválida!\n\n");
                mostrarMenu();
        }             
    });              
}

function atualizar(){

        console.clear();
        console.log("Como deseja fazer a atualização?");
        console.log("1 - Código.");
        console.log("2 - Nome.");
        rl.question(`Escolha uma opção: `, (opcaoAtualizar) =>{
        opcaoAtualizar = Number(opcaoAtualizar);


    if (opcaoAtualizar == 1) {

            rl.question(`\nInsira o código do produto que deseja atualizar: `, (codigoAtualizar) =>{
        
                codigoAtualizar = Number(codigoAtualizar); /*Feito a conversão de string para número inteiro, pois no rl.question é salvo como string onde iria dar erro na comparação do if.*/
                let encontrado = false;

                    for (let i = 0; i < cadastros.length; i++) {
            
                        if (codigoAtualizar == cadastros[i].codigo) {
                            console.log("\nProduto encontrado com sucesso!");
                            console.log(`Código: ${cadastros[i].codigo}`);
                            console.log(`Nome: ${cadastros[i].nome}`);
                            console.log(`Preço: ${cadastros[i].preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}`);
                            console.log(`Quantidade atual: ${cadastros[i].quantidade}`);
                            
                            encontrado = true;  /* Variável usada para definir que o produto foi encontrado. */

                            rl.question(`\nInsira a nova quantidade: `, (novaQuantidade) => {
                            
                            if (novaQuantidade < 0) {
                                console.log("Quantidade inválida!");
                                mostrarMenu();
                                return;
                            }    
            
                            cadastros[i].quantidade = novaQuantidade;
                            
                            console.log("Alteração feita com sucesso!");
                            console.log(`Quantidade atual: ${novaQuantidade}`);
                            mostrarMenu();
                            return;
                            });
                        }
                    }      

                    if (!encontrado) {  /* Usado ! para verificar se o produto foi encontrado, significa a mesma coisa que "encontrado === false" */
                        console.log("Produto não encontrado!\n\n");
                        mostrarMenu();
                    }                
            });
   
        }else if (opcaoAtualizar == 2) {
            
            rl.question(`\nInsira o nome do produto que deseja atualizar: `, (nomeAtualizar) =>{
    
                let encontrado = false;

                    for (let i = 0; i < cadastros.length; i++) {
        
                        if (nomeAtualizar == cadastros[i].nome) {
                            console.log("\nProduto encontrado com sucesso!");
                            console.log(`Código: ${cadastros[i].codigo}`);
                            console.log(`Nome: ${cadastros[i].nome}`);
                            console.log(`Preço: ${cadastros[i].preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}`);
                            console.log(`Quantidade atual: ${cadastros[i].quantidade}`);

                            encontrado = true;  /* Variável usada para definir que o produto foi encontrado. */
            
                            rl.question(`\nInsira a nova quantidade: `, (novaQuantidade) => {
                            
                            if (novaQuantidade < 0) {
                                console.log("Quantidade inválida!");
                                mostrarMenu();
                                return;
                            }    
            
                            cadastros[i].quantidade = novaQuantidade;
                            
                            console.log("Alteração feita com sucesso!");
                            console.log(`Quantidade atual: ${novaQuantidade}`);
                            mostrarMenu();
                            return;
                            });
                        }
                    }       

                    if (!encontrado) {  /* Usado ! para verificar se o produto foi encontrado, significa a mesma coisa que "encontrado === false" */
                        console.log("Produto não encontrado!\n\n");
                        mostrarMenu();
                    }
            });

        }else{
            console.log("Opção inválida!\n\n");
            mostrarMenu(); 
        }
    });
}

function remover(){

            console.clear();
            console.log("Como deseja fazer a remoção?");
            console.log("1 - Código.");
            console.log("2 - Nome.");
            rl.question(`Escolha uma opção: `, (opcaoRemover) =>{

            opcaoRemover = Number(opcaoRemover);    
            
        if (opcaoRemover == 1) {
            
            rl.question(`\nInsira o código do produto que deseja remover: `, (codigoRemover) => {
        
                codigoRemover = Number(codigoRemover); /*Feito a conversão de string para número inteiro, pois no rl.question é salvo como string onde iria dar erro na comparação do if.*/
                let encontrou = false;

                    for (let i = 0; i < cadastros.length; i++) {
            
                        if (codigoRemover == cadastros[i].codigo){
                            console.log("\nProduto encontrado com sucesso!");
                            console.log(`Código: ${cadastros[i].codigo}`);
                            console.log(`Nome: ${cadastros[i].nome}`);
                            console.log(`Preço: ${cadastros[i].preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}`);
                            console.log(`Quantidade: ${cadastros[i].quantidade}`);

                            encontrou = true;  /* Variável usada para definir que o produto foi encontrado. */
            
                            cadastros.splice(i, 1); /* Utilizado para fazer a remoção do array, remove exatamente 1 elemento na posição i. */
                            console.log("\nProduto removido com sucesso!\n");
            
                            mostrarMenu();
                            return;
                        }
                    }

                    if (!encontrou) {  /* Usado ! para verificar se o produto foi encontrado, significa a mesma coisa que "encontrado === false" */
                        console.log("Produto não encontrado!\n\n");
                        mostrarMenu();
                    }
                        
            });

        }else if (opcaoRemover == 2) {

            rl.question(`\nInsira o nome do produto que deseja remover: `, (nomeRemover) => {
        
                let encontrou = false;

                    for (let i = 0; i < cadastros.length; i++) {
            
                        if (nomeRemover == cadastros[i].nome){
                            console.log("\nProduto encontrado com sucesso!");
                            console.log(`Código: ${cadastros[i].codigo}`);
                            console.log(`Nome: ${cadastros[i].nome}`);
                            console.log(`Preço: ${cadastros[i].preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}`);
                            console.log(`Quantidade: ${cadastros[i].quantidade}`);

                            encontrou = true;  /* Variável usada para definir que o produto foi encontrado. */ 
            
                            cadastros.splice(i, 1); /* Utilizado para fazer a remoção do array, remove exatamente 1 elemento na posição i. */
                            console.log("\nProduto removido com sucesso!\n");
            
                            mostrarMenu();
                            return;
                        }
                    }

                    if (!encontrou) {  /* Usado ! para verificar se o produto foi encontrado, significa a mesma coisa que "encontrado === false" */
                        console.log("Produto não encontrado!\n\n");
                        mostrarMenu();
                    }              
            });   
            
        }else{
            console.log("Opção inválida!\n\n");
            mostrarMenu(); 
        }   
    });
}

function mostrarMenu(){

        console.log("\nSeja bem vindo(a) ao menu principal.");
        console.log("1 - Cadastrar produto.");
        console.log("2 - Listar produtos.");
        console.log("3 - Buscar produto.");
        console.log("4 - Atualizar quantidade.");
        console.log("5 - Remover produto.");
        console.log("0 - Sair.\n");
        rl.question("Escolha uma opção: ", (opcao) =>{

        opcao = Number(opcao); /*Feito a conversão de string para número inteiro para que fosse compatível no case.*/

            switch (opcao){

            case 1:
                cadastrar();
                break;
            
            case 2:
                listar();
                break;

            case 3:
                buscar();
                break;
            
            case 4:
                atualizar();
                break;

            case 5:
                remover();
                break;
            
            case 0:
                sair();
                break;
            
            default:
                console.log("Opção inválida!\n");
                mostrarMenu();
            }
        });
}

mostrarMenu();
