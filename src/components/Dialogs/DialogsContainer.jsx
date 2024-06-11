import {NavLink} from 'react-router-dom';
import React from 'react';
import {addNewMessageActionCreater, updateMessageTextActionCreater} from '../redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  let onSendMessageClick = () => {
    props.store.dispatch(addNewMessageActionCreater());
  }

  let onNewMessageChange = (text) => {
    props.store.dispatch(updateMessageTextActionCreater(text));
  }

  return (
    <Dialogs updateNewMessageText={onNewMessageChange} sendMessage={onSendMessageClick}
    dialogsPage={state}/>  
  )
};


export default DialogsContainer;