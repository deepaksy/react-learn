import React,{useState,useEffect} from 'react'
import axios from 'axios'

const DataFetching = () => {
    const [post,setPost]=useState({})
    const [id,setId]=useState(0)
    const [idFromButtonClick,setIdFromButtonClick]=useState(1)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/'+idFromButtonClick)
        .then(res=>{
            setPost(res.data)
            console.log(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[idFromButtonClick,id])

    const handleClick = ()=>{
        setIdFromButtonClick(id)
    }
  return (
    <div>
        <input type={'number'} value={id} onChange={e=>setId(e.target.value)}/>
        <button type='button' onClick={handleClick}>fetch</button>
        {/* <ul>
            {
                posts.map((post,i)=>{
                    return <li key={post.id}>{post.title}</li>
                })
            }
        </ul> */}
        <div>Title: {post.title}
            <br/>
            Message: {post.body}
        </div>
    </div>
  )
}

export default DataFetching