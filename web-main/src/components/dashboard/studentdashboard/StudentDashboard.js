import { useState } from 'react'
import Header from '../Header';
import Sidebar from './SidebarStudent'
import Home from './RoutesStudent'
import '../StudentAdminDashboard.css'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home className="main"/>
    </div>

      
  )
}

export default App