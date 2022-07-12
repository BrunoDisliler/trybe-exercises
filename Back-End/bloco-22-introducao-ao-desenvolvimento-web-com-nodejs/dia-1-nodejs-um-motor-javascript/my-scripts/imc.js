const ALTURA = 180
const PESO = 90

const calcImc = () => {
  const alturaMetros = ALTURA / 100
  const alturaQuadrado = alturaMetros ** 2
  const imc = PESO / (alturaQuadrado)

  console.log(`IMC: ${imc.toFixed(2)}kg/m2`) 
}

calcImc();