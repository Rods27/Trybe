import React, { Component } from 'react'

class EstadoFavorito extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label>
      <p>Diga qual o seu Estado favorito! De React ou do Brasil, você quem sabe!</p>
        <textarea name="estadoFavorito" value={value} onChange={handleChange} rows="2" cols="21" />
      </label>
    )
  }
}

export default EstadoFavorito