   const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

function containsA() {
  return names.reduce((accumulator, currentValue) =>
    accumulator + currentValue.split('')
    .reduce((contador, atual) => {
      if (atual === 'a' || atual === 'A') return contador + 1;
      return contador
    },0),0)
}
console.log(containsA())
assert.deepEqual(containsA(), 20);