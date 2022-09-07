import React, { Component } from 'react'

 class RefsDemo extends Component {
    constructor(props) {
      super(props)
      this.inputRef=React.createRef()
    }
    componentDidMount(){
        this.inputRef.current.focus()
    }
    clickHandler= ()=>{
        alert(this.inputRef.current.value)
    }
  render() {
    return (
      <div>
        <form onSubmit={(e)=>e.preventDefault()}>
        <input type='text' ref={this.inputRef}/>
        <button type='submit' onClick={this.clickHandler}>Submit</button>
        </form>
      </div>
    )
  }
}

export default RefsDemo