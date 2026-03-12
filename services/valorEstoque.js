function valorEstoque(cadastros, mostrarMenu) {
    
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

            console.log("<========================================| VALOR TOTAL DO ESTOQUE |========================================>");
            console.log(`Valor total em estoque: ${valorEstoque.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}\n`);
            mostrarMenu();  
}

module.exports = valorEstoque; /* Fazendo exportação da função para que seja importada pelo "require" no index.js */