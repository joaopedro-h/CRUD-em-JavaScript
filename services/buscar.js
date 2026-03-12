function buscar(cadastros, rl, mostrarMenu){
    
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

module.exports = buscar; /* Fazendo exportação da função para que seja importada pelo "require" no index.js */