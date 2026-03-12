function remover(cadastros, rl, salvarDados, mostrarMenu){

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
                        salvarDados();
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
                        salvarDados();
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

module.exports = remover; /* Fazendo exportação da função para que seja importada pelo "require" no index.js */