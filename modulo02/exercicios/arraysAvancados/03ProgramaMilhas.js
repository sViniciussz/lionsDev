import PromptSync from "prompt-sync";
const teclado = PromptSync();

const perfilFidelidade = {
  nome: "douglas silveira",
  historicoViagens: [
    {
      destino: "Xique-Xique - BA",
      qntMilhas: 120
    },
    {
      destino: "Luxenburgo - SJ",
      qntMilhas: 200
    }
  ]

}

let localVoo = teclado("Informe para onde eh o seu Voo: ");
let milhasVoo = parseInt(teclado("Informe quantas milhas: "));

console.table(perfilFidelidade.historicoViagens);

//console.log(perfilFidelidade.totalMilhas);


perfilFidelidade.historicoViagens.push({
  destino: localVoo,
  qntMilhas: milhasVoo
});

perfilFidelidade.totalMilhas = 0;
for (let i = 0; i < perfilFidelidade.historicoViagens.length; i++) {
  perfilFidelidade.totalMilhas += perfilFidelidade.historicoViagens[i].qntMilhas;
}

if (perfilFidelidade.totalMilhas > 50000) {
  perfilFidelidade.totalMilhas -= 5000;
  perfilFidelidade.categoria = "platinium";
  console.log("Parabes voce eh platinium\n");
} else {
  perfilFidelidade.categoria = "gold";
  let qntFalta = 50000 - perfilFidelidade.totalMilhas;
  console.log("Faltam ", qntFalta, " mil milhas para Categoria Platinium!\n");

}

console.log(perfilFidelidade);




