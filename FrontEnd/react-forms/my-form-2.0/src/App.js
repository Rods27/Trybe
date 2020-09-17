import './App.css';
import React from 'react'
import Estado from './Estado'
class App extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      nome : '',
      email : '',
      cpf : '',
      endereco : '',
      cidade : '',
      estado : '',
    };
  }

  handleChange({ target }) {
    const { name, value } = target
    this.setState({
      [name] : value
    })
  }

  render() {
    return (
      <div className='container'>
        <h1>Formulario Padrão</h1>
        <form>
          <fieldset>
            <label>
              <p>Nome</p>
              <input maxLength="40" name="nome" required="required" value={this.state.nome.toUpperCase()} onChange={this.handleChange}/>
            </label>
            <label>
            <p>Email</p>
              <input maxLength="50" name="email"  required="required" value={this.state.email} onChange={this.handleChange}/>
            </label>
            <label>
              <p>CPF</p>
              <input maxLength="11" name="cpf" required="required" value={this.state.cpf} onChange={this.handleChange}/>
            </label>
            <label>
              <p>Endereço</p>
              <input maxLength="200" name="endereco" required="required" value={this.state.endereco} onChange={this.handleChange}/>
            </label>
            <label>
              <p>Cidade</p>
              <input maxLength="28" name="cidade" required="required" value={this.state.cidade} onChange={this.handleChange}/>
            </label>
            <Estado value={this.state.estado} handleChange={this.handleChange}/>
          </fieldset>
          <fieldset>
            <label>
              <p>Resumo do currículo</p>
              <textarea name ="curriculo"required="required" maxLength="1000" rows="6" cols="80" onChange={this.handleChange}></textarea>
            </label>
            <label>
              <p>Ultimo Cargo</p>
              <textarea name ="cargo"required="required" maxLength="500" rows="6" cols="80" onChange={this.handleChange}></textarea>
            </label>
            <label>
              <p>Descrição do Cargo</p>
              <textarea name ="descricao"required="required" maxLength="500" rows="6" cols="60" onChange={this.handleChange}></textarea>
            </label>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default App;
