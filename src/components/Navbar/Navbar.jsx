import Class from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={Class.nav}>
        <div>    
            <a href='profile'>Profile</a>
        </div> 
        <div>
            <a href='dialogs'>Dialogs</a>
        </div>   
        <div> 
            Music
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