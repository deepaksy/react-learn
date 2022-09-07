import React, { Component } from 'react'

export class Count extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    handleClick(){
        this.setState((prevState,props)=>({
            count:prevState.count+props.addValue
        }),()=>{
            console.log("setState Called!")
        })
    }
  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={()=>this.handleClick()}>Increment</button>
      </div>
    )
  }
}

export default Count