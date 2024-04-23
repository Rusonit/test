import Class from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';


const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;

  return (
    <div>
      <NavLink to={path} className={Class.dialogItem}>{props.name} </NavLink> 
    </div>
    )
};

const Message = (props) => {
  return (
  <div className={Class.messages}> {props.message} </div>
  );
}  

const Dialogs = (props) => {

  let dialogs = [
    { id: 1, name: 'Leonardo'},
    { id: 2, name: 'Donatello'},
    { id: 3, name: 'Mickelangelo'},
    { id: 4, name: 'Rafael'},
    { id: 5, name: 'Splinter'}
  ];

  let messages = [
    { id: 1, message: 'Cowabanga!'},
    { id: 2, message: 'Hey Leo!'},
    { id: 3, message: 'Where is Casey?!'}
  ];

  let dialogsElements = dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
  let messagesElements = messages.map(m => <Message message={m.message} />)

  return (
    <div className={Class.dialogs}>
      <div className={Class.dialog}>
        {dialogsElements}   
      </div>      
      <div className={Class.messages}>
        {messagesElements}
      </div>  
    </div>  
  )
};


export default Dialogs;