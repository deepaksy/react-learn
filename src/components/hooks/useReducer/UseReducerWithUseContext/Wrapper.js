import React,{useReducer,useContext} from 'react'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import ComponentC from './ComponentC'

const initialState=0;

const reducer = (state,action)=>{
    switch(action){
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
            return initialState
        default:
            return state
    }
}
export const CountContext = React.createContext()
const ContextWithReducer = () => {
    const [count,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
        Count - {count}
        <CountContext.Provider value={{
            countState:count,
            countDispatch:dispatch
        }}>
        <ComponentA/>
        <ComponentB/>
        <ComponentC/>
        </CountContext.Provider>
    </div>
  )
}

export default ContextWithReducer