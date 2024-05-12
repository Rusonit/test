import Class from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import DialogItem from './DialogItem';
import Message from './Message';
import React from 'react';
import { createRef } from 'react';


const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name} ava={d.img}/>)
  let messagesElements = props.state.messages.map(m => <Message message={m.message} />)

  let newMessageText = React.createRef();

  let addMessage = () => {
    let text = newMessageText.current.value;
    alert(text);
  }

  return (
    <div className={Class.dialogs}>
      <div className={Class.dialog}>
        {dialogsElements}   
      </div>      
      <div className={Class.messages}>
        {messagesElements}

        <textarea ref={newMessageText} />
        <div>  
          <button onClick={addMessage}>new message</button>
        </div>
      </div>
    </div>  
  )
};


export default Dialogs;