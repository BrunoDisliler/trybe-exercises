const readLine = require("readline-sync");

const script = readLine.question(
  "Digite qual script você quer executar:\n1 - Cálculo IMC\n2 - Velocidade Média\n3 - Sorteio\n\n"
);
if (script === "1") {
  const imc = require("./imc");
  imc();
}
if (script === "2") {
  const velocidade = require("./velocidade");
  velocidade();
}
if (script === "3") {
  const sorteio = require("./sorteio");
  sorteio();
}
