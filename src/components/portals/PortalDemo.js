import React from 'react'
import  ReactDOM  from 'react-dom'
function PortalDemo() {
  return ReactDOM.createPortal(
    <h1>Portals Demo</h1>,
    document.getElementById('portalRoot')
  )
}

export default PortalDemo