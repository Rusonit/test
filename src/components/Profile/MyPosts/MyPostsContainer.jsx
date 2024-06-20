import Post from './Posts/Post';
import { createRef, Component } from 'react';
import React from 'react';
import {addPostActionCreater, onPostChangeActionCreater} from '../../redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  };
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreater())
    },
    onPostChange: (newText) => {
      dispatch(onPostChangeActionCreater(newText))
    }             
  };
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;