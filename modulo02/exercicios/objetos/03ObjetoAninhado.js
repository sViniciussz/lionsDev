const carro = {
  modelo: "uno",
  motor: { 
    combustivel: "flex", 
    potencia: 120 
  },
  opcionais: ["ar", "trava", "vidro"],
};

console.log(`combustivel do motor do ${carro.modelo} eh: ${carro.motor.combustivel}\n`);
console.log(`Com opcional de: ${carro.opcionais[1]}`);


