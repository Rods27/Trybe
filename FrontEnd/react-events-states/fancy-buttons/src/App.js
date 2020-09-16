import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      numeroDeCliques: 0
    }
  }

  handleClick () {
    const button = document.querySelector('button').style
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }),
    () => {
      if(this.state.numeroDeCliques % 2 === 0) {
        button.background = 'green'
        console.log(button.background)
      }
    }
    )
  }

  render() {
    console.log(this)
  return <button className="button" onClick={this.blabla}>{this.state.numeroDeCliques}</button>
  }
}

export default App;
