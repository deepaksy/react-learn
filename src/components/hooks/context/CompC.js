import React from 'react'
import CompE from './CompE'

export const UserContext = React.createContext('Deepak')
const CompC = () => {
  return (
    <div>
        <UserContext.Provider value='Vishwas'>
        <CompE/>
        </UserContext.Provider>
    </div>
  )
}

export default CompC