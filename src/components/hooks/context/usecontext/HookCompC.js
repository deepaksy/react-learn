import React from 'react'
import HookCompE from './HookCompE'

export const UserContext = React.createContext('Deepak')
const HookCompC = () => {
  return (
    <div>
        <UserContext.Provider value='Vishwas'>
        <HookCompE/>
        </UserContext.Provider>
    </div>
  )
}

export default HookCompC