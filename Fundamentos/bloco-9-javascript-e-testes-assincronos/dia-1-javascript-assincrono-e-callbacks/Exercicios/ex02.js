// 2 - Agora, dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?

const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
  value: 227900000,
  measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
  value: 108200000,
  measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
  value: 778500000,
  measurementUnit: "kilometers",
  },
};

console.log(planetDistanceFromSun(mars)); // A
setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B
setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C

/* 
O primeiro a ser executado será o A, pois não há nenhuma condição que diga ao contrário.
O segundo a ser executado será o C, pois o B tem uma função que pede para aguardar 3000 milisegundos, 
enquanto que a B são 2000 milisegundos.
*/