import Class from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import SiteBar from './SiteBar'

const Navbar = (props) => {

  let topFriends = props.state.topFriends.map(el => <div> <img src={el.img}/> <div>{el.name}</div> </div>);
        <img src={props.ava} />  

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
        <div className={Class.topFriends}>
        <h3>Top friends:</h3>
        {topFriends}
        </div>
    </nav>
  )   
};

export default Navbar;