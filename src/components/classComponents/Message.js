import React,{Component} from 'react'

class Message extends Component{
    constructor(){
        super()
        this.state={
            message:'Welcome Visitor'
        }
    }

    handleClick(){
        this.setState({
            message:'Thanks for Subscribing!'
        })
    }
    render(){
        return(
            <React.Fragment>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.handleClick()}>Subscribe</button>
            </React.Fragment>
        )
    }
}


export default Message