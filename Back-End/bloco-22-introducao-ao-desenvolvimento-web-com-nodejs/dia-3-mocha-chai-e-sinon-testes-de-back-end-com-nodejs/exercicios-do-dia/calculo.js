const calculo = (num) => {
    if (num > 0) {
      return 'positivo';
    };
    if (num < 0) {
      return 'negativo';
    }
    if (num === 0) { 
      return 'neutro';
    }
    if (typeof num !== 'Number' ) {
      return 'O valor deve ser um número';
    }
};

module.exports = calculo;
