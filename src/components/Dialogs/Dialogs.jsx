import Class from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import DialogItem from './DialogItem';
import Message from './Message';
import React from 'react';
import { createRef } from 'react';
import {addNewMessageActionCreater, updateMessageTextActionCreater} from '../redux/state';

const Dialogs = (props) => {

  let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name} ava={d.img}/>)
  let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} />)

  let newMessageEl = React.createRef();

  let addNewMessage = () => {
    // props.addMessage();
    props.dispatch(addNewMessageActionCreater());
  }

  let updateMessageText = () => {
    let text = newMessageEl.current.value;
    // props.updateNewMessageText(text);
    props.dispatch(updateMessageTextActionCreater(text));
  }

  return (
    <div className={Class.dialogs}>
      <div className={Class.dialog}>
        {dialogsElements}
      </div>      
      <div className={Class.messages}>
        {messagesElements}

        <textarea onChange={updateMessageText} value={props.newMessageText} ref={newMessageEl} />
        <div>  
          <button onClick={addNewMessage}>new message</button>
        </div>
      </div>
    </div>  
  )
};


export default Dialogs;