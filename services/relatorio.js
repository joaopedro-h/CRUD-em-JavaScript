function relatorio(cadastros, mostrarMenu) {
    
    console.clear();
    let valorEstoque = 0;
    let estoqueBaixo = 0;
    let maiorValorEncontrado = 0;
    let valorProduto = 0 ;
    let nomeMaiorProduto;
    let valorUnidade = 0;

       if (cadastros.length === 0) {
            console.log("Nenhum produto encontrado!\n");
            mostrarMenu();
            return;
        }

        for (let i = 0; i < cadastros.length; i++) {
            
            const produto = cadastros[i];

            valorEstoque += produto.preco * produto.quantidade; /* Variável utilizada para fazer o calculo de cada produto e sendo atribuido nela mesmo a cada loop pelo += */
            
            if (produto.quantidade <= 5) { /* If utilizado para contabilizar cada produto em estoque baixo. */
                estoqueBaixo += 1;
            }

            valorProduto = produto.preco * produto.quantidade; /* Variável que vai receber o valor do cálculo de cada produto durante o loop. */

            if (valorProduto > maiorValorEncontrado) { /* "maiorValorEncontrado" foi utilizada para armazenar o novo valor do cálculo SE for maior que do que o valor atual. */

                maiorValorEncontrado = valorProduto; /* Se o "valorProduto" for maior que "maiorValorEncontrado" ele recebe o novo maior valor. */
                valorUnidade = produto.preco;
                nomeMaiorProduto = produto.nome; /* Variável utilizada para armazenar o nome do maior produto encontrado. */
                     
            } 
        }
        
        console.log("<========================================| RELATÓRIO |========================================>");
        console.log(`Total de produtos cadastrados: ${cadastros.length}`);
        console.log(`Valor total do estoque: ${valorEstoque.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}`);
        console.log(`Quantidade de produtos em estoque baixo: ${estoqueBaixo}`);
        console.log(`Produto com maior valor em estoque: ${nomeMaiorProduto}  (Unidade: ${valorUnidade.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})})\n`);
        
        mostrarMenu();        
}

module.exports = relatorio; /* Fazendo exportação da função para que seja importada pelo "require" no index.js */