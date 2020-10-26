import './App.css';
import React from 'react'
import Estado from './Estado'
import { connect } from 'react-redux'
import { addElement } from './actions'
import store from './store';

class App extends React.Component {
  constructor() {
    super();
    const { nome, email, cpf, endereco, cidade, estado } = this.props;
    this.state = {
      nome,
      email,
      cpf,
      endereco,
      cidade,
      estado,
    };
  }


  render() {
    const { form } = this.props;
    console.log(store)
    return (
      <div className='container'>
        <h1>Formulario Padrão</h1>
        <form>
          <fieldset>
            <label>
              <p>Nome</p>
              <input maxLength="40" name="nome" required="required" value={this.state.nome.toUpperCase()} onChange={form}/>
            </label>
            <label>
            <p>Email</p>
              <input maxLength="50" name="email"  required="required" value={this.state.email} onChange={form}/>
            </label>
            <label>
              <p>CPF</p>
              <input maxLength="11" name="cpf" required="required" value={this.state.cpf} onChange={form}/>
            </label>
            <label>
              <p>Endereço</p>
              <input maxLength="200" name="endereco" required="required" value={this.state.endereco} onChange={form}/>
            </label>
            <label>
              <p>Cidade</p>
              <input maxLength="28" name="cidade" required="required" value={this.state.cidade} onChange={form}/>
            </label>
            <Estado value={this.state.estado} handleChange={form}/>
          </fieldset>
          <fieldset>
            <label>
              <p>Resumo do currículo</p>
              <textarea name ="curriculo"required="required" maxLength="1000" rows="6" cols="80" onChange={form}></textarea>
            </label>
            <label>
              <p>Ultimo Cargo</p>
              <textarea name ="cargo"required="required" maxLength="500" rows="6" cols="80" onChange={form}></textarea>
            </label>
            <label>
              <p>Descrição do Cargo</p>
              <textarea name ="descricao"required="required" maxLength="500" rows="6" cols="60" onChange={form}></textarea>
            </label>
          </fieldset>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  nome: state.formsReducer.nome,
  email: state.formsReducer.email,
  cpf: state.formsReducer.cpf,
  endereco: state.formsReducer.endereco,
  cidade: state.formsReducer.cidade,
  estado: state.formsReducer.estado,
});

const mapDispatchToProps = dispatch => ({
  form: ({target}) => dispatch(addElement(target))
});


export default connect(mapStateToProps, mapDispatchToProps)(App);

