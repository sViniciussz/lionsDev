import promptSync from 'prompt-sync';
const teclado = promptSync();

const atleta = {
  nome: "Carlos Silva",
  pesoAtual: 85.0,
  meta: "Performance", //Performance ou Emagrecimento
  distancias: [42.1, 42.2, 41.5],
  selos: []
};

let distHoje = parseFloat(teclado("informe a distancia corrida hoje: "));
atleta.distancias.push(distHoje);

let guardarPrimeira = atleta.distancias.shift();
//console.table(guardarPrimeira);
//console.table(atleta.distancias);

let soma = 0;
for (let i = 0; i < 3; i++) {
  soma += atleta.distancias[i];
}
//console.log(soma);
//console.log(atleta.distancias.length);

let kmMediaCorredor = soma / atleta.distancias.length
console.log(kmMediaCorredor);

if (kmMediaCorredor > 20 && atleta.meta === "Emagrecimento") {
  atleta.pesoAtual--;
  atleta.selos.unshift("Meta Atingida");
} else if (atleta.meta === "Performance" && distHoje > atleta.distancias[atleta.distancias.length - 2]) {
  atleta.selos.unshift("Novo recorde pessoal");

}
console.log(atleta);




