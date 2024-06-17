import {NavLink} from 'react-router-dom';
import React from 'react';
import {addNewMessageActionCreater, updateMessageTextActionCreater} from '../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return (
    state: state.dialogsPage;
  )  
}

let mapDispatchToProps = (dispatch) => {
  return (
    updateNewMessageText: () => {
      dispatch(addNewMessageActionCreater());
    } 
    sendMessage: (text) => {
      dispatch(updateMessageTextActionCreater(text));
    }   
  );
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default DialogsContainer;