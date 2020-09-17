import React from 'react';

class Estado extends React.Component {
  
  render() {
    const estados = ['AC','AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT','MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
    const { value, handleChange } = this.props;
    return (
    <label>
      <p>Estado</p>
      <select name="estado" value={value} onChange={handleChange} >
        <option value="" selected="selected">Selecione</option>
        {estados.map(estado => <option>{estado}</option> )}
      </select>
    </label>
    )
  }
}

export default Estado