function sair(rl) {
    console.log("\nEncerrando sistema...");
    rl.close();
}

module.exports = sair; /* Fazendo exportação da função para que seja importada pelo "require" no index.js */