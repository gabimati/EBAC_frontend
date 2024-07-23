// Array de objetos representando os alunos
const alunos = [
    { nome: 'Mario', nota: 5 },
    { nome: 'Luana', nota: 8 },
    { nome: 'Gustavo', nota: 7 },
    { nome: 'Julia', nota: 3 },
    { nome: 'João', nota: 9 },
];

// Filtrando alunos com nota maior ou igual a 7
function aprovados(arrayAlunos) {
    return arrayAlunos.filter(aluno => aluno.nota >= 7);
}

// Obtendo os alunos aprovados
const aprovadosArray = aprovados(alunos);

// Resultado dos alunos aprovados
console.log('Aprovados:');
console.log(aprovadosArray);