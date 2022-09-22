import React, { useState } from 'react'

function HookCounterThree() {
    const [items,setItems]=useState([])

    const addItem = ()=>{
        setItems([
            ...items,
            {
                id:items.length,
                value:Math.floor(Math.random()*10)+1
            }
        ])
    }
  return (
    <div>
        <button onClick={addItem}>Add a number</button>
        <ul>
        {items.map((item,i)=>{
            return <li key={i}>{item.value}</li>
        })}
        </ul>
    </div>
  )
}

export default HookCounterThree