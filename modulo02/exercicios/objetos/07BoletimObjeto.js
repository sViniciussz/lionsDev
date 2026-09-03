const aluno ={
  nome: "",
  nota1: null,
  nota2: null,
};

let aluno1 = aluno;
aluno1.nome = "pedro";
aluno1.nota1 = 8;
aluno1.nota2 = 7;

aluno.media = (aluno.nota1+aluno.nota2)/2;



console.log(("Aluno: " + aluno1.nome + " |  Media: " + aluno1.media));


