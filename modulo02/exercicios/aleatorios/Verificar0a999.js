let somaPar = 0;
let somaImpar = 0;
let qntPar = 0;
let qntImpar = 0;
for (let i = 0; i <= 999; i++) {
  if (i % 2 === 0) {
    console.log(`${i} e par`);
    somaPar += i;
    qntPar++;
  } else {
    console.log(`${i} e impar`);
    somaImpar += i;
    qntImpar++;
  }
}

console.log(`Total Par: ${somaPar}\nTotal Impar: ${somaImpar}`);

let mediaPar = somaPar / qntPar;
let mediaImpar = somaImpar / qntImpar;

if (mediaPar > mediaImpar) {
  console.log(`\nA media par foi maior com: ${mediaPar}`);
} else {
  console.log(`\nA media impar foi maior com ${mediaImpar}`);
}
