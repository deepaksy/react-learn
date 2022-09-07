import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comments:''
      }
    }
  render() {
    return (
      <form onSubmit={(e)=>{e.preventDefault()
        console.log(this.state.username)
        console.log(this.state.comments)
      }}>
        <div>
            <label htmlFor='username'>Username</label>
            <input type={'text'} value={this.state.username} onChange={(e)=>this.setState({username:e.target.value})}/>
            <label>Comment</label>
            <textarea value={this.state.comments} onChange={(e)=>this.setState({comments:e.target.value})}/>
            <input type={'submit'}/>
        </div>
      </form>
    )
  }
}

export default Form