import Post from './Posts/Post';
import { createRef, Component } from 'react';
import React from 'react';
import {addPostActionCreater, onPostChangeActionCreater} from '../../redux/profileReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {

  let addPost = () => {
   //props.addPost();
   props.dispatch(addPostActionCreater()); 
  };

  let onPostChange = () => {
    let newText = newPostElement.current.value;
    // props.UpdateNewPostText(text);
    props.dispatch(onPostChangeActionCreater(newText));       
  };

  return (  
      <MyPosts />
  );
}

export default MyPostsContainer;