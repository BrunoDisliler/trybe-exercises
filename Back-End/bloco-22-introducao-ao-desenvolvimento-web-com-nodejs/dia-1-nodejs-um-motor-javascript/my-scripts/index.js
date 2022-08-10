const readLine = require("readline-sync");

const script = readLine.question(
  "Digite qual script você quer executar:\n1 - Cálculo IMC\n2 - Velocidade Média\n3 - Sorteio\n4 - Fatorial\n5 - Fibonacci\n\n"
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
if (script === "4") {
  const fatorial = require("./fatorial");
  fatorial();
}
if (script === "5") {
  const fibonacci = require("./fibonacci");
  main();
}
