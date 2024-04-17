import Class from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={Class.nav}>
        <div>    
            <NavLink to="/profile" className={Class.link}> Profile </NavLink>
        </div> 
        <div>
            <NavLink to='/dialogs' className={Class.link}>Dialogs</NavLink>
        </div>   
        <div> 
            <NavLink to='/music' className={Class.link}>Music</NavLink>
        </div>  
        <div>
            Settings 
        </div>  
        <div>
            Some new
       </div>  
    </nav>
  )   
};

export default Navbar;