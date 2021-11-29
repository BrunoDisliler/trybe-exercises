const valorCusto = 150;
const valorVenda = 400;

let impostoSobreOCusto = (20 * valorCusto) / 100;
let valorCustoTotal = valorCusto + impostoSobreOCusto;
let lucro = valorVenda - valorCustoTotal

console.log("O Lucro que a empresa terá ao vender este produto será de: R$" + lucro + ".00");