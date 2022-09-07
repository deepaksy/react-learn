import React, { Component } from 'react'
import MemoComp from './MemoComp'

export class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Deepak'
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Deepak'
            })
        },2000)
    }
  render() {
    return (
      <div>
        <MemoComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComponent