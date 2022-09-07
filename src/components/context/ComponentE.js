import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContext'

export class ComponentE extends Component {
  static contextType=UserContext
  render() {
    return (
      <div>
        <ComponentF/>
        component E context {this.context}
      </div>
    )
  }
}


export default ComponentE