import PromptSync from "prompt-sync";
const teclado = PromptSync();

const turbina = {
  lado: "motor esquerdo",
  status: "desligado",
  sensores: [
    {
      temperatura: 0,
      pressao: 0,
      combustivel: 33
    }
  ]
}

let temperaturaNova = parseInt(teclado("informe a temperatura: ºC "));
let pressaoNova = parseInt(teclado("informe a pressao: PSI "));
let combustivelNova = parseInt(teclado("informe nivel de combustivel: %"));

// turbina.sensores.pop();
turbina.sensores[0]=({
  temperatura: temperaturaNova,
  pressao: pressaoNova,
  combustivel: combustivelNova
});


if (turbina.sensores[0].combustivel > 20 && turbina.sensores[0].pressao > 50 && turbina.sensores[0].temperatura >= 20 && turbina.sensores[0].temperatura <= 90) {
  turbina.status = "ligado";

} else {
  turbina.status = "Falha Critica";
  turbina.bloqueioAtivado = true;

}
console.log(turbina);