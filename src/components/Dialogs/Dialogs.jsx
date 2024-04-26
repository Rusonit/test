import Class from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import DialogItem from './DialogItem';
import Message from './Message';


const Dialogs = (props) => {

  let dialogsElements = props.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
  let messagesElements = props.messages.map(m => <Message message={m.message} />)

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