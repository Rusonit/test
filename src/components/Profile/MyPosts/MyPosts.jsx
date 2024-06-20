import Post from './Posts/Post';
import { createRef, Component } from 'react';
import React from 'react';
import {addPostActionCreater, onPostChangeActionCreater} from '../../redux/profileReducer';


const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post likeCount={p.likeCount} message={p.message} />)

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let newText = newPostElement.current.value;
    props.onPostChange(newText);
  };

  return (  
      <>
          <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement} style={{marginLeft:'10px'}} />
        <div>   
          <button onClick={onAddPost} style={{marginLeft:'10px'}}>add post</button>   
        </div>  
          {postsElements}
      </>
  );
}

export default MyPosts;