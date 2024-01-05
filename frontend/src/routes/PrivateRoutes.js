import React from 'react'
import TopNavbar from '../components/common/topNavbar/TopNavbar'
import Sidebar from '../components/common/sidebar/Sidebar'
import Featured from '../components/private/featured/Featured'

const PrivateRoutes = () => {
  return (
    <div>
        <TopNavbar/>
        <Sidebar/>
        <Featured/>
    </div>
  )
}

export default PrivateRoutes