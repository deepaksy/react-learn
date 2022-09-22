import React, { useContext } from 'react'
import { UserContext } from './HookCompC'
const CompF = () => {
  const user = useContext(UserContext)
  return (
    <div>
      Context recieved - {user}
    </div>
  )
}

export default CompF