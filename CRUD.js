const { isUtf8 } = require("buffer");
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
    console.log("\n<========================================| PRODUTOS CADASTRADOS |========================================>");

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

                const produto = cadastros.find(produto => produto.codigo === codigoBusca);
                
                    if (!produto) {
                        console.log("Produto não encontrado!\n\n");
                        mostrarMenu();
                        return;
                    }

                    console.log("\nProduto encontrado com sucesso!");
                    console.log(`Código: ${produto.codigo}`);
                    console.log(`Nome: ${produto.nome}`);
                    console.log(`Preço: ${produto.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}`);
                    console.log(`Quantidade: ${produto.quantidade}\n`);

                    mostrarMenu();
            });
            
    }else if (opcaoBusca == 2) {
        
            rl.question("\nInsira o nome do produto: ", (nomeBusca) => {
                
                const produto = cadastros.find(produto => produto.nome === nomeBusca);
                
                    if (!produto) {
                        console.log("Produto não encontrado!\n\n");
                        mostrarMenu();
                        return;
                    }

                    console.log("\nProduto encontrado com sucesso!");
                    console.log(`Código: ${produto.codigo}`);
                    console.log(`Nome: ${produto.nome}`);
                    console.log(`Preço: ${produto.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}`);
                    console.log(`Quantidade: ${produto.quantidade}\n`);

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

            rl.question(`\nInsira o código do produto que deseja atualizar: `, (codigoAtualizar) => {
        
            codigoAtualizar = Number(codigoAtualizar); /*Feito a conversão de string para número inteiro, pois no rl.question é salvo como string onde iria dar erro na comparação do if.*/

                /* "i" vai receber o índice do produto encontrado dentro do array "cadastros" */
                const i = cadastros.findIndex(produto => produto.codigo === codigoAtualizar); /* "produto" usado no findIndex só existe dentro dessa função. */
                
                /* findIndex percorre todo o array, ele usa "produto" como parametro para representar cada objeto do array naquele momento, em seguida ele compara "produto.codigo" com "codigoAtualizar".*/

                    if (i === -1) { /* Se não for encontrado nenhum código o findIndex retorna -1, nesse caso mostramos a mensagem e voltamos ao menu. */
                        console.log("Produto não encontrado!\n\n");
                        mostrarMenu();
                        return;
                    }  

                    const produto = cadastros[i]; /* Produto irá receber as informações de cadastros[i], aonde "i" pode valer (1,2,3 e etc.. dependende da posição do índice na qual foi encontrado), Exemplo : cadastros[2] */

                    console.log("\nProduto encontrado com sucesso!");
                    console.log(`Código: ${produto.codigo}`); /* produto.codido é a mesma coisa como se fosse cadastros[i].codigo e etc. */
                    console.log(`Nome: ${produto.nome}`);
                    console.log(`Preço: ${produto.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}`);
                    console.log(`Quantidade: ${produto.quantidade}\n`);

                    rl.question(`Insira a nova quantidade: `, (novaQuantidade) => {

                        if (novaQuantidade < 0) {
                            console.log("Quantidade inválida!");
                            mostrarMenu();
                            return;
                        }    

                        produto.quantidade = novaQuantidade;

                        console.log("Alteração feita com sucesso!");
                        console.log(`Quantidade atual: ${novaQuantidade}`);
                        mostrarMenu();
                        return;
                    });
            });
   
        }else if (opcaoAtualizar == 2) {
            
            rl.question(`\nInsira o nome do produto que deseja atualizar: `, (nomeAtualizar) => {

                const i = cadastros.findIndex(produto => produto.nome === nomeAtualizar);
            
                    if (i === -1) {
                        console.log("Produto não encontrado!\n\n");
                        mostrarMenu();
                        return;
                    }

                    const produto = cadastros[i];

                    console.log("\nProduto encontrado com sucesso!");
                    console.log(`Código: ${produto.codigo}`);
                    console.log(`Nome: ${produto.nome}`);
                    console.log(`Preço: ${produto.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}`);
                    console.log(`Quantidade: ${produto.quantidade}\n`);

                    rl.question(`Insira a nova quantidade: `, (novaQuantidade) => {

                        if (novaQuantidade < 0) {
                            console.log("Quantidade inválida!");
                            mostrarMenu();
                            return;
                        }    

                        produto.quantidade = novaQuantidade;

                        console.log("Alteração feita com sucesso!");
                        console.log(`Quantidade atual: ${novaQuantidade}`);
                        mostrarMenu();
                        return;

                    });
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
                
                    const i = cadastros.findIndex(produto => produto.codigo === codigoRemover);

                        if (i === -1) {
                            console.log("Produto não encontrado!");
                            mostrarMenu();
                            return
                        }
                        
                        const produto = cadastros[i];

                        console.log("\nProduto encontrado com sucesso!");
                        console.log(`Código: ${produto.codigo}`);
                        console.log(`Nome: ${produto.nome}`);
                        console.log(`Preço: ${produto.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}`);
                        console.log(`Quantidade: ${produto.quantidade}`);

                        cadastros.splice(i, 1);
                        console.log("\nProduto removido com sucesso!\n");
            
                        mostrarMenu();
                        return;
                });

        }else if (opcaoRemover == 2) {

                rl.question(`\nInsira o nome do produto que deseja remover: `, (nomeRemover) => {
        
                    const i = cadastros.findIndex(produto => produto.nome === nomeRemover);

                        if (i === -1) {
                            console.log("Produto não encontrado!");
                            mostrarMenu();
                            return
                        }
                        
                        const produto = cadastros[i];

                        console.log("\nProduto encontrado com sucesso!");
                        console.log(`Código: ${produto.codigo}`);
                        console.log(`Nome: ${produto.nome}`);
                        console.log(`Preço: ${produto.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}`);
                        console.log(`Quantidade: ${produto.quantidade}`);

                        cadastros.splice(i, 1);
                        console.log("\nProduto removido com sucesso!\n");
            
                        mostrarMenu();
                        return;       
                });   
            
        }else{
            console.log("Opção inválida!\n\n");
            mostrarMenu(); 
        }   
    });
}

