import React, { Component } from 'react'
import ChildComponet from './ChildComponet'

export class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:'Parent'
      }
      this.greetParent=this.greetParent.bind(this)
    }

    greetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
  render() {
    return (
      <div>
        <ChildComponet clickHandler={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent