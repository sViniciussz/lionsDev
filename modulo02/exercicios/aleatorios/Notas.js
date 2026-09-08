import PromptSync from "prompt-sync";
const teclado = PromptSync();

let notaP1= parseFloat(teclado("Informe a nota 1: "));
let notaP2= parseFloat(teclado("Informe a nota 2: "));

let notas =[];
notas.push(notaP1, notaP2);
// notas.unshift(notaP1, notaP2);

let media = (notas[0]+notas[1]) / notas.length;
console.log(`A media da nota ${notaP1} e ${notaP2} = ${media.toFixed(2)}`);
