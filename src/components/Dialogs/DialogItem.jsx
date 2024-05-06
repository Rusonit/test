import {NavLink} from 'react-router-dom';
import Class from './DialogsItem.module.css';

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;

  return (
    <>
      <div className={Class.ava}> 
        <img src={props.ava} />  
        <NavLink to={path} className={Class.dialogItem}>{props.name} </NavLink> 
      </div>
    </>  
    )
};

export default DialogItem;
