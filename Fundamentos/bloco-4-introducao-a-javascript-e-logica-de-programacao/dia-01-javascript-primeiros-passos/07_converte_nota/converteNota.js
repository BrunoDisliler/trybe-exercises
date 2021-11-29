let nota = prompt('Digite sua nota: ');

if (nota > 100 || nota < 0){
  alert('Nota Inválida!')
} else if (nota >= 90){
  alert('A');
} else if( nota >= 80){
  alert('B');
} else if( nota >= 70){
  alert('C');
} else if( nota >= 60){
  alert('D');
} else if( nota >= 50){
  alert('E');
}else if( nota < 50){
  alert('F');
}