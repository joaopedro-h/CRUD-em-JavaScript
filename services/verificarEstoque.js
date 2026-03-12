function verificarEstoque(cadastros, mostrarMenu) {

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

module.exports = verificarEstoque; /* Fazendo exportação da função para que seja importada pelo "require" no index.js */