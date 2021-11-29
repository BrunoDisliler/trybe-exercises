let salario = prompt('Digite seu salario bruto: R$');

let inss;
let ir;

if (salario <= '1.556.94'){
  inss = (salario * 8) / 100;
} else if (salario >= '1.556.95' || salario <= '2.594.92'){
  inss = (salario * 9) / 100;
} else if (salario >= '2.594.93' || salario <= '5.189.82'){
  inss = (salario * 11) / 100;
} else if (salario >= '5.189.82'){
  inss = salario - 570.88
}

if (salario <= '1.903.98'){
  console.log('Isento de IR');
} else if (salario >= '1.903.99' || salario <= '2.826.65'){
  ir = ((salario * 7.5) / 100 ) - 142.80;
} else if (salario >= '2.826.66' || salario <= '3.751.05'){
  ir = ((salario * 15) / 100) - 354.80;
} else if (salario >= '3.751.06' || salario <= '4.664.68'){
  ir = ((salario * 22,5) / 100) - 636.13;
} else if (salario > '4.664.68'){
  ir = ((salario * 27.5) / 100) - 869.36;
}
