import React, { Component } from 'react'

class Home extends Component {
  state = {
    homeName: 'Manzar'
  }
  render() {
    return (
      <div>
        <h2>I am a Home page!</h2>
        <button onClick={()=> this.props.handleNameChild(this.state.homeName)}>Change name</button>
      </div>
    )
  }
}

export default Home