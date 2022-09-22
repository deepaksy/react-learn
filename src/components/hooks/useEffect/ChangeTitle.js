import React, { useEffect, useState } from 'react'

const ChangeTitle = () => {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        console.log('useEffect - Updating document title')
        document.title=`Clicked ${count} times`
    },[count])

    const [name,setName]=useState('')
    return(
        <div>
            <input type={'text'} value={name} onChange={e=>setName(e.target.value)}/>
            <button onClick={()=>setCount(prev=>prev+1)}>Clicked {count} times</button>
        </div>
    )
}

export default ChangeTitle