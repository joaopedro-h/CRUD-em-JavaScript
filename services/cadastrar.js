const Produto = require("../models/Produto"); /* Importando a classe Produto para poder criar novos objetos de produto */

function cadastrar(cadastros, rl, salvarDados, mostrarMenu){

        console.clear();
        console.log("\n< Informe os dados do produto >");
                    
        rl.question("Código do produto: ", (codigo) => { /* rl.question utilizado para perguntar ao usuário e guardar o valor em memória, ex : codigo, e assim por diante. */

            for (let i = 0; i < cadastros.length; i++) { /* for usado para buscar se já existe produto cadastrado com o mesmo código. */
                        
                if (codigo == cadastros[i].codigo) {
                    console.log("\nProduto com código já existente!\n");
                    mostrarMenu();
                    return;
                }
            }

            rl.question("Nome do produto: ", (nome) => {

                for (let i = 0; i < cadastros.length; i++) { /* for usado para buscar se já existe produto cadastrado com o mesmo nome. */
                                
                    if ( nome  === cadastros[i].nome ) {
                        console.log("\nProduto já cadastrado!\n");
                        mostrarMenu();
                        return;          
                    }  
                }

                rl.question("Preço do produto: ", (preco) => {

                    if (preco <= 0) {  /* If criado para impossibilitar cadastrar produtos com valor zerado ou negativo. */
                        console.log("\nValor inválido!");
                        mostrarMenu();
                        return;                      
                    }

                    rl.question("Quantidade do produto: ", (quantidade) =>{ /* If criado para impossibilitar cadastrar produtos com quantidade zerada ou negativa. */

                        if (quantidade <= 0) {
                            console.log("\nQuantidade inválida!\n");
                            mostrarMenu();
                            return;
                        }
                                
                        const produto = new Produto ( /* Aqui foi criado uma váriavel produto, aonde irá armazenar o novo objeto criado, 'produto' irá receber as propiedades de 'new Produto' */
                            Number(codigo),
                            nome,
                            Number(preco),
                            Number(quantidade)
                        );

                        cadastros.push(produto); /* Aqui foi adicionado o 'produto' aos cadastros via push (semelhente ao total++;) */
                        salvarDados();
                        console.clear();
                        console.log("Cadastrado com sucesso!\n\n");
                        mostrarMenu(); /* mostrarMenu(); é utilizado para poder voltar ao menu inicial, semelhante ao return; */
                            
                    });

                });

            });

        });
}

module.exports = cadastrar; /* Fazendo exportação da função para que seja importada pelo "require" no index.js */