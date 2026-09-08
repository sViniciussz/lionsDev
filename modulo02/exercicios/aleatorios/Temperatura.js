let temperaturaAgua = 90;

while (temperaturaAgua <= 100) {
  if (temperaturaAgua <= 98) {
    console.log(`A temperatura esta em ${temperaturaAgua}°C. Aquecendo...\n`);
  } else {
    console.log(`A temperatura esta em ${temperaturaAgua}°C.`);
  }
  temperaturaAgua += 2;
}