import { useNavigate } from 'react-router-dom';
import { BsJustify } from 'react-icons/bs'
import { AiOutlineLogout } from 'react-icons/ai'

function Header({OpenSidebar}) {
  const navigate = useNavigate()
  const handleLogout = () => {
    const userType = localStorage.getItem("userType");
    localStorage.removeItem("userFirstName");
    localStorage.removeItem("userLastName");
    window.localStorage.removeItem("userType")
    window.location.reload();
    navigate('/');
    console.log("Logged out");
    if (userType === "admin") {
      navigate('/admin-login'); 
    } else if (userType === "student") {
      navigate('/student-login'); 
    }
 };
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-right'>
              <AiOutlineLogout className='icon' onClick={handleLogout}/>
        </div>
    </header>
  )
}

export default Header;