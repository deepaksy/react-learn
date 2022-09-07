import React, { Component } from 'react'

export class ClickCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    handleClick = ()=>{
        this.setState(prev=>{
            return({
                count:prev.count+1
            })
        })
    }
  render() {
    return (
      <button onClick={this.handleClick}>Clicked {this.state.count} times</button>
    )
  }
}

export default ClickCounter