import React,{useContext} from 'react'
import { CountContext } from './Wrapper'
const ComponentD = () => {
    const countContext = useContext(CountContext)
    return (
      <div>
        <button onClick={()=>countContext.countDispatch('increment')}>Increment</button>
          <button onClick={()=>countContext.countDispatch('decrement')}>Decrement</button>
          <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>
      </div>
    )
  }

export default ComponentD