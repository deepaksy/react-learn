import React, { useEffect, useState } from 'react'

const IntervalCounter = () => {
    const [count,setCount]=useState(0)
    const tick = ()=>{
        setCount(prev=>prev+1);
    }
    useEffect(()=>{
       const interval= setInterval(tick,1000)
       return ()=>{
        clearInterval(interval)
       }
    },[count])
  return (
    <div>
        {count}
    </div>
  )
}

export default IntervalCounter