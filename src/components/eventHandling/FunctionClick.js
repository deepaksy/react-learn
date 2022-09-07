import React from 'react'

const FunctionClick = () => {
    const handleClick = ()=>{
        console.log('Button Clicked')
    }
  return (
    <React.Fragment>
        <button onClick={handleClick}>Click</button>
    </React.Fragment>
  )
}

export default FunctionClick