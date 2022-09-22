import React from 'react'
import CompC from './context/CompC'
import HookCompC from './context/usecontext/HookCompC'
import DataFetching from './DataFetching'
import GetPincode from './GetPincode'
import ChangeTitle from './useEffect/ChangeTitle'
import HookMouse from './useEffect/HookMouse'
import IntervalCounter from './useEffect/IntervalCounter'
import DataFetchingg from './useReducer/DataFetchingg'
import ReducerCounter from './useReducer/ReducerCounter'
import ReducerCounterTwo from './useReducer/ReducerCounterTwo'
import ReducerCounterThree from './useReducer/ReducerCountThree'
import ContextWithReducer from './useReducer/UseReducerWithUseContext/Wrapper'
import DataFetchingState from './useState/DataFetchingState'
import HookCounter from './useState/HookCounter'
import HookCounterThree from './useState/HookCounterThree'
import HookCounterTwo from './useState/HookCounterTwo'

const Hook = () => {
  return (
    <div>
        <section id='useState'>
            <h1>UseState</h1><hr/>
            <HookCounter/>
            <HookCounterTwo/>
            <HookCounterThree/>
            <h3>Data fetching using useState</h3>
            <DataFetchingState/>
        </section>
        <section id='useEffect'>
            <h1>UseEffect</h1><hr/>
            <ChangeTitle/>
            {/* <HookMouse/> */}
            <IntervalCounter/>
            <DataFetching/>
            <GetPincode/>
        </section>

        <section id='contextHook'>
          <h1>Hook Context</h1>
          <CompC/>

          <h1>useContext Hook</h1>
          <div style={{textAlign:'center'}}>
            <HookCompC/>
          </div>
        </section>

        <section id='reducer'>
          <h1>Reducers in Hook</h1>
          <ReducerCounter/>
          <ReducerCounterTwo/>
          <div>
            <h2>counter 3</h2>
            <ReducerCounterThree/>
          </div>
          <h2>Reducer conter with context</h2>
          <ContextWithReducer/>

          <h2>Data fetching With Reducer</h2>
          <DataFetchingg/>
        </section>
    </div>
  )
}

export default Hook