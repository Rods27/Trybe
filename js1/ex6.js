var xadrez = prompt("Qual a peça de xadrez?").toLowerCase();

switch (xadrez){
  case 'peao':
  console.log('1 casa pra frente')
  break;

  case 'torre':
    console.log('horizontal')
    break;

  case 'cavalo':
    console.log('se move em L')
    break;

  case 'bispo':
    console.log('diagonal')
    break;

  case 'rainha':
  console.log('diagonal ou horizontal')
  break;

  case 'rei':
  console.log('1 casa para qualquer lado')
  break;

  default: 
  console.log('Erro')
}


