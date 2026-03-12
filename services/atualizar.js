function atualizar(cadastros, rl, salvarDados, mostrarMenu){

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
                        salvarDados();

                        console.log("Alteração feita com sucesso!");
                        console.log(`Quantidade atual: ${novaQuantidade}`);
                        
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
                        salvarDados();

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

module.exports = atualizar; /* Fazendo exportação da função para que seja importada pelo "require" no index.js */
