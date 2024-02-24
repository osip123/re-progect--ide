import './Header.scss'

import { FaConnectdevelop } from "react-icons/fa";
import { CiShare1 } from "react-icons/ci";
import { Menu } from '../../data/Menu';
import { NavLink } from 'react-router-dom';
import { User } from '../../data/User';

const Header = () => {
  return (
    <>
    <header style={{width: '100vw', display: 'flex', justifyContent: "space-between",
    alignItems: 'center', height: '80px'}}>
        <div className="logo">
            <FaConnectdevelop />
        </div>
        <nav style={{backgroundColor: '#131417', width: '600px', height: '40px', borderRadius: '18px',
          display: 'flex', justifyContent: "space-around", alignItems: 'center'
         }}>
            {Menu.map((item) => (
                <NavLink key={item.id} to={item.path}>{item.title}</NavLink>
            ))}
        </nav>
        <div style={{width: '70px', height: '100%', display: 'flex', alignItems: 'center',
         justifyContent: 'space-between'}}>
          <CiShare1 color='#9499a1' size={30} />
          <span style={{fontSize: '19px'}}>{User.name}</span>
        </div>
    </header>
    </>
  )
}

export default Header
