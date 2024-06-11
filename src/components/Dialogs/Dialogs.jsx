import Class from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import DialogItem from './DialogItem';
import Message from './Message';
import React from 'react';
import { createRef } from 'react';
import {addNewMessageActionCreater, updateMessageTextActionCreater} from '../redux/dialogsReducer';

const  Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name} ava={d.img}/>)
  let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} />)
  let newMessageText = state.newMessageText;

  let onSendMessageClick = () => {
    props.sendMessage();
  }

  let onNewMessageChange = (event) => {
    let text = event.target.value;
    props.updateNewMessageText(text);
  }

  return (
    <div className={Class.dialogs}>
      <div className={Class.dialog}>
        {dialogsElements}
      </div>      
      <div className={Class.messages}>
        {messagesElements}

        <textarea onChange={onNewMessageChange} value={newMessageText} />
        <div>  
          <button onClick={onSendMessageClick}>new message</button>
        </div>
      </div>
    </div>  
  )
};


export default Dialogs;