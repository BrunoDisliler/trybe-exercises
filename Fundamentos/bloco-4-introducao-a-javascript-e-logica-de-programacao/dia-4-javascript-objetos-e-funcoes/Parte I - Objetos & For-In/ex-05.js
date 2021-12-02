let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
};

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
};

let array;

for (array in info){
  console.log(info[array]+" e ");
  console.log(info2.personagem);
  console.log(info2.origem);
  console.log(info2.nota);
}

if (info.recorrente[array] & info2.recorrente[array] === 'Sim'){
  console.log('Ambos recorrentes');
};
