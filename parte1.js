class Aluno {
    listaEstudantes = [];

    constructor(nome, qtdeFaltas, notas) {
        this.nome = nome;
        this.qtdeFaltas = qtdeFaltas;
        this.notas = notas;
    }

    addAluno (nome, qtdeFaltas, notas) {
        this.listaEstudantes.push({
            nome: nome,
            qtdeFaltas: qtdeFaltas,
            notas: notas
        })
    }

    calcularMedia() {
        let soma;
        let media;
        this.listaEstudantes.forEach ( estudante => {
            soma = 0;
            estudante.notas.forEach (nota => { 
                soma = estudante.notas.reduce((total, numero) => total + numero);
                media = soma/estudante.notas.length;
            });
            console.log(media);
        });
        
    }
    
    addfaltas() { 
        this.listaEstudantes.forEach(estudante => {
        estudante.qtdeFaltas = estudante.qtdeFaltas + 1;
        console.log (estudante.qtdeFaltas);
        });
    }
}

const aluno = new Aluno();
aluno.addAluno('Ana', 1, [10,8,9]);
aluno.addAluno('Maria', 2, [9,9.5,8.5]);

//console.log(aluno.listaEstudantes);

//console.log(aluno);

//aluno.calcularMedia();

//aluno.addfaltas();

module.exports = aluno;