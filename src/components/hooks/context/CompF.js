import React from 'react'
import { UserContext } from './CompC'
const HookCompF = () => {
  return (
    <UserContext.Consumer>
        {
            user=>{
                return <div>User Context value is {user}</div>
            }
        }
    </UserContext.Consumer>
  )
}

export default HookCompF