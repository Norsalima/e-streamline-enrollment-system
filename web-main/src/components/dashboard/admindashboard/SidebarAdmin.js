import React from 'react'
import { Link } from 'react-router-dom';    
import 
{BsFillFilePersonFill, BsGrid1X2Fill} from 'react-icons/bs'
import {BiRegistered} from 'react-icons/bi'


function SidebarAdmin({openSidebarToggle, OpenSidebar}) {
  return (
    <>
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsFillFilePersonFill  className='icon_header'/> Admin
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <Link to="/admin-dashboard/dashboard">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/admin-dashboard/enrollees">
                    <BiRegistered className='icon'/> Enrollees
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/admin-dashboard/registered-student">
                    <BiRegistered className='icon'/> Registered Students
                </Link>
            </li>
        </ul>
    </aside>
    </>
    
  )
}

export default SidebarAdmin