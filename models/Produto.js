class Produto {   /* Foi criado a classe e as propiedades do produto. */
  constructor(codigo,nome,preco,quantidade) {
      this.codigo = codigo;
      this.nome = nome;     
      this.preco = preco;
      this.quantidade = quantidade;
  }
}  

module.exports = Produto; /* Fazendo exportação da classe para que seja importada pelo "require" no cadastrar.js */