import React, { Component } from 'react'
import EstadoFavorito from './EstadoFavorito'

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: '',
      estadoFavorito: '',
      idade: '',
      nome: '',
      vaiComparecer: false
    };
  }


  handleChange({ target }) {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <h2>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h2>
        <form className="form">
          <fieldset>
            <EstadoFavorito value={this.state.estadoFavorito} handleChange={this.handleChange} />
            <label>
            <p>Email</p>
              <input name="email" type="email" value={this.state.email} onChange={this.handleChange} />
            </label>
            
            <label>
            <p>Nome</p>
              <input name="nome" type="nome" value={this.state.nome} onChange={this.handleChange} />
            </label>
            <label>
              <p>Idade</p>
            <input type="number" name="idade" value={this.state.idade} onChange={this.handleChange} />
            </label>
            <label>
              <p>Vai comparecer?</p>
              <input type="checkbox" name="vaiComparecer" value={this.state.vaiComparecer} onChange={this.handleChange}/>
            </label>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;