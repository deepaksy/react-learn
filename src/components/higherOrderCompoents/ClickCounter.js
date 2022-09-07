import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'
export class ClickCounter extends Component {
  render() {
    const {count,handleClick}=this.props
    return (
      <button onClick={handleClick}>Clicked {count} times</button>
    )
  }
}

export default UpdatedComponent(ClickCounter)