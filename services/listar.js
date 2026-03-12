function listar(cadastros, mostrarMenu){

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

module.exports = listar; /* Fazendo exportação da função para que seja importada pelo "require" no index.js */