import React, { useEffect, useState } from 'react'
import axios from 'axios'
const DataFetchingState = () => {
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState('')
    const [post,setPost]=useState({})

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res=>{
            console.log(res.data)
            setLoading(false)
            setPost(res.data)
            setError('')
        })
        .catch(e=>{
            setLoading(false)
            setPost({})
            setError('Something went Wrong!')
        })
    },[])
  return (
    <div>
        {loading?'Loading':post.title}
        {error?error:null}
    </div>
  )
}

export default DataFetchingState