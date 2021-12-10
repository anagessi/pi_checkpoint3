const alunos = require('./estudantes');

class Curso {
    constructor(nomeCurso, notaAprovacao, maxFaltas, listaEstudantes) {
        this.nomeCurso = nomeCurso;
        this.notaAprovacao = notaAprovacao;
        this.maxFaltas = maxFaltas;
        this.listaEstudantes = listaEstudantes; 
    }

    addAluno (nome, qtdeFaltas, notas) {
        alunos.push({
            nome: nome,
            qtdeFaltas: qtdeFaltas,
            notas: notas
        });
    }

    situacao () {
        alunos.forEach ( estudante => {

            let soma;
            let media;

            const calcularMedia = () => {
                soma = 0;
                estudante.notas.forEach (nota => {
                    soma = estudante.notas.reduce((total, numero) => total + numero);
                    media = soma / estudante.notas.length;
                });

            return media;
            }

            if(calcularMedia() >= this.notaAprovacao && estudante.qtdeFaltas <= this.maxFaltas || estudante.qtdeFaltas === this.maxFaltas && calcularMedia() >= this.notaAprovacao * 1.1) {
                console.log(`${estudante.nome} está aprovado`);
            }

            else {
                console.log(`${estudante.nome} está reprovado`);
            }

        });
    }
} 


const curso = new Curso ('DH', 8, 2, alunos);

curso.addAluno('Danilo', 0, [3,8,10]);

console.log(alunos);

curso.situacao();