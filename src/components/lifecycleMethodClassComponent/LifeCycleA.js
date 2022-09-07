import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

export class LifeCycleA extends Component {
    constructor(props) {
      super(props)
      console.log('LifeCycleA Constructor')
      this.state = {
         name:'Raju'
      }
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifeCycleA componentDidMount')
    }

    shouldComponentUpdate(){
      console.log('LifeCycleA shouldComponentUpdate')
      return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
      console.log('LifeCycleA getSnapshotBeforeUpdate')
      return null
    }

    componentDidUpdate(){
      console.log('LifeCycleA componentDidUpdate')
    }

    changeState=()=>{
      this.setState({
        name:'Deepak'
      })
    }

  render() {
    console.log('LifeCycleA render')
    return (
      <div>
        LifeCycle a
        <button onClick={this.changeState}>change State</button>
        <LifeCycleB/>
      </div>
    )
  }
}

export default LifeCycleA