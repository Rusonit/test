import Post from './Posts/Post';
import { createRef, Component } from 'react';
import React from 'react';
import {addPostActionCreater, onPostChangeActionCreater} from '../../redux/profileReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreater()); 
  };

  let onPostChange = (newText) => {
    props.store.dispatch(onPostChangeActionCreater(newText));       
  };

  return (  
      <MyPosts UpdateNewPostText={onPostChange} addPost={addPost}
               posts={state.profilePage.posts}
               newPostText={state.profilePage.newPostText} />
  );
}

export default MyPostsContainer;