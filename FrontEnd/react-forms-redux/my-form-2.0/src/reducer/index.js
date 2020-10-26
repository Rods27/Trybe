const INITIAL_STATE = {
  nome: '',
  email: '',
  cpf: '',
  endereco: '',
  cidade: '',
  estado: '',
};

export function formsReducer( state= INITIAL_STATE, action) {  
  switch (action.type) {
    case 'ADD_ELEMENT':
      return {...state, action}
    default:
      return state;
  }
}

