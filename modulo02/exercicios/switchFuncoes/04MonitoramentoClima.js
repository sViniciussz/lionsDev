import PromptSync from "prompt-sync";
const teclado = PromptSync();

const avaliarTemperaturas = (array) => {
  let media;
  let soma = 0;

  for (let i = 0; i <= 2; i++) {
    soma += array[i];
  }

  media = soma / array.length

  switch (true) {
    case (media > 30):
      console.log("Alerta de aquecimento");
    default:
      console.log("Clima estavel");
      break;

  }

}

let minhaArray = [];

for (let i = 1; i <= 3; i++) {
  let num = parseFloat(teclado("Informe o numero " + i + ": "));
  minhaArray.push(num);

}

avaliarTemperaturas(minhaArray);