function valorEstoque() {
    
    console.clear();
    let valorEstoque = 0; /* Varíavel criada para somar todos os valores dos produtos. */

        if (cadastros.length === 0) {
            console.log("Nenhum produto encontrado!\n");
            mostrarMenu();
            return;
        }

        for (let i = 0; i < cadastros.length ; i++) { 
            
            const produto = cadastros[i]; /* Produto irá receber as informações de cadastros[i], aonde "i" está percorrendo os índices do array.*/

            valorEstoque += produto.preco * produto.quantidade; /*valorEstoque recebe o valor de preço * quantidade, a cada loop atualiza o valor armazenado de acordo com os produtos.*/
        }

            console.log("<========================================| ESTOQUE |========================================>");
            console.log(`Valor total em estoque: ${valorEstoque.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}\n`);
            mostrarMenu();  
}

function verificarEstoque() {

    console.clear();
    console.log("\n<========================================| ESTOQUE BAIXO |========================================>");

        let encontrouProduto = false; /* Podendo também ser "encontrouProduto = 0" que significa a mesma coisa que "false" */

        if (cadastros.length === 0) {
            console.log("Nenhum produto encontrado!\n");
            mostrarMenu();
            return;
        }
        
        for (let i = 0; i < cadastros.length; i++) {
            
            if (cadastros[i].quantidade <= 5) {
                
                console.log(`Código: ${cadastros[i].codigo}`);
                console.log(`Nome: ${cadastros[i].nome}`);
                console.log(`Preço: ${cadastros[i].preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}`);
                console.log(`Quantidade: ${cadastros[i].quantidade}\n`);

                encontrouProduto = true; /* Utilizado para identificar que o produto foi encontrado. */
                /* Podendo também ser "encontrouProduto = 1" que significa a mesma coisa que "true" */
            }       
        }

        if (!encontrouProduto) { /* if só executa se a condição for "true", e "!" inverte o valor lógico, caso o produto seja encontrado a varíavel recebe "true", e com isso "!" inverte para false.*/
            console.log("Nenhum produto com estoque baixo!\n");
            mostrarMenu();
            return;
        }

        mostrarMenu();
}

function mostrarMenu(){

        console.log("\nSeja bem vindo(a) ao menu principal.");
        console.log("1 - Cadastrar produto.");
        console.log("2 - Listar produtos.");
        console.log("3 - Buscar produto.");
        console.log("4 - Atualizar quantidade.");
        console.log("5 - Remover produto.");
        console.log("6 - Valor total do estoque.");
        console.log("7 - Produtos com estoque baixo.");
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

            case 6:
                valorEstoque();
                break;

            case 7:
                verificarEstoque();
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
