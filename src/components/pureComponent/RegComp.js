import React, { Component } from 'react'

class RegComp extends Component {
  render(props) {
    console.log('Regular component')
    return (
      <div>Regular Component {this.props.name}</div>
    )
  }
}

export default RegComp