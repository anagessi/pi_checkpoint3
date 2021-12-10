const alunos = require('./parte1');

alunos.addAluno('João', 2, [8,8,7]);
alunos.addAluno('Matheus', 3, [10,9,10]);
alunos.addAluno('Igor', 3, [2,1,3]);
alunos.addAluno('Talita', 3, [10,10,10]);

//console.log(alunos.listaEstudantes);

module.exports = alunos.listaEstudantes;