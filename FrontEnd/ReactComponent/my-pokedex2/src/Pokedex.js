import React from 'react'

class Pokedex extends React.Component {

  render() {
    const { name, type, averageWeight, image } = this.props
    const { measurementUnit, value } = averageWeight
    return (
      <div className="central-div">
        <div className= "pokemon-card">
          <div className= "text-div">
            <div>
              <p>{name}</p>
            </div>
            <div>
              <p>{type}</p>
            </div>
            <div>
              <p>{value} {measurementUnit}</p>
            </div>
          </div>
          <div className="img-div">
            <div className="img">
              <img src={image}></img>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Pokedex;