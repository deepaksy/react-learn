import React, { Component } from 'react'
import axios from 'axios'
class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[],
         error:''
      }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            this.setState({
                posts:res.data
            })
        })
        .catch(e=>{console.log(e)
        this.setState({
            error:'Error retriving data'
        })})
    }
  render() {
    const {posts}=this.state
    return (
      <div>
        List of Posts
        {posts.length?
        posts.map(post=><div key={post.id}>{post.title}</div>):null}
      </div>
    )
  }
}

export default PostList