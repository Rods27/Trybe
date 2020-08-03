const list = document.querySelector('select');
const estados = ['AC','AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT','MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
for (const key in estados) {
  const listItem = document.createElement('option');
  listItem.innerText = estados[key];
  list.appendChild(listItem);
}