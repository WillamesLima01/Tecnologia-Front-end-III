class Pessoa {
    constructor(nome, idade, profissao){
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao
    }

    exibirInfo(){
        console.log(`nome: ${this.nome}, Idade: ${this.idade}, Profissao: ${this.profissao}`);
    }    
}

const pessoa = new Pessoa('José', 37, 'Dev');

pessoa.exibirInfo();