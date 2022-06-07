const firstExercise = (param1, param2, param3) => {
  const promise = new Promise((resolve, reject) => {
    if (param1 === isNaN || param2 === isNaN || param3 === isNaN) {
      reject(new Error("Informe apenas números"))
    }
    else if (param1 !== isNaN && param2 !== isNaN && param3 !== isNaN) {
      const sum = ((param1 + param2) * param3)
      if (sum < 50) {
        reject(new Error("Valor muito baixo"))
      } else if (sum > 50) {
        resolve(sum)
      }
    }
  });
  return promise;
}

firstExercise(10, 10, 10)
  .then(result => console.log(`Resultado: ${result}`))
  .catch(err => console.log(`Erro: ${err.message}`))