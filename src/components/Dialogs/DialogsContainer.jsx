import {NavLink} from 'react-router-dom';
import React from 'react';
import {addNewMessageActionCreater, updateMessageTextActionCreater} from '../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }   
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (text) => {
      dispatch(updateMessageTextActionCreater(text));
    },
    sendMessage: () => {
      dispatch(addNewMessageActionCreater());
    }   
  };
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;